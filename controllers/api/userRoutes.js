const router = require("express").Router();
const { User } = require("../../models");

router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      res.status(400).json({
        message: "Can't leave any field empty!",
      });
      return;
    }

    const userData = await User.findOne({ where: { email } });

    if (userData) {
      res.status(400).json({ message: "Email is already registered" });
      return;
    }

    const newUser = await User.create({ name, email, password });

    req.session.save(() => {
      req.session.user_id = newUser.id;
      req.session.logged_in = true;

      res.json({ user: newUser, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/login", async (req, res) => {
  // console.log(`login userRoutes hit`);
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });
    const validPassword = await userData.checkPassword(req.body.password);

    if (!userData || !validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    // if (!validPassword) {
    //   res
    //     .status(400)
    //     .json({ message: "Incorrect email or password, please try again" });
    //   return;
    // }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
