const express = require('express');
const path = require('path');
const app = express();

// Puerto donde correrá el servidor
const PORT = 4000;

// Servir archivos estáticos desde carpeta frontend
app.use(express.static(path.join(__dirname, '../frontend')));

// Ruta principal (index.html)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
