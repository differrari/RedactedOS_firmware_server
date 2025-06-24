const http = require('./http.js')
const udp = require('./udp.js')

http.start(80)
udp.start(8080)