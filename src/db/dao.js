const mysql = require('mysql')

function dbconn(){
    const db = mysql.createPool({
        host:"localhost",
        user:"root",
        password:"root",
        database:"wss"
    })
    
    return db;
}

module.exports={
    dbconn
}