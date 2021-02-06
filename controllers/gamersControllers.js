const GamerModel = require("../models/Gamer");

// MEHTOD         : PUT
// ROUTE          : api/v1/gamers/:id
// AUTHENTICATION : public
exports.createGamer = async (req, res, next) => {
  try {
    const user = await GamerModel.create(req.body);
    res.status(200).json({
      success: true,
      data: req.body,
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
