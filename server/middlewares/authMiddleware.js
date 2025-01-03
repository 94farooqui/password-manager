import jwt from "jsonwebtoken";

const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  //console.log("In Middleware",req.body)
  if (!token) return res.status(403).json({ error: "Access denied" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ error: "Invalid token" });
  }
};

export default authenticate;
