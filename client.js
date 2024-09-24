const net = require('net');

// Підключення до сервера
const client = net.createConnection({ port: 3000 }, () => {
  // Відправляємо HTTP-запит
  const request = [
    'GET / HTTP/1.1',
    'Host: localhost',
    'Connection: close',
    '',
    ''
  ].join('\r\n');

  client.write(request);
});

// Обробка відповіді від сервера
client.on('data', (data) => {
  console.log('Отримана відповідь від сервера:\n', data.toString());
  client.end();
});
