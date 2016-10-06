var Emiter = require('./Emiter');

loadListener = new Emiter;

loadListener.on('beforeLoad',function(){
    console.log("BEFORE load - data");
});

loadListener.on('afterLoad',function(){
    console.log("AFTER before load - data");
});

loadListener.fire('beforeLoad');
loadListener.fire('afterLoad');

