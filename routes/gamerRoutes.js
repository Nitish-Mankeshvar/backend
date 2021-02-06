const express = require("express");
const router = express.Router();

// Loading controllers
const {
  getGamers,
  createGamer,
  getSingleGamer,
  getGamerById,
  profilePhotoUpload,
  updateGamer,
} = require("../controllers/gamersControllers");

router.route("/").get(getGamers).post(createGamer);
router.route("/:id").get(getGamerById).put(updateGamer);
router.route("/:gamerId/uploadPhoto").put(profilePhotoUpload);
router.route("/singleGamer").post(getSingleGamer);

module.exports = router;
