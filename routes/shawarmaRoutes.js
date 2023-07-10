const express = require("express");
const router = express.Router();
const Shawarma = require("../Models/shawarmaModel.js");

router.get("/getallshawarmas", async (req, res) => {
  try {
    const shawarmas = await Shawarma.find({});
    // console.log("shawarmas: ",shawarmas)
    res.send(shawarmas);
  } catch (error) {
    console.log(error)
    return res.status(400).json(error);
    
  }
});


router.post("/addshawarma", async (req, res) => {
  const shawarma = req.body.shawarma;

  try {
    const newshawarma = new Shawarma({
      name: shawarma.name,
      image: shawarma.image,
      varients: ["small", "medium", "large"],
      description: shawarma.description,
      category: shawarma.category,
      prices: [shawarma.prices],
    });
    await newshawarma.save();
    res.send("New Shawarma Added Successfully");
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.post("/getshawarmabyid", async (req, res) => {
  const shawarmaid = req.body.shawarmaid;

  try {
    const shawarma = await Shawarma.findOne({ _id: shawarmaid });
    res.send(shawarma);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.post("/editshawarma", async (req, res) => {
  const editedshawarma = req.body.editedshawarma;

  try {
    const shawarma = await Shawarma.findOne({ _id: editedshawarma._id });

    (shawarma.name = editedshawarma.name),
      (shawarma.description = editedshawarma.description),
      (shawarma.image = editedshawarma.image),
      (shawarma.category = editedshawarma.category),
      (shawarma.prices = [editedshawarma.prices]);

    await shawarma.save();

    res.send("Shawarma Details Edited successfully");
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.post("/deleteshawarma", async (req, res) => {
  const shawarmaid = req.body.shawarmaid;

  try {
    await Shawarma.findOneAndDelete({ _id: shawarmaid });
    res.send("Shawarma Deleted successfully");
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

module.exports = router;
