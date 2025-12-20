import axios from 'axios';
import { useState, useEffect } from 'react' // Added useEffect
import { Link, useNavigate, useSearchParams, useLoaderData } from "react-router-dom"; // Added useSearchParams and useLoaderData
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUp = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams(); // To detect ?edit=true in URL
  const loaderData = useLoaderData(); // To get existing user data if available
  const isEditMode = searchParams.get("edit") === "true"; // Check if we are editing

  const [showPassword, setShowPassword] = useState(false);
  const countryCodes = [
    { name: "India", code: "+91" },
    { name: "United States", code: "+1" },
    { name: "United Kingdom", code: "+44" },
    { name: "Australia", code: "+61" },
    { name: "Canada", code: "+1" },
    { name: "China", code: "+86" },
    { name: "Mexico", code: "+52" },
    { name: "Germany", code: "+49" },
    { name: "France", code: "+33" },
    { name: "Italy", code: "+39" },
    { name: "Spain", code: "+34" },
    { name: "Poland", code: "+48" },
    { name: "Ukraine", code: "+380" },
    { name: "Russia", code: "+7" },
    { name: "Afghanistan", code: "+93" },
    { name: "Nepal", code: "+977" },
    { name: "Brazil", code: "+55" }
  ];

  let [userData, setUserData] = useState({
    fullName: "",
    email: "",
    selectedCode: "",
    phoneNumber: "",
    address: "",
    password: ""
  })

  // NEW: Pre-fill form if we are in Edit Mode
  useEffect(() => {
    if (isEditMode && loaderData?.user) {
      setUserData({
        fullName: loaderData.user.fullName || "",
        email: loaderData.user.email || "",
        selectedCode: loaderData.user.selectedCode || "",
        phoneNumber: loaderData.user.phoneNumber || "",
        address: loaderData.user.address || "",
        password: "" // Keep password empty for security
      });
    }
  }, [isEditMode, loaderData]);

  function handleInput(e) {
    setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleFormSubmit(e) {
    e.preventDefault();
    try {
      if (isEditMode) {
        // --- UPDATE LOGIC ---
        const token = localStorage.getItem("token");
        await axios.put("http://localhost:3000/user/update-profile", userData, {
          headers: { Authorization: `Bearer ${token}` }
        });
        alert("Profile updated successfully!");
        navigate("/dashboard");
      } else {
        // --- SIGNUP LOGIC (Original) ---
        const res = await axios.post("http://localhost:3000/user/signup", userData);
        const token = res.data.token;
        localStorage.setItem("token", token);
        localStorage.setItem("role", res.data.role);
        navigate("/dashboard");
      }
    } catch (error) {
      console.error(error.response?.data?.error || "Action failed");
      alert(error.response?.data?.error || "Action failed");
    }
  }

  return (
    <>
      <div className="bg-primary min-h-screen flex justify-center items-center p-6 text-primary">

        <div className="w-full max-w-md bg-secondary p-8 rounded-2xl shadow-lg">

          {/* DYNAMIC TITLE */}
          <h1 className="text-3xl font-bold text-center mb-6 text-primary">
            {isEditMode ? "Update Profile" : "Create Account"}
          </h1>

          {/* Full Name */}
          <form onSubmit={handleFormSubmit}>
            <input
              value={userData.fullName}
              name="fullName"
              onChange={handleInput}
              type="text"
              placeholder="Full Name" required
              className="w-full p-3 bg-secondary border border-color rounded-lg mb-3 text-primary placeholder:text-muted"
            />

            {/* Email - Disabled in Edit Mode because email usually shouldn't change */}
            <input
              value={userData.email}
              name="email"
              onChange={handleInput}
              type="email"
              placeholder="Email"
              disabled={isEditMode}  required
              className={`w-full p-3 bg-secondary border border-color rounded-lg mb-3 text-primary placeholder:text-muted ${isEditMode ? 'opacity-50 cursor-not-allowed' : ''}`}
            />

            {/* Phone + Country */}
            <div className="flex flex-col sm:flex-row gap-3 mb-3">

              <select
                className="p-3 border border-color bg-secondary text-primary rounded-lg"
                value={userData.selectedCode}
                name="selectedCode" required
                onChange={handleInput}>
                <option>Select Country</option>
                {countryCodes.map((c, index) => (
                  <option key={index} value={c.code}>
                    {c.name} ({c.code})
                  </option>
                ))}
              </select>

              <input
                type="number"
                name="phoneNumber"
                placeholder="Phone Number" required
                className="w-full p-3 bg-secondary border border-color rounded-lg text-primary placeholder:text-muted"
                value={userData.phoneNumber} pattern="[1-9]{4}-[0-9]{3}-[0-9]{3}" maxLength={10} minLength={10}
                onChange={handleInput} />
            </div>

            {/* Address */}
            <textarea
              value={userData.address}
              name="address"
              onChange={handleInput}
              placeholder="Address"
              rows="3" required
              className="w-full p-3 bg-secondary border border-color rounded-lg mb-3 text-primary placeholder:text-muted"
            ></textarea>

            {/* Password */}
            <div className='relative flex items-center mb-3'>
              <input
                name="password"
                value={userData.password}
                onChange={handleInput}
                type={showPassword ? "text" : "password"} required
                placeholder={isEditMode ? "New Password (leave blank to keep current)" : "Password"}
                className="w-full p-3 bg-secondary border border-color rounded-lg  text-primary placeholder:text-muted"
              />
              <span onClick={() => setShowPassword(!showPassword)} className="absolute right-4 flex items-center cursor-pointer text-muted hover:text-primary">
                {showPassword ? <FaEyeSlash /> : <FaEye />}</span>
            </div>

            {/* Dynamic Button Text */}
            <button
              className="bg-accent-secondary text-button w-full p-3 rounded-lg font-semibold hover-bg-accent-secondary transition"
            >
              {isEditMode ? "Save Changes" : "Sign Up"}
            </button>
          </form>

          {/* Hide login link if in edit mode */}
          {!isEditMode && (
            <p className="text-center mt-4 text-sm text-secondary">
              Already have an account? <Link to="/Login" className="hover-text-accent-secondary">
                Login
              </Link>
            </p>
          )}

        </div>
      </div>
    </>
  );
};

export default SignUp;