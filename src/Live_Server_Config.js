const NodeMediaServer = require("node-media-server")
const config = {
    rtmp: {
        port: 1935,
        chunk_size: 60000,
        gop_cache: true,
        ping: 60,
        ping_timeout: 60
      },
      http: {
        port: 8000,
        webroot: './public',  
        mediaroot: './media', 
        allow_origin: '*'
      },
      auth: {
        publish: true,
        secret: 'Luncode',   // 锁定用户
        api:true,
        api_user: 'admin',
        api_pass: 'admin',
      }
}
function Start_LiveServer(){
    var start = new NodeMediaServer(config)
    start.run();
    console.log("Live 服务器启动成功")
}

module.exports = {
    Start_LiveServer
}