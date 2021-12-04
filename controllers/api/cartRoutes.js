const { Cart } = require("../../models");
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
    console.log(`cartRoutes post hit`, req.session);
    const productId = req.body;
    console.log(`checkoutpageerrordebuggingstatement`, productId)
    const userId = req.session.user_id
    console.log(userId);
    try {
      
        // const newCartItem = await Cart.create({
        //     userId,
        //     productId,  
        //     logged_in: req.session.logged_in,
        // })
  
     console.log(`try hit`)
      // res.status(200).json(newCartItem);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  router.put("/", async (req, res) => {
    // we expect the body to have a cart id
    console.log(`cartRoutes hit`, req.body);
const cardItemId = ""
    try {
        const updatedCartItem = await Cart.update({
            cardItemId
        }, {
            ...req.body
        })
  
     // console.log()
      res.status(200).json(updatedCartItem);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  // router.delete("/",  async (req, res) => {
  //   // we expect the body to have a cart id
  //   console.log(`cartRoutes hit`, req.body);
  //   const cardItemId = ""
  //   try {
      
  //       const updatedCartItem = await Cart.destroy({
  //            cardItemId 
  //       })
  
  //    // console.log()
  //     res.render("products", { products });
  //   } catch (err) {
  //     res.status(500).json(err);
  //   }
  // });

  // we expect the body to have a cart id
//   console.log(`cartRoutes post hit`, req.body);
//   const productId = req.body;
//   const userId = req.session.user_id;
//   try {
//     const newCartItem = await Cart.create({
//       userId,
//       productId,
//     });

//     console.log();
//     res.status(200).json(newCartItem);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.put("/", async (req, res) => {
//   // we expect the body to have a cart id
//   console.log(`cartRoutes hit`, req.body);
//   const cardItemId = "";
//   try {
//     const updatedCartItem = await Cart.update(
//       {
//         cardItemId,
//       },
//       {
//         ...req.body,
//       }
//     );

//     console.log();
//     res.status(200).json(updatedCartItem);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

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

    // TODO: send email
    // nodemailer // recommend
    // sendgrid

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
