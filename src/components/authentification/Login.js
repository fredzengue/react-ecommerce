import React from "react";

const Login = () => {
  return (
    <div className="h-full bg-gray-300 flex content-center items-center justify-center">
      <div className="bg-white shadow-lg max-w-lg  mt-6 mb-6 md:flex">
        <img
          className="w-full flex-1 h-40 md:h-full"
          src="https://picsum.photos/id/1047/200/300"
          alt=""
        />
        <div className="p-4 flex-1 md:flex md:flex-col justify-center items-center">
          <h1 className="font-bold text-2xl text-blue-800 mb-2">Connexion</h1>
          <div className="mb-4">
            <label htmlFor="username" className="block mb-1 text-gray-900 ml-1">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              autoComplete="off"
              className="text-gray-600  focus:outline-none focus:border-red-500 w-full ml-1"
            />
            <label
              htmlFor="username"
              className="block mb-1 text-gray-900 pt-2 ml-1"
            >
              Email
            </label>
            <input
              type="text"
              id="username"
              name="username"
              autoComplete="off"
              className="text-gray-600 focus:outline-none focus:shadow-lg focus:border-sky-500 w-full ml-1 "
            />
            <div
              className="block mt-4 w-full  order-gray-500 text-center bg-sky-500/75 text-white  text-xl rounded-lg p-2 hover:bg-sky-700"
              value="submit"
            >
              Se Connecter
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;


