const router = require("express").Router();

const products = [
    {
        product_title: "Hawaiki Logo - Muscle Tee - Black",
        description: "Suns out, guns out with your Hawaiki logo muscle tee. Ideal top for your everday workouts or a stylish sleevless option for the warm summer days!",
        price: "$50",
        filename: "black-hawaiki-logo-2.jpg",
    },
    {
        product_title: "Hawaiki Logo - Muscle Tee - Grey",
        description: "Suns out, guns out with your Hawaiki logo muscle tee. Ideal top for your everday workouts or a stylish sleevless option for the warm summer days!",
        price: "$50",
        filename: "grey-hawaiki-logo.jpg"
    }
];

router.get("/products", async (req, res) => {
    res.render("products", {products});
});

router.get("/products/:num", async (req, res) => {
    return res.render("product", products[req.params.num - 1]);
});
  
module.exports = router;
  