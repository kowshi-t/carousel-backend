const mongoose = require("mongoose");

const carouselList = mongoose.model(
  "carouselImages",
  new mongoose.Schema(
    {
      image: {
        type: String,
        required: true,
      },
      title: {
        type: String,
      },
      subTitle: {
        type: String,
      },
    },
    { timestamps: true }
  )
);

module.exports = carouselList;
