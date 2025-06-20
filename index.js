const dgram = require('dgram');
const socket = dgram.createSocket('udp4');

var i = 0;

socket.on('message', (msg, rinfo) => {
    console.log(`[${i++}] FROM ${rinfo.address}:${rinfo.port}:`, msg.toString());
    const message = Buffer.from('world');
    socket.send(message, 0, message.length, rinfo.port, rinfo.address, (err) => {
        if (err) 
            console.error('Send error:', err);
        else 
            console.log(`Packet sent to ${rinfo.address}:${rinfo.port}`);
    });
});


socket.bind(8080, () => {
    console.log('Listening for broadcast on port 8080');
});

socket.on('error',function(error){
    console.log('Error: ' + error);
    socket.close();
}); 