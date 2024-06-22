import express from 'express';
import http from 'http';
import { Server as SocketServer } from 'socket.io';
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors"
import dotenv from "dotenv/config";
import { createRoles } from "./libs/initialSetup.js";

import productsRoutes from "./routes/products.routes.js"
import authRoutes from "./routes/auth.routes.js"


const app = express();
createRoles();
app.use(cors());
app.use(morgan("dev"));
app.use(helmet());
app.use(express.json()); // <=== Enable JSON body parser


const server = http.createServer(app);
const io = new SocketServer(server);

io.on('connection', (socket) => {
  console.log('Cliente conectado al servidor de Socket.IO');

  socket.on('message', (message) => {
    console.log(`Mensaje recibido: ${message}`);
    socket.emit('message', `Echo: ${message}`);
  });

  socket.emit('message', '¡Conexión establecida con el servidor de Socket.IO!');
});

app.use('/api/products', productsRoutes);
app.use('/api/auth', authRoutes);

export default server;