var ws = require("nodejs-websocket");
var user = require("./user/user")
var clients = [];
var server;

function StartWS() {
    var isuser = 0
    server = ws.createServer(function (conn) {
        conn.on("text", function (str) {
            // var promise = user.userlogin(str);
            // promise.then(function(value){
            //     //console.log(value);
            //     if(value==1){
            //         isuser = 1
            //     }
            // });
            // if (isuser==1) {
            //     console.log("添加用户"+str)
            //     isuser = 0
            // }
            // if (isAJSON(str)) {
            //     clients[str] = conn;
            //     console.log("添加用户"+str)
            // }
            if (!isAJSON(str)&&str!="") {
                clients[str] = conn;
            }

            console.log(count(clients))
            for (var prop in clients) {
                if (clients.hasOwnProperty(prop)) {
                    clients[prop].send(str);
                }
            }



        })
        conn.on("close", function (code, reason) {
            console.log("关闭连接")
        });
        conn.on("error", function (code, reason) {
            console.log("异常关闭")
        });
    }).listen(233)
    console.log("WebSocket建立完毕")

    function count(o) { //用户计数
        var t = typeof o;
        if (t == 'string') {
            return o.length;

        } else if (t == 'object') {
            var n = 0;
            for (var i in o) {
                n++;
            }
            return n;
        }
        return false;
    }

    function isAJSON(string) {
        try {
            JSON.parse(string)
        } catch (error) {
            if (error instanceof SyntaxError) return false;
        }
        return true
    }
}
module.exports = {
    StartWS
}