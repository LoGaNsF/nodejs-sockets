const { io } = require('../server');

io.on('connection', (client) => {
    console.log('User connected');

    client.emit('message:send', { user: 'Admin', message: 'Welcome!' });

    client.on('disconnect', () => {
        console.log('User disconnected');
    });

    client.on('message:send', (data, callback) => {
        console.log(data);

        client.broadcast.emit('message:send', data);

        /* if (data.user) {
            callback('Message received');
        } */
    });
});