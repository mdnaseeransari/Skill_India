import jwt from "jsonwebtoken";


export const jwtAuthMiddleware = (req, res, next) => {
  try {
    // ✅ 1. Check if Authorization header exists
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ error: "Authorization header missing or invalid" });
    }

    // ✅ 2. Extract token safely
    const token = authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({ error: "Token not provided" });
    }

    // ✅ 3. Verify token
    const decoded = jwt.verify(token,"12345");

    // ✅ 4. Attach decoded user to request
    req.user = decoded;

    // ✅ 5. Continue
    next();
  } catch (error) {
    console.error("JWT Error:", error.message);
    return res.status(401).json({ error: "Invalid or expired token" });
  }
};


export const generateToken=(userData)=>{
    return jwt.sign(userData,"12345",{expiresIn:"1h"});
}