const router = require("express").Router();

const Blog = require("../models/Blog");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

//CREATE
router.post("/", verifyTokenAndAdmin, async (req, res) => {
    const newBlog = new Blog(req.body);
  
    try {
      const savedBlog = await newBlog.save();
      res.status(200).json(savedBlog);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  //UPDATE
  router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
      const updatedBlog = await Blog.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedBlog);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  //GET BLOG
  router.get("/find/:id", async (req, res) => {
    try {
      const blog = await Blog.findById(req.params.id);
      res.status(200).json(blog);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  //GET ALL BLOGS
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


module.exports = router