"use client";
import { useState } from "react";
import toast from "react-hot-toast";

const RegisterPage = () => {
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const emailRegex = /\S+@\S+\.\S+/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    // check if email and password are valid
    if (!email || !password || !fullName || !passwordConfirm) {
      toast.error("Please fill in all fields");
    }

    // check if email is valid
    else if (!email.match(emailRegex)) {
      toast.error("Please enter a valid email");
    }

    // check fullName is valid
    else if (fullName.length < 3) {
      toast.error("Please enter a valid fullName");
    }

    // check password has Minimum eight characters, at least one letter and one number:
    else if (!password.match(passwordRegex)) {
      toast.error(
        "Password must have minimum eight characters, at least one letter and one number"
      );
    }

    // check if password and passwordConfirm match
    if (password !== passwordConfirm) {
      toast.error("Passwords do not match");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-[25vw] mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gradient-to-br from-ctp-mantle to-ctp-crust outline outline-ctp-pink">
        <h2 className="text-3xl font-semibold text-center text-ctp-text">
          Register{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-ctp-pink to-ctp-mauve">
            to Leaf
          </span>
        </h2>

        <form className="mt-5 flex flex-col gap-3" onSubmit={submitHandler}>
          <div className="flex flex-col gap-1">
            <label htmlFor="fullName" className="label">
              Full Name
            </label>
            <input
              id="fullName"
              name="fullName"
              type="fullName"
              placeholder="Enter your fullName"
              className="w-full bg-ctp-base text-ctp-text px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-ctp-pink focus:ring-offset-2"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
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
          <div className="flex flex-col gap-1">
            <label htmlFor="passwordConfirm" className="label">
              Confirm Password
            </label>
            <input
              id="passwordConfirm"
              name="passwordConfirm"
              type="password"
              placeholder="Confirm your password"
              className="w-full bg-ctp-base text-ctp-text px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-ctp-pink focus:ring-offset-2"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
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
              "Register"
            )}
          </button>
        </form>
        <p className="mt-5 text-center">
          Already have an account?{" "}
          <a href="/login" className="text-ctp-pink">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
