const router = require('express').Router();

router.get("/", async (req, res) => {
  try {
    res.render("homepage", {
        
    });
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

module.exports = router;