const router = require("express").Router();

// const products = [
//     {
//         product_title: "Hawaiki Logo - Muscle Tee - Black",
//         product_id:"1",
//         description: "Suns out, guns out with your Hawaiki logo muscle tee. Ideal top for your everday workouts or a stylish sleevless option for the warm summer days!",
//         price: "$50",
//         filename: "black-hawaiki-logo-2.jpg",
//     },
//     {
//         product_title: "Hawaiki Logo - Muscle Tee - Grey",
//         product_id: "2",
//         description: "Suns out, guns out with your Hawaiki logo muscle tee. Ideal top for your everday workouts or a stylish sleevless option for the warm summer days!",
//         filename: "grey-hawaiki-logo.jpg"
//     }
// ];

// router.get("/products", async (req, res) => {
//     res.render("products", {products});
// });

// router.get("/products/:id", async (req, res) => {
//     return res.render("product", products[req.params.num - 1]);
// });
  
module.exports = router;
  