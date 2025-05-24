import { useState } from "react";
import Header from "./Header";
const Login = () => {
  const [isSignForm, setIsSignForm] = useState(true);
  const toggleSignup = () => {
    setIsSignForm(!isSignForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/914ad279-199e-4095-9c10-2409dc9e5e1b/web/IN-en-20250519-TRIFECTA-perspective_8f1ca896-9e49-4a4e-90f0-22fc49650bd9_large.jpg"
          alt="bg image"
        />
      </div>
      <form class="w-4/12 absolute p-12 my-36 mx-auto right-0 left-0 text-white bg-black opacity-90">
        <h1 className="font-bold text-3xl py-4">
          {isSignForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignForm && (
          <input
            type="text"
            name="fullname"
            id="fullname"
            className="p-2 my-4 w-full bg-gray-700"
            placeholder="Full Name"
          />
        )}
        <input
          type="email"
          name="email"
          id="email_id"
          className="p-2 my-4 w-full bg-gray-700"
          placeholder="Email Address"
        />
        <input
          type="password"
          name="password"
          id="password"
          className="p-2 my-4 w-full bg-gray-700"
          placeholder="Password"
        />
        <button className="p-3 my-6 bg-red-700 w-full rounded-lg">
          {isSignForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignup}>
          {isSignForm
            ? "New to Netflix? Sign Up"
            : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
