import server from "../src/app.js";
import "../src/database.js";


const PORT = process.env.PORT || 4000;
const HOST = process.env.HOST;

server.listen(PORT, HOST, () => {
  console.log(`Servidor HTTP y servidor de Socket.IO en funcionamiento en http://${HOST}:${PORT}`);
});