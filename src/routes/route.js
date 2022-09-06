const express = require('express');
const router = express.Router();

 const authorController= require("../controllers/authorController")

const blogController= require("../controllers/blogController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createblog",blogController.createBlog)


 router.post("/createAuthor",authorController.createAuthor)



router.get("/getblog",blogController.getblog)



module.exports = router;