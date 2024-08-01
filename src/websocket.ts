export const WebSocketHandler = {
    open(ws) {
      console.log('WebSocket opened');
    },
    message(ws, message) {
      console.log('Received message:', message);
      // Echo the message back for now
      ws.send(`You said: ${message}`);
    },
    close(ws, code, message) {
      console.log('WebSocket closed');
    },
  };