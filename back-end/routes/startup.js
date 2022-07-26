const router = require("express").Router();

const Startup = require("../models/Startup");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

//CREATE
router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newStartup = new Startup(req.body);

  try {
    const savedStartup = await newStartup.save();
    res.status(200).json(savedStartup);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedStartup = await Startup.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedStartup);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET STARTUP
router.get("/find/:id", async (req, res) => {
  try {
    const startup = await Startup.findById(req.params.id);
    res.status(200).json(startup);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL STARTUPS
router.get("/", async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  try {
    let startup;

    if (qNew) {
      startup = await Startup.find().sort({ createdAt: -1 }).limit(1);
    } else if (qCategory) {
      startup = await Startup.find({
        category: {
          $in: [qCategory],
        },
      });
    } else {
      startup = await Startup.find();
    }

    res.status(200).json(startup);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
