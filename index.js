const cli = require('inquirer'); 

let postOrBid = [
    {
        type: 'list',
        name: 'postOrBid',
        message: 'Would you like to Post an ad or Bid on an item?',
        choices: ['Post','Bid']
    }
]

cli.prompt(postOrBid)
    .then(function(response) {
        console.log(response);
    })
