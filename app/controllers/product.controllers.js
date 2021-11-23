const { getListProduct, create, getProductDetailById, update, deleteProduct } = require("../services/product.services");

const getProductList = async (req, res) => {
  const productList = await getListProduct();
  if(productList) res.status(200).send(productList);
  else res.status(404).send('Not Found!');
};

const createProduct = async (req, res) => {
  let product = req.body;
  const newProduct = await create(product);
  res.status(201).send(newProduct);
}

const getProductById = async (req, res) => {
  const param = req.params;
  const id = param.id;
  const product = await getProductDetailById(id);
  if(product) res.status(200).send(product);
  else res.status(404).send('Not Found!');
}

const updateProductById = async (req, res) => {
  const { id } = req.params;
  const product = req.body;

  const productUpdated = await update(id, product);

  if(productUpdated) res.status(200).send(productUpdated);
  else res.status(404).send('Not Found!');
}

const deleteProductById = async (req, res) => {
  const { id } = req.params;
  const productDeleted = await deleteProduct(id);
  if(productDeleted) res.status(200).send(productDeleted);
  else res.status(404).send('Not Found!');
}

module.exports = {
    getProductList,
    createProduct,
    getProductById,
    updateProductById,
    deleteProductById
}
