const express = require("express");
const router = express.Router();

// Loading controllers
const {
  getGamers,
  getSingleGamer,
  deleteGamer,
  updateGamer,
} = require("../controllers/gamersControllers");

router.route("/").get(getGamers);
router.route("/:id").get(getSingleGamer).delete(deleteGamer).put(updateGamer);

module.exports = router;
