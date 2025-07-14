"use client";

import React from "react";
import AuthForm from '@/components/AuthForm';

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex flex-col items-center justify-center">
      <AuthForm mode="register" />
    </div>
  );
} 