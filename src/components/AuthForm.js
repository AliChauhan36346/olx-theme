import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import Link from 'next/link';

export default function AuthForm({ mode = 'login', onSubmit }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const errs = {};
    if (mode === 'register' && !form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) errs.email = 'Invalid email';
    if (!form.password) errs.password = 'Password is required';
    else if (form.password.length < 6) errs.password = 'Password must be at least 6 characters';
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1000)); // fake delay
    setSubmitting(false);
    if (onSubmit) onSubmit(form);
  };

  return (
    <div className="max-w-md w-full mx-auto bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-10 mt-12 mb-8 border border-blue-100">
      <h2 className="text-3xl font-extrabold text-center text-blue-700 mb-2">
        {mode === 'login' ? 'Sign In' : 'Create Account'}
      </h2>
      <p className="text-center text-gray-800 mb-8">
        {mode === 'login' ? 'Welcome back! Please login to your account.' : 'Join us! Create your account.'}
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        {mode === 'register' && (
          <div>
            <input
              type="text"
              name="name"
              autoComplete="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className={`w-full p-4 rounded-xl border ${errors.name ? 'border-red-400' : 'border-gray-300'} focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-white/70 placeholder-gray-400 text-lg text-gray-800`}
            />
            {errors.name && <div className="text-red-500 text-sm mt-1">{errors.name}</div>}
          </div>
        )}
        <div>
          <input
            type="email"
            name="email"
            autoComplete="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className={`w-full p-4 rounded-xl border ${errors.email ? 'border-red-400' : 'border-gray-300'} focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-white/70 placeholder-gray-400 text-lg text-gray-800`}
          />
          {errors.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
        </div>
        <div>
          <input
            type="password"
            name="password"
            autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className={`w-full p-4 rounded-xl border ${errors.password ? 'border-red-400' : 'border-gray-300'} focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-white/70 placeholder-gray-400 text-lg text-gray-800`}
          />
          {errors.password && <div className="text-red-500 text-sm mt-1">{errors.password}</div>}
        </div>
        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl text-lg shadow transition-colors disabled:opacity-60"
        >
          {submitting ? (mode === 'login' ? 'Signing In...' : 'Creating Account...') : (mode === 'login' ? 'Sign In' : 'Register')}
        </button>
      </form>
      <div className="mt-6 text-center">
        {mode === 'login' ? (
          <span className="text-gray-800">Don't have an account?{' '}
            <Link href="/auth/register" className="text-blue-600 hover:underline font-semibold">Sign up</Link>
          </span>
        ) : (
          <span className="text-gray-800">Already have an account?{' '}
            <Link href="/auth/login" className="text-blue-600 hover:underline font-semibold">Sign in</Link>
          </span>
        )}
      </div>
      <div className="flex items-center my-6">
        <div className="flex-1 h-px bg-gray-200" />
        <span className="mx-4 text-gray-400 font-medium">or</span>
        <div className="flex-1 h-px bg-gray-200" />
      </div>
      <div className="flex flex-col gap-3">
        <button className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 hover:border-blue-400 text-gray-800 font-semibold py-3 rounded-xl shadow-sm transition">
          <FcGoogle className="w-6 h-6" /> Continue with Google
        </button>
        <button className="w-full flex items-center justify-center gap-3 bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 rounded-xl shadow-sm transition">
          <FaFacebook className="w-6 h-6" /> Continue with Facebook
        </button>
      </div>
    </div>
  );
} 