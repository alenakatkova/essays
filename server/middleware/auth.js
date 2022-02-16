const requireAuth = (req, res, next) => {
  const { user_id } = req.session;
  console.log("req");
  console.log(req.session);
  if (!user_id) {
    return res.status(401).json({ status: "fail", message: "unauthorized" });
  }

  next();
};

module.exports = requireAuth;
