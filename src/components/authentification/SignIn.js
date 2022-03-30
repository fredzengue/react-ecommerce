import React from "react";

const SignIn = () => {
  return (
    <div>
      <div className="block border-2 w-1/2 mx-auto mt-10 mb-10 drop-shadow-sm">
        <div className="mt-6 w-4/5 mx-auto ">
          <h1 className="text-2xl font-bold text-black-600 drop-shadow-sm">
            Sign In
          </h1>
          <form>
            <div className="container-email">
              <label htmlFor="email" className="block mb-2 mt-8 drop-shadow-lg">
                Email
              </label>
              <input
                type="text"
                placeholder="Enter your Email"
                name="email"
                className=" block text-gray-600 border-gray-300 border-1 focus:border-gray-500 focus:ring-0 w-full h-12 "
              />
            </div>
            <div className="container-password">
              <label
                htmlFor="password"
                className="block mb-2 mt-4 drop-shadow-lg"
              >
                Password
              </label>
              <input
                type="text"
                placeholder="Enter your Password"
                name="password"
                className="mb-4 block text-gray-600 border-gray-300 border-1 focus:border-gray-500 focus:ring-0 w-full h-12 "
              />
            </div>
            <label className="">
              <input type="checkbox" name="remember" className="focus:border-white focus:ring-0 "  /> Remember me
            </label>

            <p className="text-base text-black-600 mt-4">
              Forgot 
              <a className="text-blue-400" href="#"> password ? </a>{" "}
            </p>
            <p className="text-base text-black-600 mt-4">
              You don't have a account ? 
              <a href="#" className="text-blue-400" > sign up here </a>{" "}
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
                className="mt-10 mb-6 ml-2 order-gray-500 text-center bg-gray-700/75 text-white  text-base py-4 px-8 hover:bg-gray-500 w-40"
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
