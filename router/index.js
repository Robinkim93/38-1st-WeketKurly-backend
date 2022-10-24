const express = require("express");

const usersRouter = require("./usersRouter");
const detailRouter = require("./detailRouter");
const productsRouter = require("./productsRouter");
const bannerRouter = require("./bannerRouter");

const router = express.Router();

router.use("/users", usersRouter.router);
router.use("/detail", detailRouter.router);
router.use("/products", productsRouter.router);
router.use("/banner", bannerRouter.router);

module.exports = router;
