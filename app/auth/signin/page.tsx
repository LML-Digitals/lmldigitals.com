"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      setError("Invalid email or password");
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-red-500 to-red-300">
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg">
        <div className="flex flex-col items-center mb-6">
          <Image
            src="/logo.png"
            height={60}
            width={60}
            alt="LML Logo"
            className="rounded-md"
          />
          <h1 className="text-2xl font-bold mt-4 mb-2 text-gray-800 rounded-full">
            Sign In
          </h1>
        </div>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={onSubmit} className="space-y-4">
          <Input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full"
          />
          <Input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full"
          />
          <Button
            type="submit"
            className="w-full bg-red-400 hover:bg-red-500 text-white font-semibold"
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
