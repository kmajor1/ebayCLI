const cli = require('inquirer'); 
const searches = require('./query.js');

// create a new promise 
let qPromise = new Promise(function(resolve,reject) {
    searches.bidQuery();
    searches.connection.end(); 
    if (searches.bidData) {
        resolve(searches.bidData);
    }
     
        reject(new Error('Bad Query')); 
    
});

// resolve function 
const onResolved = (resolveValue) => console.log(resolveValue);
const onRejected = (err) => console.log(err); 

// execute the promise 
qPromise.then(onResolved,onRejected); 