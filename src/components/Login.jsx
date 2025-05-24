import { useRef, useState } from "react";
import Header from "./Header";
import { checkFormData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [isSignForm, setIsSignForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const toggleSignup = () => {
    setIsSignForm(!isSignForm);
  };

  const email = useRef(null);
  const password = useRef(null);
  const fullname = useRef(null);
  const handleSubmitClick = () => {
    const validateMessage = checkFormData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(validateMessage);
    if (validateMessage) return;
    if (isSignForm) {
      // login
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage("Firebase error " + errorCode + ": " + errorMessage);
        });
    } else {
      // signup
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage("Firebase error " + errorCode + ": " + errorMessage);
        });
    }
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
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="w-4/12 absolute p-12 my-36 mx-auto right-0 left-0 text-white bg-black opacity-90"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignForm && (
          <input
            ref={fullname}
            type="text"
            name="fullname"
            id="fullname"
            className="p-2 my-4 w-full bg-gray-700"
            placeholder="Full Name"
          />
        )}
        <input
          ref={email}
          type="text"
          name="email"
          id="email_id"
          className="p-2 my-4 w-full bg-gray-700"
          placeholder="Email Address"
        />
        <input
          ref={password}
          type="password"
          name="password"
          id="password"
          className="p-2 my-4 w-full bg-gray-700"
          placeholder="Password"
        />
        {errorMessage && <p className="text-red-700">{errorMessage}</p>}
        <button
          className="p-3 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleSubmitClick}
        >
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
