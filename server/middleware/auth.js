const requireAuth = (req, res, next) => {
  const { user } = req.session;
  console.log("req");
  console.log(req.session);
  if (!user) {
    return res.status(401).json({ status: "fail", message: "unauthorized" });
  }

  next();
};

module.exports = requireAuth;
