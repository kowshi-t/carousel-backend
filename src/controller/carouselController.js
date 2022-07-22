const carouselModel = require("../model/carouselList");

module.exports.get = async function (req, res) {
  var slides = req.query.slides;

  const resp = await carouselModel.find().limit(slides);
  if (resp) {
    res.send({
      success: true,
      data: resp,
    });
  } else {
    res.send({
      success: false,
      data: [],
    });
  }
  console.log("slides :", slides);
};

module.exports.getAll = async function (req, res) {
  const resp = await carouselModel.find();
  if (resp) {
    res.send({
      success: true,
      data: resp,
    });
  } else {
    res.send({
      success: false,
      data: [],
    });
  }
};

module.exports.create = async function (req, res) {
  const { image, title, subTitle } = req.body;

  try {
    const resp = await carouselModel.create({
      image,
      title,
      subTitle,
    });

    res.send({
      success: true,
      data: resp,
    });
  } catch (e) {
    console.log("Error ----------- ", e);
    res.send({
      success: false,
      error: e,
    });
  }
};
