const express = require('express')
const router = express.Router()
const { ObjectId } = require('mongodb')

// Get /api/categories
router.get('/', async (req, res) => {
  try {
    const categorias = await req.db.collection('categories').find({}).toArray()
    res.json(categorias)
  } catch (error) {
    res.status(500).json({ message: 'Error del servidor' })
  }
})


module.exports = router