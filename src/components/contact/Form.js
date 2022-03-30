import React, { useRef, useState } from "react";

const Form = () => {
  const form = useRef();
  const [errorName, setErrorName] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const errorDisplay = (tag, message, valid) => {
    const container = document.querySelector(`.container-${tag}`)
    const span = document.querySelector(`.container-${tag}>span`)
    if (!valid) { 
      span.textContent = message
      container.classList.add("text-red-500")
      container.classList.remove("text-green-200")
    }else{
      container.classList.add("text-green-200")
      container.classList.remove("text-red-500")
      span.textContent = message
      }
  }

  const nameChecker = (value) => {
    if (value.length > 0 && (value.length < 3 || value.length >20)) {
      setErrorName(true)
      errorDisplay('nom', 'Entrez au moins 3 et au plus 20 caractères')
    }else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
      setErrorName(true)
      errorDisplay('nom', 'Le nom ne doit pas contenir des caractères spéciaux')
      }else{
        errorDisplay('nom', '', true)
        setErrorName(false)
    }
  }

  const emailChecker = (value) =>{
    if (!value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g) && value.length) {
        errorDisplay('email', 'le mail n\'est pas valide')
        setErrorEmail(true)
    }else{
        errorDisplay('email', '', true)
        setErrorEmail(false)
    }
  }

  const messageChecker = (value) => {
    if (value.length < 8 && value.length != 0) {
      errorDisplay('mess','Veuillez saisir au moins 20 caractères')
      setErrorMessage(true)
    }else if (value.length > 140 ) {
      errorDisplay('mess','Vous avez depassé 140 caractères')
      setErrorMessage(true)
    }else{
      errorDisplay('mess', '', true)
      setErrorMessage(false)
    }
  }

  const sendMessage = (e) => {
    e.preventDefault();
      if (!form) {
        alert('veuillez remplir le formulaire')
      }else{
        alert('c\'est ok ')
      }
  };

  return (
    <div className="basis-1/2 ronded block">
      <h1 className="text-2xl font-bold text-black-600">
        Contactez-nous
      </h1>
      
      <form 
        ref={form} 
        onSubmit={sendMessage} 
        className="mt-8"
      >
        <div className="container-nom">
          <label htmlFor="name" className="
                                  block mb-2 text-gray-900 text-base
                                    
                                  ">
            Nom <em className="text-red-500">*</em>
          </label>
          <input
            type="text"
            id="name"
            autoComplete="off"
            onMouseLeave={(e) => 
                nameChecker(e.target.value)
            }
            className={errorName ? 
              ("block text-red-500 border-red-500 border-1 focus:ring-0 focus:border-red-500 focus:border-1 w-full h-12 ")
              : (" block text-gray-600 border-gray-300 border-1 focus:border-gray-500 focus:ring-0 w-full h-12 ")
            }
          />
          <span></span>
        </div>
        <div className="container-email">
          <label
            htmlFor="email"
            className="block mb-2 mt-6 text-gray-900 text-base "
          >
            Email <em className="text-red-500">*</em>
          </label>
          <input
            type="text"
            id="email"
            autoComplete="off"
            onMouseLeave={(e) => emailChecker(e.target.value)}
            className={errorEmail ? 
              ("block text-red-500 border-red-500 border-1 focus:ring-0 focus:border-red-500 focus:border-1 w-full h-12 ")
              : (" block text-gray-600 border-gray-300 border-1 focus:border-gray-500 focus:ring-0 w-full h-12 ")
            }
          />
          <span></span>
        </div>
        <div className="container-mess">
          <label
            htmlFor="message"
            className="block mb-2 mt-6 text-gray-900 text-base"
          >
            Message <em className="text-red-500">*</em>
          </label>
          <textarea
            name="message"
            id="message"
            autoComplete="off"
            cols="30"
            rows="7"
            placeholder="Message"
            onMouseLeave={(e) => messageChecker(e.target.value)}
            className={errorMessage ? 
              ("block text-red-500 border-red-500 border-1 focus:ring-0 focus:border-red-500 focus:border-1 w-full  ")
              : (" block text-gray-600 border-gray-300 border-1 focus:border-gray-500 focus:ring-0 w-full ")
            }
          ></textarea>
          <span></span>
        </div>
        <button
          value="sbmit"
          className="block mt-10 mb-20  order-gray-500 text-center bg-gray-700/75 text-white  text-base py-4 px-8 hover:bg-gray-500"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default Form;
