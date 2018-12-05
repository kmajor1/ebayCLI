const cli = require('inquirer'); 
const searches = require('./query.js');
 

// post or bid command line object for inquirer
let postOrBid = [
    {
        type: 'list',
        name: 'postOrBid',
        message: 'Would you like to Post an ad or Bid on an item?',
        choices: ['Post','Bid']
    }
]

// post a new ad command line object for inquirer
let postingQuestions = [
    {
        type: 'input',
        name: 'itemName',
        message: 'Please provide a name for your item:'

    },
    {
        type: 'input',
        name: 'itemDesc',
        message: 'Please provide an item description:'
    },
    {
        type: 'input',
        name: 'itemMSRP',
        message: 'Please enter an MSRP:'
    }
]



    // function for bidding interface 
    function IBid() {
        // create a new promise 
        let qPromise = new Promise(function(resolve,reject) {
            searches.bidQuery();
            resolve(searches.bidData);
            reject(console.log('no good'));
        })

        qPromise.then(function (value) {
            console.log(value);
            
            
        })

    }
        

    

    // bid list function 
    function assembleChoices() {
        // run the query 
    
    }

    // function for posting interface 
    function IPost() {
        // create questions object 
        cli.prompt(postingQuestions)
            .then(function (res) {
                console.log(res); 
                // send this object somewhere for use 
            })
        
        
    }

    

    // call prompt at open of app

cli.prompt(postOrBid)
.then(function(response) {
    // if post, call a posting interface 
    if (response.postOrBid === 'Post') {
        // call posting interface 
        IPost();
    } 
    else if (response.postOrBid === 'Bid') {
        // call bidding interface 
        IBid();
    }
    else {
        // something weird happened 
    }
});

// invoke bidlist 




