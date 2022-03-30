import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";

const SignUp = () => {
  const form = useRef();
  const [errorFirstName, setErrorFirstName] = useState(false);
  const [errorName, setErrorName] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  //   const [errorRepeatPassword, setErrorRepeatPassword] = useState(false);
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

  const firstNameChecker = (value) => {
    if (value.length > 0 && (value.length < 3 || value.length > 20)) {
      setErrorFirstName(true);
      errorDisplay("firstname", "Entrez au moins 3 et au plus 20 caractères");
    } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
      setErrorFirstName(true);
      errorDisplay(
        "firstname",
        "Le name ne doit pas contenir des caractères spéciaux"
      );
    } else {
      errorDisplay("firstname", "", true);
      setErrorFirstName(false);
    }
  };
  const nameChecker = (value) => {
    if (value.length > 0 && (value.length < 3 || value.length > 20)) {
      setErrorName(true);
      errorDisplay("name", "Entrez au moins 3 et au plus 20 caractères");
    } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
      setErrorName(true);
      errorDisplay(
        "name",
        "Le nom ne doit pas contenir des caractères spéciaux"
      );
    } else {
      errorDisplay("name", "", true);
      setErrorName(false);
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
  // const repeatCheckker = (value) =>{
  //     if (value !== errorPassword) {
  //         errorDisplay('repeatpassword', 'le mot de passe de correspond pas')
  //         setErrorRepeatPassword(true)
  //     }else{
  //         errorDisplay('repeatpassword','', true)
  //         setErrorRepeatPassword(false)
  //     }
  // }

  const signUp = (e) => {
    e.preventDefault();
  };

  return (
    <div className="block border-2 border-gray-low w-1/2 mx-auto mt-10 mb-10 drop-shadow-sm">
      <div className="mt-6 w-4/5 mx-auto ">
        <h1 className="text-2xl font-bold text-black-600 drop-shadow-sm">
          Sign Up
        </h1>
        <p className="text-base text-black-600 mt-4">
          Please fill in this form to create an account.
        </p>
        <div className="mt-4 mb-4 border-b-2 mx-auto border-gray-low drop-shadow-md"></div>
        <form ref={form} onSubmit={signUp}>
          <div className="container-firstname">
            <label
              htmlFor="first name"
              className="block mb-2 drop-shadow-lg text-black-600"
            >
              First Name <em className="text-red">*</em>
            </label>
            <input
              type="text"
              placeholder="Enter your First Name"
              name="first name"
              onMouseLeave={(e) => firstNameChecker(e.target.value)}
              className={
                errorFirstName
                  ? "block text-red rounded-sm border-red border-1 focus:ring-0 focus:border-red focus:border-1 w-full h-12 mb-2"
                  : "block rounded-sm border-gray-low border-1 focus:border-1 focus:border-gray-low focus:ring-0 w-full h-12 rounded-sm"
              }
            />
            <span></span>
          </div>
          <div className="container-name">
            <label htmlFor="name" className="block mb-2 mt-4 drop-shadow-lg">
              Name <em className="text-red-500">*</em>
            </label>
            <input
              type="text"
              placeholder="Enter your Name"
              name="name"
              onMouseLeave={(e) => nameChecker(e.target.value)}
              className={
                errorName
                  ? "block text-red rounded-sm border-red border-1 focus:ring-0 focus:border-red focus:border-1 w-full h-12 "
                  : "block rounded-sm border-gray-low border-1 focus:border-1 focus:border-gray-low focus:ring-0 w-full h-12 rounded-sm"
              }
            />
            <span></span>
          </div>
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
                  <FontAwesomeIcon icon={faEye} style={{ color: "#a8a8a8" }} />
                ) : (
                  <FontAwesomeIcon icon={faEyeSlash} style={{ color: "#a8a8a8" }} />
                )}
              </div>
            </div>
            <span></span>
          </div>
          {/* <div className="container-repeatpassword">
          <label 
            htmlFor="repeatPassword"
            className="block mb-2 mt-4 drop-shadow-lg"
          >Repeat Password <em className="text-red-500">*</em></label>
          <input
            type="password"
            placeholder="Enter your Repeat Password"
            name="repeatPassword"
            onMouseLeave={(e) => 
                repeatCheckker(e.target.value)
                
            }

            className={errorRepeatPassword ? 
              ("block text-red-500 border-red-500 border-1 focus:ring-0 focus:border-red-500 focus:border-1 w-full h-12 ")
              : ("block text-gray-600 border-gray-300 border-1 focus:border-gray-500 focus:ring-0 w-full h-12")
            } 
          />
          <span></span>
        </div>
         */}
          <div className="mt-4">
            <input
              type="checkbox"
              name="remember"
              className="focus:border-white focus:ring-0 "
            />{" "}
            Remember me
          </div>

          <p className="text-base text-black-600 mt-4">
            By creating an account you agree to our{" "}
            <a className="text-blue-400" href="#">
              Terms & Privacy
            </a>{" "}
          </p>
          <div className="flex justify-center mt-2 ">
            <button
              type="submit"
              className="mt-10 mb-6 mr-2 text-center bg-gray-low text-white  text-base py-4 px-8 hover:bg-gray-middle  w-40"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="mt-10 mb-6 ml-2 order-gray-500 text-center bg-gray-low text-white  text-base py-4 px-8 hover:bg-gray-middle w-40"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
