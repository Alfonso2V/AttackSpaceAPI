const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config();
const scoreRoutes = require('./src/scores')

const app = express()
const port = process.env.PORT || 3000

// middleware
app.use(express.json())
app.use('/api', scoreRoutes)

// Conexion a mongo
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("Todo bien"))
    .catch(() => console.log(error))

//Ruta obtener score
app.get('/', (req, res) => res.send('API para obtener scores y subir scores a la base de datos en el juego attack space. Desarrollado por AlfonsoV'))
app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}!`))