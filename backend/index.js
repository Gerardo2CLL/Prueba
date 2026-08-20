const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Importar la conexión a la base de datos (asegúrate de tener creado el archivo db.js)
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

// --- MIDDLEWARES ---
app.use(cors()); // Permite peticiones desde Angular (localhost:4200)
app.use(express.json()); // Permite a la API recibir y entender datos en JSON

// --- RUTAS DE PRUEBA ---

// Ruta base para verificar que el backend responde
app.get('/api/status', (req, res) => {
  res.json({
    estado: 'Servidor backend ejecutándose correctamente',
    timestamp: new Date()
  });
});

// ruta para obtener partidos de la base de datos
app.get('/api/calendario/chivas', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM partidos WHERE es_chivas = true ORDER BY fecha ASC;');
    res.json(rows);
  } catch (error) {
    console.error('Error al obtener partidos de Chivas:', error);
    res.status(500).json({
      error: 'No se pudo obtener los partidos de Chivas',
      detalle: error.message
    });
  }
});

//ruta para obtener la tabla de posiciones de la base de datos
app.get('/api/tabla-general', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM tabla_general ORDER BY posicion ASC;');
    res.json(rows);
  } catch (error) {
    console.error('Error al obtener la tabla de posiciones:', error);
    res.status(500).json({
      error: 'No se pudo obtener la tabla de posiciones',
      detalle: error.message
    });
  }
});


// Ruta para probar la conexión con la base de datos SQL
app.get('/api/test-db', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT 1 + 1 AS resultado');
    res.json({
      mensaje: '¡Conexión a la base de datos exitosa!',
      resultado: rows[0].resultado
    });
  } catch (error) {
    console.error('Error al conectar a la Base de Datos:', error);
    res.status(500).json({
      error: 'No se pudo establecer conexión con la base de datos',
      detalle: error.message
    });
  }
});

// --- INICIALIZAR SERVIDOR ---
app.listen(PORT, () => {
  console.log(`🚀 Servidor backend escuchando en http://localhost:${PORT}`);
});
