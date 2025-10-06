const express = require('express');
const cors = require('cors');
const clienteRoutes = require('./routes/cliente.routes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/clientes', clienteRoutes);

module.exports = app;
