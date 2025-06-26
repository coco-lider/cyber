"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Lock, Eye, EyeOff } from "lucide-react";
import { useLogin } from "../hooks/useLogin.js";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ username: "emilys", password: "emilyspass" });
  const navigate = useNavigate();
  const { login } = useAuth();
  const { mutate: loginUser, isPending, error } = useLogin();
  

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(formData, {
      onSuccess: (res) => {
        const token = res.data.accessToken;
        console.log(token);
        
        
        login(token);
        navigate("/");
      },
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-4">
      <div className="w-full max-w-md">
        <div className="shadow-2xl border-0 bg-white/95 backdrop-blur-xl rounded-3xl overflow-hidden">
          <div className="text-center pb-8 pt-12 bg-gradient-to-b from-white to-blue-50/30">
            <h1 className="text-4xl font-bold text-blue-600 mb-2">Sign In</h1>
          </div>

          <div className="px-8 pb-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="username" className="block text-sm font-semibold text-gray-700 ml-1">
                  Username
                </label>
                <div className="relative group">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    id="username"
                    type="text"
                    placeholder="kminchelle"
                    value={formData.username}
                    onChange={(e) => handleInputChange("username", e.target.value)}
                    className="w-full pl-12 h-14 text-lg border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:outline-none bg-gray-50/50"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-semibold text-gray-700 ml-1">
                  Password
                </label>
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="0lelplR"
                    value={formData.password}
                    onChange={(e) => handleInputChange("password", e.target.value)}
                    className="w-full pl-12 pr-12 h-14 text-lg border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:outline-none bg-gray-50/50"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-500"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              {error && (
                <div className="text-red-600 text-sm">
                  {error.response?.data?.message || "Login failed"}
                </div>
              )}

              <button
                type="submit"
                disabled={isPending}
                className="w-full h-14 text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-2xl transition-all mt-8"
              >
                {isPending ? "Signing in..." : "Sign In"}
              </button>
            </form>
          </div>

          <div className="text-center pb-8 bg-gradient-to-t from-blue-50/30 to-white">
            <p className="text-gray-600 text-base">
              No account yet? <a href="/register" className="text-blue-600 hover:text-blue-800 font-semibold hover:underline">Create One.</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}