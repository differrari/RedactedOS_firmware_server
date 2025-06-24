This is a very simple implementation of a server used for [REDACTED] OS. 
It listens for UDP packets on port 8080, which the OS can broadcast a packet to in order to find the server.
It also hosts a simple HTTP server on port 80, which the OS can connect to once it's found the server.

The server can run on any machine on the same local network as the OS.

It currently does not have much functionality. In the future it can be used as a firmware update server or app repository.
