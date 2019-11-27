var socket = io();

socket.on('connect', function () {
    console.log('Connected to server!');
});

socket.on('disconnect', function () {
    console.log('Disconnected to server');
});

socket.emit('message:send', { user: 'JMGC', message: 'Hello world!' }, function (res) {
    console.log(res);
});

socket.on('message:send', function (data) {
    console.log(data);
});