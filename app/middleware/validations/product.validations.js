const express = require("express");

const checkEmpty = (req, res, next) => {
  const { name, amount, price, sale } = req.body;
  if (name && amount && price && sale) next();
  else res.status(500).send("không được bỏ trống name, amount, price, sale");
};

const checkNumber = (req, res, next) => {
  const { amount, price, sale } = req.body;
  if(amount > 0 && price > 0 && sale > 0) next();
  else res.status(500).send("amount, price, sale phải lớn hơn 0");
};

module.exports = {
  checkEmpty,
  checkNumber
};
