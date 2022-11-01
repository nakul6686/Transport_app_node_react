const express = require("express")
const router = express.Router();
const { postTransportar, getallTransportar } = require("../../controllers/transportar/transportars");

router.get("/", getallTransportar)
router.post("/register", postTransportar)


module.exports = router