const express = require("express");
const carouselController = require("../controller/carouselController");

const router = express.Router();

router.post("/carousel", async function (req, res) {
  await carouselController.create(req, res);
});

router.get("/carousel", async function (req, res) {
  await carouselController.get(req, res);
});

router.get("/carousel/", async function (req, res) {
  await carouselController.getAll(req, res);
});

module.exports = router;
