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
            IPost();
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

    // function for posting interface 
    function IPost() {
        // create questions object 
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
            },
            {
                type: 'input',
                name: 'item'
            }

        ]
    }
