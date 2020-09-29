// MEHTOD         : GET
// ROUTE          : api/v1/gamers
// AUTHENTICATION : public
exports.getGamers = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: "Get all gamers",
  });
};

// MEHTOD         : GET
// ROUTE          : api/v1/gamers/:id
// AUTHENTICATION : public
exports.getSingleGamer = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: `Get specific gamer with his id ${req.params.id}`,
  });
};

// MEHTOD         : DELETE
// ROUTE          : api/v1/gamers/:id
// AUTHENTICATION : public
exports.deleteGamer = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: `DELETE ${req.params.id} specific gamer with his id`,
  });
};

// MEHTOD         : PUT
// ROUTE          : api/v1/gamers/:id
// AUTHENTICATION : public
exports.updateGamer = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: `UPDATE ${req.params.id} specific gamer with his id`,
  });
};
