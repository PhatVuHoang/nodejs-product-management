const { DataTypes } = require("sequelize/dist");

const createProductModel = (sequelize) => {
  return sequelize.define("Product", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    sale: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};

module.exports = {
  createProductModel,
};
