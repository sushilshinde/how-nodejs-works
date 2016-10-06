/**
*   Example : extending nodejs core module to augment features
*/  @author sushilshinde.com

var EE = require('events') // event emitter
var UTIL = require('util')

//define constructor for subclass
function NewEE(){}

//inherit proto chain from EE
UTIL.inherits(NewEE,EE);

/**
* Add new wrapper method to the extended EE, 
* as jquery and extjs uses fire
* @param {string} event identifier
*/
NewEE.prototype.fire = function(name) {
    //call super emit
    this.emit(name)
}

var ee = new NewEE()

ee.on('data',function(){
    console.log('d a t a loaded')
})

//calls wrapper method added to subclass 
ee.fire('data')
