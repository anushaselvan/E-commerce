const { sum } = require("../models/Product");

module.exports = {
    total: (price, quantity) => {
      return price*quantity;
    }
  };