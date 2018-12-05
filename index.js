const cli = require('inquirer'); 

let postOrBid = [
    {
        type: 'list',
        name: 'postOrBid',
        message: 'Would you like to Post an ad or Bid on an item?',
        choices: ['Post','Bid']
    }
]

// opening prompt 
cli.prompt(postOrBid)
    .then(function(response) {
        // if post, call a posting interface 
        if (response.postOrBid === 'Post') {
            // call posting interface 
        } 
        else if (response.postOrBid === 'Bid') {
            // call bidding interface 
        }
        else {
            // something weird happened 
        }
    });

    // function for bidding interface 
    function IBid() {
        // load prompt that takes in bidding info? 

    }
