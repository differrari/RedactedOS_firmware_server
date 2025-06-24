const http = require('http')

var payload = {
  content: [
    {
      "name" : "test.elf",
      "size": 1,
      "version" : 0x000
    },
    {
      "name" : "firmware.elf",
      "size": 1,
      "version" : 0x002
    },
    {
      "name" : "game.elf",
      "size": 100,
      "version" : 0x010
    },
  ],
  len: 3
}

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify(payload))
})

module.exports = {
  server,
  start: (port = 80) => {
    server.listen(80, () => {
      console.log('Server running on port 80')
    })
  }
}