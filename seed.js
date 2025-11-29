const fs = require('fs')

const categories = [
  { id: 1, name: "Computadoras" },
  { id: 2, name: "Accesorios" },
  { id: 3, name: "Smartphones" },
  { id: 4, name: "Audio" }
]

const products = [
  { id: 1, name: "Laptop HP Victus 16", description: "Laptop gamer de alta performance con tarjeta gráfica dedicada.", price: 750, imageUrl: "https://pycca.vteximg.com.br/arquivos/ids/289316-600-600/O23662.png?v=638914135082770000", categoryId: 1, stock: 8 },
  { id: 2, name: "Mouse Inalámbrico Logitech MX Master 3", description: "Mouse inalámbrico y ergonómico con alta precisión.", price: 25, imageUrl: "https://m.media-amazon.com/images/I/61cGVHDEj5S._AC_SL1500_.jpg", categoryId: 2, stock: 30 },
  { id: 3, name: "Smartphone Samsung Galaxy S25 Ultra", description: "Smartphone de última generación con cámara avanzada.", price: 1200, imageUrl: "https://mobilestore.ec/wp-content/uploads/2025/01/Samsung-Galaxy-S25-Ultra-Titanium-Gray-Mobile-Store-Ecuador.jpg", categoryId: 3, stock: 6 },
  { id: 4, name: "Audífonos Bose QuietComfort 35 II", description: "Audífonos con cancelación de ruido y sonido de alta calidad.", price: 299, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8ghP7ofw9tqE8WUhK6bx2Dt-zFilaJfgezA&s", categoryId: 4, stock: 10 },
  { id: 5, name: "Teclado Mecánico Razer BlackWidow V4 Pro", description: "Teclado mecánico para gaming con retroiluminación RGB.", price: 60, imageUrl: "https://assets2.razerzone.com/images/pnx.assets/ebf967982c88f89e300a50e4c8e60dea/razer-blackwidow-v4-pro-og-image.jpg", categoryId: 2, stock: 12 },
  { id: 6, name: "Laptop MSI Katana 15 B13V", description: "Laptop gamer de alta performance con tarjeta gráfica dedicada.", price: 900, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3H1cmfJBDvdVOWYbMh49WbEq32nFMb-fbSA&s", categoryId: 1, stock: 5 },
  { id: 7, name: "Iphone 16 Pro Max", description: "Smartphone de última generación con cámara avanzada y rendimiento superior.", price: 1300, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTluUbmVHpuQDmNi9SD1rvO71vIZsncznBg_w&s", categoryId: 3, stock: 8 },
  { id: 8, name: "Bocina Bluetooth JBL Charge 5", description: "Bocina portátil con sonido potente y resistente al agua.", price: 180, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbdYdnMyklOOpdj7B79nYB_Fe2EPZBW_uv9w&s", categoryId: 4, stock: 20 }
]

fs.writeFileSync('./data/categories.json', JSON.stringify(categories, null, 2))
fs.writeFileSync('./data/products.json', JSON.stringify(products, null, 2))

console.log("Datos iniciales creados en /data")
