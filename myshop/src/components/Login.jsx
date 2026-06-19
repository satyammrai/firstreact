import React, { useState } from "react";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.email.includes("@")) {
      newErrors.email = "Valid email required";
    }

    if (formData.password.length < 6) {
      newErrors.password = "Minimum 6 characters";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Left Branding Section */}
        <div className="relative hidden overflow-hidden bg-gradient-to-br from-violet-600 via-purple-600 to-blue-600 lg:flex">
          <div className="absolute left-16 top-20 h-72 w-72 rounded-full bg-white/20 blur-3xl"></div>
          <div className="absolute bottom-20 right-16 h-80 w-80 rounded-full bg-pink-300/30 blur-3xl"></div>

          <div className="relative z-10 flex h-full flex-col justify-between p-16 text-white">
            <div>
              <div className="inline-block rounded-full bg-white/20 px-4 py-2 text-sm backdrop-blur-lg">
                Monascope Creative Studio
              </div>

              <h1 className="mt-8 text-5xl font-bold leading-tight">
                Design.
                <br />
                Build.
                <br />
                Scale.
              </h1>

              <p className="mt-6 max-w-lg text-lg text-white/80">
                We help modern brands craft premium digital experiences that
                convert visitors into loyal customers.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="rounded-3xl bg-white/10 p-4 backdrop-blur-lg">
                <p className="text-2xl font-bold">250+</p>
                <p className="text-sm text-white/70">Projects</p>
              </div>

              <div className="rounded-3xl bg-white/10 p-4 backdrop-blur-lg">
                <p className="text-2xl font-bold">40+</p>
                <p className="text-sm text-white/70">Countries</p>
              </div>

              <div className="rounded-3xl bg-white/10 p-4 backdrop-blur-lg">
                <p className="text-2xl font-bold">98%</p>
                <p className="text-sm text-white/70">Satisfaction</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form Section */}
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
          <div className="w-full max-w-md rounded-[32px] border border-gray-200 bg-white p-8 shadow-[0_20px_80px_rgba(0,0,0,0.08)]">
            <div className="mb-8">
              <p className="text-sm font-medium text-purple-600">
                Welcome Back
              </p>

              <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900">
                Login
              </h2>

              <p className="mt-2 text-gray-500">
                Access your creative workspace.
              </p>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-gray-200 px-4 py-3 outline-none transition focus:border-purple-500"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-gray-200 px-4 py-3 outline-none transition focus:border-purple-500"
                />
                {errors.password && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.password}
                  </p>
                )}
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-gray-500">
                  <input type="checkbox" />
                  Remember me
                </label>

                <button
                  type="button"
                  className="font-medium text-purple-600"
                >
                  Forgot password?
                </button>
              </div>

              <button
                type="submit"
                className="w-full rounded-2xl bg-gradient-to-r from-violet-600 to-purple-600 py-3 font-semibold text-white shadow-lg transition hover:scale-[1.01]"
              >
                Login
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-gray-500">
              New here?{" "}
              <span className="cursor-pointer font-semibold text-purple-600">
                Create account
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;