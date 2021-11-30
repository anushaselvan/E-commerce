const { Product } = require("../../models");

const router = require("express").Router();

// router.get("/", async (req, res) => {
//     console.log(`productRoutes hit`);
//   try {
//     // product_title, price, image

//     // const productData = await Product.findAll({
//     //   include: [
//     //     { model: Product, attributes: ["product_title", "price", "filename"] },
//     //   ],
//     // });
//     // const products = productData.map((product) => product.get({ plain: true }));
//     // res.render("products", { products });
//   } catch (err) {
//     res.status(404).json(err);
//   }
// });


  

module.exports = router;
