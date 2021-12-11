const { Cart, User, Product } = require("../../models");
const withAuth = require("../../utils/auth");
const router = require("express").Router();

// get all cart items for the user
router.get("/", async (req, res) => {
  // get all the cart items from the table where the user id is the same
  // as that in the session
  try {
    const userId = req.session.user_id;
    const cartItems = await Cart.findAll({
      where: {
        userId,
      },
    });
    res.status(200).json(cartItems);
  } catch (err) {
    res.status(500).json;
  }
});

router.post("/", async (req, res) => {
  // we expect the body to have a cart id
  // console.log(`cartRoutes post hit`, req);
  const productId = req.body;
  console.log(`checkoutpageerrordebuggingstatement`, productId);
  const userId = req.session.user_id;
  console.log(`Sessh`, req.session);
  try {
    const userData = await User.findByPk(req.session.user_id, {
      include: [{ model: Cart }],
      attributes: { exclude: ["password"] },
      // include: [{ model: Product}],
    });
    const productData = await Product.findByPk(req.body.productId, {});

    // const cartData = await Cart.findByPk(fromsomewhere, {})

    const user = userData.get({ plain: true });
    // const cart = cartData.get({plain:true})
    const product = productData.get({ plain: true });
    console.log(`product USER`, product, user);
    // cartId&sessionId + userID
    // cartId + productId * X

    // const found = array1.find(element => element == product_id && size) {
    // if (user_id && product_id && size) {
    // get current qty in db
    // add new qty to current qty
    //   update qty in db
    // } else {

    const foundCartItem = user.carts.find(
      (element) =>
        element.product_id === req.body.productId &&
        element.size === req.body.size
    );
    
    let cartItem;
    if (!foundCartItem) {
      console.log('cartItemNewRow');
      console.log(Cart);
      cartItem = await Cart.create({
        user_id: user.id,
        user_name: user.name,
        product_id: product.id,
        product_name: product.product_title,
        size: req.body.size,
        product_quantity: req.body.quantity,
        // filename: product.filename,
        // logged_in: req.session.logged_in,
      });
    } else {
      console.log(`update row`);
      cartItem = await Cart.update(
        {
          product_quantity:
            parseInt(req.body.quantity) +
            parseInt(foundCartItem.product_quantity),
        },
        {
          where: {
            id: foundCartItem.id,
          },
        }
      );
    }

    console.log(`new cart item`, cartItem);
    res.status(200).json(cartItem); //}
  } catch (err) {
    // console.log(err);
    res.status(500).json(err);
  }
});

router.put("/", async (req, res) => {
  // we expect the body to have a cart id
  console.log(`cartRoutes hit`, req.body);
  const cardItemId = "";
  try {
    const updatedCartItem = await Cart.update(
      {
        cardItemId,
      },
      {
        ...req.body,
      }
    );

    // console.log()
    res.status(200).json(updatedCartItem);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/", withAuth, async (req, res) => {
  // we expect the body to have a cart id
  console.log(`cartRoutes hit`, req.body);
  const cardItemId = "";
  try {
    const updatedCartItem = await Cart.destroy({
      cardItemId,
    });

    console.log();
    res.render("products", { products });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/checkout", async (req, res) => {
  try {
    const userId = "";
    // get the card items and then send and email
    const cardItems = await Cart.findAll({
      where: {
        userId,
      },
    });

    const deletedCartItems = await Cart.destroy({
      where: {
        userId,
      },
    });
    res.json({ message: "Your order has successfuly been placed!" });
  } catch (e) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

module.exports = router;
