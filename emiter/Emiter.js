/**
*   Malnurished version of nodejs Event Emitter :)
*/  @author sushilshinde.com

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

/**
* It's emit in nodejs but I like name fire
* @param {string} e event identifier
*/
Emiter.prototype.fire = function(e){
    //array of the all the event hanlders for event named e
    var callabacks = eventQueue[e];    
    if(callabacks){
        //execute all handlers 
        callabacks.forEach(function(callback){
            //use callback.call/callback.apply for context
            //send value to callback using call
            callback.call(this,{allIsWell:true}); 
        })      
    }
}
//CJS export
//Prototype scope (create only with 'new')
module.exports = Emiter;
