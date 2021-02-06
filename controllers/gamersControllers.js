const GamerModel = require("../models/Gamer");
const path = require("path");

// MEHTOD         : PUT
// ROUTE          : api/v1/gamers/:id
// AUTHENTICATION : public
exports.createGamer = async (req, res, next) => {
  try {
    const user = await GamerModel.create(req.body);
    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      data: error,
    });
  }
};

// MEHTOD         : GET
// ROUTE          : api/v1/gamers
// AUTHENTICATION : public
exports.getGamers = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: "Get all gamers",
  });
};

// MEHTOD         : POST
// ROUTE          : api/v1/gamers/:id
// AUTHENTICATION : public
exports.getSingleGamer = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const singleGamer = await GamerModel.findOne({
      email: email,
      password: password,
    });
    if (!singleGamer) {
      throw new Error();
      return;
    }
    res.status(200).json({
      success: true,
      data: singleGamer,
      message: "Logged in successfully",
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      data: null,
    });
  }
};

// MEHTOD         : GET
// ROUTE          : api/v1/gamers/:id
// AUTHENTICATION : public
exports.getGamerById = async (req, res, next) => {
  const singleGamer = await GamerModel.findById(req.params.id);
  if (singleGamer) {
    res.status(200).json({
      success: true,
      data: singleGamer,
    });
    return;
  }
  res.status(404).json({
    success: false,
    data: "no user found",
  });
};

// MEHTOD         : PUT
// ROUTE          : api/v1/gamers/:id
// AUTHENTICATION : public
exports.updateGamer = async (req, res, next) => {
  try {
    const updatedGamer = await GamerModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true, useFindAndModify: true }
    );
    if (!updatedGamer) {
      throw new Error();
      return;
    }
    res.status(200).json({
      success: true,
      data: updatedGamer,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      data: "error!",
    });
  }
};

// MEHTOD         : PUT
// ROUTE          : api/v1/gamers/:gamerId/uploadPhoto
// AUTHENTICATION : public
exports.profilePhotoUpload = async (req, res, next) => {
  try {
    const gamer = await GamerModel.findById(req.params.gamerId);

    if (!gamer) {
      throw new Error("no user found");
      return;
    }

    if (!req.files) {
      throw new Error("please upload an image file");
      return;
    }
    console.log(req.files);
    const file = req.files.file;

    if (!file.mimetype.startsWith("image")) {
      throw new Error("please upload a an image");
      return;
    }

    // create custom file name
    file.name = `profile_${gamer._id}${path.parse(file.name).ext}`;

    file.mv(`./public/uploads/${file.name}`, async (err) => {
      if (err) {
        console.error(err);
        throw new Error("some error");
      }

      await GamerModel.findByIdAndUpdate(req.params.gamerId, {
        photo: file.name,
      });
    });

    res.status(200).json({
      success: true,
      data: file.name,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      data: error.message,
    });
  }
};
