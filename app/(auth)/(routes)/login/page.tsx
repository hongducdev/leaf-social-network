"use client";

import { useState } from "react";
import toast from "react-hot-toast";

const LoginPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // check if email and password are valid
    if (!email || !password) {
      toast.error("Please fill in all fields");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-[25vw] mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gradient-to-br from-ctp-mantle to-ctp-crust outline outline-ctp-pink">
        <h2 className="text-3xl font-semibold text-center text-ctp-text">
          Login{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-ctp-pink to-ctp-mauve">
            to Leaf
          </span>
        </h2>

        <form className="mt-5 flex flex-col gap-3" onSubmit={submitHandler}>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="label">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              className="w-full bg-ctp-base text-ctp-text px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-ctp-pink focus:ring-offset-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="label">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              className="w-full bg-ctp-base text-ctp-text px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-ctp-pink focus:ring-offset-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="bg-gradient-to-r from-ctp-pink to-ctp-mauve w-full text-ctp-base text-xl border-none outline-none focus:outline-none px-3 py-2 rounded"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="loading loading-spinner loading-xs"></div>
            ) : (
              "Login"
            )}
          </button>
        </form>
        <p className="mt-5 text-center">
          Don&apos;t have an account?{" "}
          <a href="/register" className="text-ctp-pink">
            Create an account
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
