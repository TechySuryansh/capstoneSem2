"use client";
import { useState } from "react";
import { auth } from "@/lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Logged in!");
    } catch (error) {
      console.error(error.message);
      alert("Login failed");
    }
  };

  return (
    <div className="p-6">
      <input
        placeholder="Email"
        className="block mb-2 p-2 border"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="Password"
        type="password"
        className="block mb-4 p-2 border"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={login} className="px-4 py-2 bg-blue-500 text-white">
        Login
      </button>
    </div>
  );
}
