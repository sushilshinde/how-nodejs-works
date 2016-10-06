//exposiing constuctor as API
function Emiter() {}

//Keeping queue private 
var eventQueue = {};

/*
    Register event
    @e          string      event name 
    @callback   Function    callback function when the event is fired(jquery,extjs)/emited(nodejs)/digest(anuglarjs)
*/
Emiter.prototype.on = function(e,callback){
    //should not create new handler array for 
    //each event queue item, obj.on('data',fuction(){...}) call
    eventQueue[e] = eventQueue[e] || []; 
    //add hander to event queue item
    eventQueue[e].push(callback);
}

Emiter.prototype.fire = function(e){
    var callabacks = eventQueue[e];
    if(callabacks){
        callabacks.forEach(function(callback){
            callback();
        })      
    }
}
//CJS export
//Prototype scope (create only with 'new')
module.exports = Emiter;
