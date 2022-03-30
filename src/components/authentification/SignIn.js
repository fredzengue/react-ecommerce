import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const SignIn = () => {
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [passswordIsVisible, setPassswordIsVisible] = useState(false);

  const errorDisplay = (tag, message, valid) => {
    const container = document.querySelector(`.container-${tag}`);
    const span = document.querySelector(`.container-${tag}>span`);
    if (!valid) {
      span.textContent = message;
      container.classList.add("text-red");
      //container.classList.remove("text-green-200")
    } else {
      // container.classList.add("text-green-200")
      container.classList.remove("text-red");
      span.textContent = message;
    }
  };

  const emailChecker = (value) => {
    if (!value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g) && value.length) {
      errorDisplay("email", "le mail n'est pas valide");
      setErrorEmail(true);
    } else {
      errorDisplay("email", "", true);
      setErrorEmail(false);
    }
  };

  const passwordCheckker = (value) => {
    if (
      !value.match(
        /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/
      )
    ) {
      errorDisplay(
        "password",
        "Minimum 8 caractères, 1 chiffre, 1 majuscule et un minuscule"
      );
      setErrorPassword(true);
    } else {
      errorDisplay("password", "", true);
      setErrorPassword(false);
    }
    // if (errorRepeatPassword) {
    //     repeatCheckker(errorRepeatPassword)
    // }
  };

  return (
    <div>
      <div className="block border-2 border-gray-low w-1/2 mx-auto mt-10 mb-10 drop-shadow-sm">
        <div className="mt-6 w-4/5 mx-auto ">
          <h1 className="text-2xl font-bold text-black-600 drop-shadow-sm">
            Sign In
          </h1>
          <form>
            <div className="container-email">
              <label htmlFor="email" className="block mb-2 mt-4 drop-shadow-lg">
                Email <em className="text-red-500">*</em>
              </label>
              <input
                type="text"
                placeholder="Enter your Email"
                name="email"
                onMouseLeave={(e) => emailChecker(e.target.value)}
                className={
                  errorEmail
                    ? "block text-red rounded-sm border-red border-1 focus:ring-0 focus:border-red focus:border-1 w-full h-12 "
                    : "block rounded-sm border-gray-low border-1 focus:border-1 focus:border-gray-low focus:ring-0 w-full h-12 rounded-sm"
                }
              />
              <span></span>
            </div>
            <div className="container-password">
              <label
                htmlFor="password"
                className="block mb-2 mt-4 drop-shadow-lg"
              >
                Password <em className="text-red-500">*</em>
              </label>
              <div className="-mb-4">
                <input
                  type={passswordIsVisible ? "text" : "password"}
                  placeholder="Enter your Password"
                  name="password"
                  onMouseLeave={(e) => passwordCheckker(e.target.value)}
                  className={
                    errorPassword
                      ? "block text-red rounded-sm border-red border-1 focus:ring-0 focus:border-red focus:border-1 w-full h-12 "
                      : "block rounded-sm border-gray-low border-1 focus:border-1 focus:border-gray-low focus:ring-0 w-full h-12 rounded-sm"
                  }
                />
                <div
                  className="flex ml-40 w-10 translate-x-96 -translate-y-8 "
                  onClick={() => setPassswordIsVisible(!passswordIsVisible)}
                >
                  {passswordIsVisible ? (
                    <FontAwesomeIcon
                      icon={faEye}
                      style={{ color: "#a8a8a8" }}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faEyeSlash}
                      style={{ color: "#a8a8a8" }}
                    />
                  )}
                </div>
              </div>
              <span></span>
            </div>
            <div className="mt-4">
              <input
                type="checkbox"
                name="remember"
                className="focus:border-white focus:ring-0 "
              />{" "}
              Remember me
            </div>

            <p className="text-base text-black-600 mt-4">
              Forgot
              <a className="text-blue-400" href="#">
                {" "}
                password ?{" "}
              </a>{" "}
            </p>
            <p className="text-base text-black-600 mt-4">
              You don't have a account ?
              <a href="#" className="text-blue-400">
                {" "}
                sign up here{" "}
              </a>{" "}
            </p>
            <div className="flex justify-center mt-2 ">
              <button
                type="submit"
                className="mt-10 mb-6 mr-2 order-gray-500 text-center bg-gray-700/75 text-white  text-base py-4 px-8 hover:bg-gray-500 w-40"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="mt-10 mb-6 ml-2 order-gray-500 text-center bg-gray-low text-white  text-base py-4 px-8 hover:bg-gray-middle w-40"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
