const {Product, Category, Cart} = require("../models");


const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    res.render("homepage", {
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  try {
    res.render("login", {
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/products", async (req, res) => {
  try {
    const productData = await Product.findAll(
      {
        include : {model: Category, attributes:["category_name"]},
      }
    );    
    const products = productData.map((product) => product.get({ plain: true }));

   // console.log()
    res.render("products", { 
      products,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/products/:id", async (req, res) => {
  try {
    console.log(`product id hit`, req.params.id);
    const productData = await Product.findByPk(req.params.id, {
      
    });
    const product = productData.get({ plain: true });
    console.log(product);
    res.render("product",  
    {
    ...product, 
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get("/checkout", async(req, res) => {
  try {
    const cartData = await Cart.findAll(
      { //where: {user_id:req.session.user_id}
        //include : {model: [Product], attributes:["product_title", "filename", "price"]},

      }
    );
    const cart = cartData.map((product) => product.get({ plain: true }));
    console.log(cart);
    res.render("checkout", {
      logged_in: req.session.logged_in
      //products:cart
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
