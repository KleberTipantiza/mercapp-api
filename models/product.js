class Product {
  constructor(name, description, price, imageUrl, categoryId, stock) {
    this.name = name
    this.description = description
    this.price = price
    this.imageUrl = imageUrl
    this.categoryId = categoryId
    this.stock = stock
  }
}

module.exports = Product
