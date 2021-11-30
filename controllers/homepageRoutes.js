const Product = require('../models/Product');

const router = require('express').Router();

router.get("/", async (req, res) => {
  try {
    res.render("homepage", {})
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req,res) => {
    try {
        res.render("login", {})
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/products', (req,res) => {
    try {
        res.render("products", {})
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/product/:id', async (req,res) => {
  try {
    const productData = await Product.findByPk(req.params.id, {
      include: [
        {
          model: Product, 
          attributes: ['id', 'product_title', 'price', 'filename']
        }
      ]
    });
    const product = productData.get({ plain:true });
      res.render("product", {product});
  } catch (err) {
      res.status(500).json(err)
  }
});

module.exports = router;