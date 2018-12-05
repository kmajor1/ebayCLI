var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: 'Jadsf1234!@#$',
    database: 'great_bay_db'
});

var input = process.argv[2]

if (input == 'post') {
    connection.connect();
    var bid = 'SELECT * FROM great_bay_db.item_table'


    connection.query(bid, function (error, results) {
        if (error) {
            console.log(error);
        }
        console.log(results)
        connection.query('INSERT into item_table (item_name, item_msrp, highest_bid, item_description) values("ice cream", 4, 0,"slightly used")', function (error, results) {
            if (error){
                console.log(error);
            }
        console.log(results);
        connection.end()
        });
});
}



