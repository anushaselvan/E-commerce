const path = require("path");
const routes = require("./controllers");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");

const sequelize = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3002;

const hbs = exphbs.create();

// setup Handlebars

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


// express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(require('./controllers/productRoutes'));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.info("Now listening on PORT: " + PORT));
});
