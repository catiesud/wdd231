const express = require('express');
const WebSocket = require('ws');
const app = express();
const PORT = 5500;

// Servir arquivos estáticos
app.use(express.static('final'));

// Iniciar servidor HTTP
const server = app.listen(PORT, () => {
  console.log(`Servidor rodando em http://127.0.0.1:${PORT}`);
});

// Configurar WebSocket
const wss = new WebSocket.Server({ server });

wss.on('connection', ws => {
  console.log('Cliente conectado via WebSocket');
  ws.on('message', message => {
    console.log(`Mensagem recebida: ${message}`);
  });
});
