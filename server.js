require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const { MongoClient } = require('mongodb')

const productRoutes = require('./routes/products')
const categoryRoutes = require('./routes/categories')

const app = express()
const PORT = process.env.PORT || 3000
const uri = process.env.MONGODB_URI

app.use(cors())
app.use(express.json())

// Conexión a MongoDB
MongoClient.connect(uri)
  .then(client => {
    console.log('Conectado a MongoDB Atlas')
    const db = client.db('mercapp')

    app.use((req, res, next) => {
      req.db = db
      next()
    })

    // Rutas
    app.use('/api/products', productRoutes)
    app.use('/api/categories', categoryRoutes)

    // Arrancar el servidor
    app.listen(PORT, () => {
      console.log(`El servidor está corriendo en http://localhost:${PORT}, iniciar tambien el front-end para probar la aplicación`)
    })
  })
  .catch(error => 
    console.error('Error al conectar a MongoDB Atlas:', error))