const ws = new WebSocket('ws://localhost:3000/websocket')

ws.onmessage = (e)	=> {
	console.log(e.data);
}

ws.send('Helo,websocket')

ws.close()

// var socket = io.connect('http://localhost:3000/websocket');
// socket.on('news', function(data) {
//     console.log(data);
//     socket.emit('my other event', { my: 'data' });
// });

// var socket = io('http://localhost');
// socket.on('connect', function() {});
// socket.on('event', function(data) {});
// socket.on('disconnect', function() {});
