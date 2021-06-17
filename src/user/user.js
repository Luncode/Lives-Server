const mysql = require("../db/dao")
const db = mysql.dbconn()
function userlogin(username) {
    var promise = new Promise(function (resolve) {
        let flag = 0
        let sql = "select username from user where username='" + username + "'";
        db.getConnection((err, conn) => {
            if (err) {
                console.log("db连接异常")
            } else {
                conn.query(sql, (err, result) => {
                    if (err) {
                        console.log("sql语句异常")
                    } else {
                        for (var i = 0; i < result.length; i++) {
                            if (result[i]['username'] != "") {
                                //console.log(1)
                                flag = 1
                            }
                        }
                    }
                    resolve(flag);
                })
            }
        })
    });
    promise.then(function(value){
        // console.log(value);
        return value;
    });
    return promise;
}

module.exports = {
    userlogin
}