import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Forgot() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [sending, setSending] = useState(false);

  const sendRecoveryCode = async () => {
    if (email.trim() === "") {
      alert("Enter your registered email first");
      return;
    }

    setSending(true);

    try {
      await axios.post(
  "http://localhost:3000/api/auth/forgot-password",
  { email }
);


      alert("OTP has been sent to your email");
      navigate("/verifyotp");

    } catch (err) {
      const msg =
        err?.response?.data?.msg || "Unable to send recovery code";
      alert(msg);
    } finally {
      setSending(false);
    }
  };

  return (
    <><br /><br />
    <div className=" flex justify-center grow p-10 text-primary">
      <div className="w-full max-w-md bg-secondary p-8 rounded-2xl shadow-lg">

        <h1 className="text-3xl font-bold text-center mb-6">
          Reset Password
        </h1>

        <input
          type="email"
          placeholder="Registered email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 bg-secondary border border-color rounded-lg placeholder:text-muted"
        />

        <button
          onClick={sendRecoveryCode}
          disabled={sending}
          className="bg-accent-secondary w-full p-3 rounded-lg font-semibold transition"
        >
          {sending ? "Sending code..." : "Send Recovery Code"}
        </button>

        <p className="text-center mt-5 text-sm text-secondary">
          Remember your password?{" "}
          <Link to="/Login" className="hover-text-accent-secondary">
            Login
          </Link>
        </p>

      </div>
    </div>
    </>
  );
}

export default Forgot;
