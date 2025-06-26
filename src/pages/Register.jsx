"use client"

import { useState } from "react"
import { User, Lock, Eye, EyeOff } from "lucide-react"
import { register } from "../api"

export default function Register() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    password: "",
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setSuccess(null)

    try {
      const response = await register(formData)
      setSuccess("Registration successful! You can now log in.")
      setFormData({ name: "", username: "", password: "" }) 
      console.log("Register response:", response.data)
    } catch (err) {
      console.error("Registration failed:", err.response?.data || err.message)
      setError(err.response?.data?.message || "Registration failed. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-4">
      <div className="w-full max-w-md">
        <div className="shadow-2xl border-0 bg-white/95 backdrop-blur-xl rounded-3xl overflow-hidden">
          <div className="text-center pb-8 pt-12 bg-gradient-to-b from-white to-blue-50/30">
            <h1 className="text-4xl font-bold text-blue-600 mb-2">Register</h1>
          </div>

          <div className="px-8 pb-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 ml-1">
                  Name
                </label>
                <div className="relative group">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                  <input
                    id="name"
                    type="text"
                    placeholder="Eshmatjon"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="w-full pl-12 h-14 text-lg border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:outline-none transition-all duration-200 bg-gray-50/50 focus:bg-white"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="username" className="block text-sm font-semibold text-gray-700 ml-1">
                  Username
                </label>
                <div className="relative group">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                  <input
                    id="username"
                    type="text"
                    placeholder="eshmatjon123"
                    value={formData.username}
                    onChange={(e) => handleInputChange("username", e.target.value)}
                    className="w-full pl-12 h-14 text-lg border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:outline-none transition-all duration-200 bg-gray-50/50 focus:bg-white"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-semibold text-gray-700 ml-1">
                  Password
                </label>
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••"
                    value={formData.password}
                    onChange={(e) => handleInputChange("password", e.target.value)}
                    className="w-full pl-12 pr-12 h-14 text-lg border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:outline-none transition-all duration-200 bg-gray-50/50 focus:bg-white"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-500 transition-colors"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full h-14 text-lg font-semibold text-white rounded-2xl transition-all duration-200 transform mt-8
                  ${loading ? "bg-blue-300 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 hover:scale-[1.02] hover:shadow-lg"}`}
              >
                {loading ? "Registering..." : "Sign Up"}
              </button>

              {error && <p className="text-red-500 mt-2 text-center">{error}</p>}
              {success && <p className="text-green-500 mt-2 text-center">{success}</p>}
            </form>
          </div>

          <div className="text-center pb-8 bg-gradient-to-t from-blue-50/30 to-white">
            <p className="text-gray-600 text-base">
              Already have an account?{" "}
              <a
                href="/signin"
                className="text-blue-600 hover:text-blue-800 font-semibold hover:underline transition-all"
              >
                Log In
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
