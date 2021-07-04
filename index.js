require('dotenv').config();
const path = require('path');

const express = require('express');
const cors = require('cors');

const { dbConnection } = require('./database/config');

// crear el servidor de express
const app = express();

// configurar cors
app.use( cors() );

// lectura y parseo del body
app.use( express.json() );

// Base de datos
dbConnection();

// directorio público
app.use( express.static('public') );

// Rutas
app.use('/api/usuarios', require('./routes/usuario') );
app.use('/api/login', require('./routes/auth') );
app.use('/api/hospitales', require('./routes/hospital') );
app.use('/api/medicos', require('./routes/medico') );
app.use('/api/todo', require('./routes/busqueda') );
app.use('/api/uploads', require('./routes/upload') );

app.get('*', (req,res) => {
    res.sendFile( path.resolve( __dirname, 'public/index.html' ) );
});

app.listen( process.env.PORT , () => {
    console.log('Servidor corriendo en el puerto ' + process.env.PORT);
});

