const mysql = require("mysql");
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'mysql',
    user: 'root',
    password: 'vivafrog',
    database: 'myapp'

    // host: 'mysql',
    // user: 'root',
    // password: 'vivafrog',
    // database: 'myapp'
});  
exports.pool = pool;