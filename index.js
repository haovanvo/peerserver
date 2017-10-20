const peerServer = require('peer').PeerServer;

const port = process.env.PORT || 9000;

const server = peerServer({ port: port, path: '/live' }, () => {
    console.log('The peer server is listening on port: ' + port);
});
server.on('connection', conn => {
    console.log(conn);
});

server.on('disconnect', conn => {
    console.log(conn);
});