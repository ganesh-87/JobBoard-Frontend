// src/components/LoginPage.jsx
import React, { useState } from "react";

function LoginPage({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Here you can add your login logic, such as API calls
    if (username === "user" && password === "password") {
      onLogin(); // Call the onLogin function passed as a prop
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-4 py-2 mb-4 border rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 mb-4 border rounded-md"
        />
        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white font-bold py-2 rounded-md"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
