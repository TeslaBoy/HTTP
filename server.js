const net = require('net');

const server = net.createServer((socket) => {
  socket.on('data', (data) => {
    console.log('Отримані дані від клієнта:\n', data.toString());

    // Формуємо HTTP-відповідь з кодуванням utf-8
    const response = [
      'HTTP/1.1 404 Not found',
      'Content-Type: text/plain; charset=utf-8',
      'Content-Length: 26',
      '',
      'Привіт, клієнте!'
    ].join('\r\n');

    // Відправляємо відповідь
    socket.write(response);
    socket.end();  // Закриваємо з'єднання
  });
});

server.listen(3000, () => {
  console.log('TCP сервер працює на порту 3000');
});
