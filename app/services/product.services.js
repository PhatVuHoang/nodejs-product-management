const e = require("express");
const { Product } = require("../model");

const getListProduct = async () => {
  const productList = await Product.findAll();
  if (productList) return productList;
  return false;
};

const create = async (product) => {
  const newProduct = await Product.create(product);
  return newProduct;
};

const getProductDetailById = async (id) => {
  const product = await Product.findOne({
    where: {
      id,
    },
  });
  if (product) {
    return product;
  }
  return false;
};

const update = async (id, product) => {
  const productUpdate = await getProductDetailById(id);
  if (productUpdate) {
    productUpdate.name = product.name;
    productUpdate.amount = product.amount;
    productUpdate.price = product.price;
    productUpdate.sale = product.sale;
    const updatedProduct = await productUpdate.save();
    return updatedProduct;
  }
  return false;
};

const deleteProduct = async (id) => {
  const productDelete = await getProductDetailById(id);
  if (productDelete) {
    await Product.destroy({
      where: {
        id,
      },
    });
    return productDelete;
  }
  return false;
};

module.exports = {
  getListProduct,
  create,
  getProductDetailById,
  update,
  deleteProduct,
};
