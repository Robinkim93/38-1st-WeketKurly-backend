const productsService = require("../service/productsService");

const getProducts = async (req, res, next) => {
  const product = await productsService.getProducts();

  return res.json({ item: product });
};

const getMdProducts = async (req, res, next) => {
  const { categoriesId } = req.params;

  if (!categoriesId) {
    return res.status(400).json({ message: "KEY_ERROR" });
  }

  const data = await productsService.getMdProducts(categoriesId);

  return res.json({ item: data });
};

const getSpecialPriceProducts = async (req, res, next) => {
  const data = await productsService.getSpecialPriceProducts();

  return res.json({ item: data });
};

module.exports = { getProducts, getMdProducts, getSpecialPriceProducts };