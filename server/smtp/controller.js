import transporter from "./config.js";
import fs from "fs";
import path from "path";

// backend already runs from /server
const otpFile = path.resolve("data/otp.json");

export async function sendOtp(req, res) {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({
      msg: "Please enter your email"
    });
  }

  const otp = Math.floor(100000 + Math.random() * 900000);

  let otpList = [];

  try {
    if (fs.existsSync(otpFile)) {
      const file = fs.readFileSync(otpFile, "utf8");
      if (file) {
        otpList = JSON.parse(file);
      }
    }
  } catch (err) {
    console.log("Reading OTP file failed:", err.message);
  }

  otpList.push({
    email,
    otp,
    expiresAt: Date.now() + 5 * 60 * 1000
  });

  try {
    fs.writeFileSync(otpFile, JSON.stringify(otpList, null, 2));
  } catch (err) {
    console.log("Writing OTP file failed:", err.message);
    return res.status(500).json({
      msg: "Could not store OTP"
    });
  }

  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: "Password Reset OTP",
      text: `Your OTP is ${otp}. It expires in 5 minutes.`
    });

    return res.json({
      msg: "Recovery code sent to your email"
    });

  } catch (err) {
  console.log("========== SMTP ERROR ==========");
  console.log(err);
  console.log("MESSAGE:", err.message);
  console.log("CODE:", err.code);
  console.log("================================");

  return res.status(500).json({
    msg: "Unable to send recovery code"
  });
}

}
