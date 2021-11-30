const router = require("express").Router();

const apiRoutes = require("./api");
const homepageRoutes = require("./homepageRoutes");
// const productRoutes = require("./productRoutes");

router.use("/", homepageRoutes);
router.use("/api", apiRoutes);
// router.use("/products", productRoutes);

module.exports = router;