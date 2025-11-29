const express = require('express')
const router = express.Router()
const { ObjectId } = require('mongodb')

// Get /api/products
router.get('/', async(req, res) => {
    try {
      const productos = await req.db.collection('products').find({}).toArray()
      res.json(productos)
    } catch (error) {
      res.status(500).json({ message: 'Error del servidor' })
    }
})

// Get /api/products/:id
router.get('/:id', async(req, res) => {
    try {
      const producto = await req.db.collection('products').findOne({ _id: new ObjectId(req.params.id) })
      if (!producto) return res.status(404).json({ message: 'Producto no encontrado' })
      res.json(producto)
    } catch (error) {
      res.status(500).json({ message: 'Error del servidor' })
    }
})

// POST /api/products
router.post('/', async (req, res) => {
  try {
    const product = {
      ...req.body,
      categoryId: new ObjectId(req.body.categoryId) // convertir a ObjectId
    }
    const result = await req.db.collection('products').insertOne(product)
    res.status(201).json({ ...product, _id: result.insertedId })
  } catch (error) {
    res.status(500).json({ message: 'Error al crear producto' });
  }
})

// PUT /api/products/:id
router.put('/:id', async (req, res) => {
  try {
    const updateData = {
      ...req.body,
      categoryId: new ObjectId(req.body.categoryId) // convertir a ObjectId
    }
    const result = await req.db.collection('products').findOneAndUpdate(
      { _id: new ObjectId(req.params.id) },
      { $set: updateData },
      { returnDocument: 'after' }
    )
    if (!result.value) return res.status(404).json({ message: 'Producto no encontrado' })
    res.json(result.value)
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar producto' })
  }
})


// Delete /api/products/:id
router.delete('/:id', async (req, res) => {
    try {
      const result = await req.db.collection('products').findOneAndDelete({ _id: new ObjectId(req.params.id) })
      if (!result.value) return res.status(404).json({ message: 'Producto no encontrado' })
      res.json(result.value)
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar producto' })
    }
})

module.exports = router