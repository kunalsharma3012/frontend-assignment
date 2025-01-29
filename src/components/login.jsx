import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "user123" && password === "pass123") {
      navigate("/home"); 
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#313842] px-4">
  {/* Logo at the top */}
  <div className="absolute left-2 top-2 text-lg md:text-xl font-semibold flex text-white bg-[#313842] px-2 py-1 items-center rounded">
    <img src="/blacklogo.png" alt="logo image" className="w-8 h-8 md:w-10 md:h-10" />
    Aiworksquad
  </div>

  {/* Login Form Container */}
  <div className="bg-black py-8 px-6 md:px-28 rounded shadow-md w-full max-w-sm md:max-w-md lg:max-w-lg text-white">
    <h2 className="text-xl md:text-2xl font-extrabold text-center mb-2">
      Welcome Back
    </h2>
    <p className="text-center font-semibold text-white mb-6 md:mb-8">
      Sign in to continue to Aiworksquad.
    </p>

    <form onSubmit={handleLogin}>
      {/* Username Input */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-3 rounded bg-gray-700 text-white border border-white focus:outline-none focus:border-blue-500 placeholder-white"
        />
      </div>

      {/* Password Input */}
      <div className="mb-4">
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 rounded bg-gray-700 text-white border border-white focus:outline-none focus:border-blue-500 placeholder-white"
        />
      </div>

      {/* Remember Me & Forgot Password */}
      <div className="flex flex-col md:flex-row items-center justify-between text-sm mb-4 md:mb-6">
        <label className="flex items-center mb-2 md:mb-0">
          <input type="checkbox" className="mr-2" /> Remember me
        </label>
        <a href="#" className="text-blue-400 hover:underline">
          Forgot password?
        </a>
      </div>

      {/* Login Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded font-semibold transition"
      >
        Login
      </button>
    </form>
  </div>

  {/* Footer */}
  <footer className="absolute bottom-4 text-white text-sm text-center w-full">
    2023 Aiworksquad.
  </footer>
</div>

  );
};

export default LoginPage;
