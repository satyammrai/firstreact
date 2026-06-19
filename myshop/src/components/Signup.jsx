import React, { useState } from "react";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
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

    if (!formData.name.trim()) {
      newErrors.name = "Name required";
    }

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

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    console.log(formData);
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 px-4 py-10">
      {/* Floating blobs */}
      <div className="absolute left-10 top-16 h-40 w-40 rounded-full bg-pink-300 opacity-40 blur-3xl" />
      <div className="absolute right-10 top-20 h-56 w-56 rounded-full bg-blue-300 opacity-40 blur-3xl" />
      <div className="absolute bottom-20 left-1/3 h-48 w-48 rounded-full bg-purple-300 opacity-40 blur-3xl" />

      {/* Card */}
      <div className="relative w-full max-w-md rounded-[32px] border border-white/60 bg-white/70 p-8 shadow-2xl backdrop-blur-xl">
        {/* Heading */}
        <div className="mb-8 text-center">
          <div className="mb-4 inline-block rounded-full bg-gradient-to-r from-pink-500 to-purple-500 px-4 py-2 text-sm font-semibold text-white shadow-md">
            🚀 Join Monascope
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Create Your Account
          </h1>

          <p className="mt-2 text-gray-500">
            Join the smartest builders on the internet ✨
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <input
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 outline-none transition focus:border-purple-400"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-500">{errors.name}</p>
            )}
          </div>

          <div>
            <input
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 outline-none transition focus:border-blue-400"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          <div>
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 outline-none transition focus:border-pink-400"
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">{errors.password}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 py-3 font-semibold text-white shadow-lg transition hover:scale-[1.02]"
          >
            Sign Up ✨
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <span className="cursor-pointer font-semibold text-purple-600">
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

export default Signup;