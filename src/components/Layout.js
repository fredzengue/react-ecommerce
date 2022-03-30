import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Cart from "./cart/Index";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
//import flag icon
import Flags from "country-flag-icons/react/3x2";

//import translation
import { useTranslation, Trans } from "react-i18next";

import "react-dropdown/style.css";
import Dropdown from "./utilities/Dropdown";
import Contact from "./contact/Contact";
import SignUp from "./authentification/SignUp";
import SignIn from "./authentification/SignIn";

const lngs = {
  en: {
    nativeName: "English",
    icon: <Flags.US title="United States" className="w-5" />,
  },
  fr: {
    nativeName: "French",
    icon: <Flags.FR title="United States" className="w-5" />,
  },
};
function App(props) {
  const { t, i18n } = useTranslation();

  const [show_cart, setShowCart] = useState(false);
  const [show, setShow] = useState(false);

  function handleClick() {
    setShow(!show);
  }

  return (
    <>
      <Cart show={show_cart} />
      <div className="flex items-center justify-center mx-auto w-9/12 flex-auto text-gray-low py-4">
        <img
          className="w-max"
          src="https://portotheme.com/html/porto_ecommerce/assets/images/logo.png"
          alt=""
        />
        <div className="ml-8 w-auto flex-1">
          <form action="">
            <div className="flex w-full">
              <input
                type="text"
                className="w-full px-6 rounded-full rounded-r-none border-none text-gray-middle bg-input focus:ring-0 focus:border-0"
                placeholder={t("layout.search_placeholder")}
              />
              <button className="border-2 rounded-full rounded-l-none bg-input border-none text-dark-low py-2 px-3">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
          </form>
        </div>
        <div className="flex items-center ml-8 w-max">
          <FontAwesomeIcon
            className="text-3xl mr-1 rotate-90 text-dark-low"
            icon={faPhoneAlt}
          ></FontAwesomeIcon>
          <p>
            <h1 className="uppercase text-sm">
              {t("layout.contact_info_title")}
            </h1>
            <h1 className="text-lg text-dark-low">
              <strong>+123 5535 3663</strong>
            </h1>
          </p>
        </div>

        <ul className="w-max ml-8">
          <li
            className="flex items-center cursor-pointer"
            onClick={handleClick}
          >
            {Object.values(lngs[localStorage.getItem("i18nextLng")])[1]}
            {localStorage.getItem("i18nextLng") ? (
              <span className="mx-1">
                {Object.values(lngs[localStorage.getItem("i18nextLng")])[0]}
              </span>
            ) : (
              <span className="mx-1">{Object.values(lngs["fr"])[0]}</span>
            )}{" "}
            <FontAwesomeIcon
              className="dark-low"
              icon={show ? faChevronUp : faChevronDown}
            />
          </li>
          {show ? (
            <ul className="absolute z-10  bg-white shadow-lg shadow-gray-low">
              {Object.keys(lngs).map((lng) => (
                <li
                  className="flex p-2 hover:bg-input items-center cursor-pointer"
                  key={lng}
                  style={{
                    fontWeight:
                      i18n.resolvedLanguage === lng ? "bold" : "normal",
                  }}
                  type="submit"
                  onClick={() => {
                    i18n.changeLanguage(lng);
                    handleClick();
                  }}
                >
                  {lngs[lng].icon}
                  <span className="mx-1">{lngs[lng].nativeName}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </ul>
      </div>
      <div className="flex items-center text-gray-strong justify-between mx-auto w-9/12 flex-auto border-divider border-t py-4">
        <ul className="flex ">
          <li className="py-4 hover:text-blue transition ease-out duration-200 cursor-pointer font-bold border-t-[3px] border-blue capitalize">
            <Link to="/invoices">home</Link>
          </li>
          <li className="py-4 hover:text-blue transition ease-out duration-200 cursor-pointer hover:border-blue mx-6 border-t-[3px] border-white font-bold capitalize">
            <Dropdown title={"categories"}>
              <ul className="absolute shadow-lg shadow-gray-low text-sm bg-white">
                <li className="py-2 px-4 hover:bg-input">dropdown 1</li>
                <li className="py-2 px-4 hover:bg-input">dropdown 2</li>
              </ul>
            </Dropdown>
          </li>
          <li className="py-4 cursor-pointer hover:text-blue transition ease-out duration-200 hover:border-blue mx-6 border-t-[3px] border-white font-bold capitalize">
            <Link to="/expenses">about us</Link>
          </li>
          <li className="py-4 cursor-pointer hover:text-blue transition ease-out duration-200 hover:border-blue font-bold border-t-[3px] border-white  capitalize">
            <Link to="/contact">contact us</Link>
          </li>
        </ul>
        <ul className="flex">
          <li className="py-4 text-2xl cursor-pointer">
            {" "}
            <FontAwesomeIcon className="" icon={faUser} />
          </li>
          <li className="py-4 px-4 text-2xl cursor-pointer">
            {" "}
            <FontAwesomeIcon className="" icon={faHeart} />
          </li>
          <li
            className="py-4 text-2xl cursor-pointer relative"
            onClick={() => setShowCart(!show_cart)}
          >
            {" "}
            <FontAwesomeIcon className="" icon={faBagShopping} />
            <span className="text-sm rounded-full bg-red-600 text-white leading-none px-1 absolute left-4 top-6">
              3
            </span>
            <FontAwesomeIcon className="text-sm ml-3" icon={faChevronLeft} />
          </li>
        </ul>
      </div>

      <div className="text-gray-low text-sm bg-dark-low w-full pt-20 pb-4">
        <div className="flex justify-between mx-auto w-9/12 border-b">
          <ul>
            <h1 className="uppercase text-xl text-white pb-4">Contact infos</h1>
            <li>
              <h1 className="uppercase text-white">address</h1>
              <p>Lorem ipsum dolor si</p>
            </li>
            <li>
              <h1 className="uppercase text-white">phone</h1>
              <p>Lorem ipsum dolor si</p>
            </li>
            <li>
              <h1 className="uppercase text-white">email</h1>
              <p>Lorem ipsum dolor si</p>
            </li>
            <ul className="flex py-4 gap-x-2 text-white">
              <li className="border border-dark-middle rounded-full p-[13px] leading-none cursor-pointer">
                <FontAwesomeIcon icon={faUser} />
              </li>
              <li className="border border-dark-middle rounded-full p-[13px] leading-none cursor-pointer">
                <FontAwesomeIcon icon={faUser} />
              </li>
              <li className="border border-dark-middle rounded-full p-[13px] leading-none cursor-pointer">
                <FontAwesomeIcon icon={faUser} />
              </li>
            </ul>
          </ul>
          <ul>
            <h1 className="uppercase text-xl text-white pb-4">
              customer service
            </h1>
            <li>Help & FAQs</li>
            <li>shipping and delivery</li>
            <li>my account</li>
            <li>about us</li>
            <li>privacy</li>
          </ul>

          <div>
            <h1 className="uppercase text-xl text-white pb-4">popular tags</h1>
            <ul className="grid grid-cols-5 gap-2 text-center">
              <li className="border border-dark-middle hover:text-white hover:border-white cursor-pointer leading-[23px] px-2">
                bag
              </li>
              <li className="border border-dark-middle hover:text-white hover:border-white cursor-pointer leading-[23px] px-2">
                lo
              </li>
              <li className="border border-dark-middle hover:text-white hover:border-white cursor-pointer leading-[23px] px-2">
                lo
              </li>
              <li className="border border-dark-middle hover:text-white hover:border-white cursor-pointer leading-[23px] px-2">
                lo
              </li>
              <li className="border border-dark-middle hover:text-white hover:border-white cursor-pointer leading-[23px] px-2">
                lo
              </li>
              <li className="border border-dark-middle hover:text-white hover:border-white cursor-pointer leading-[23px] px-2">
                bag
              </li>
              <li className="border border-dark-middle hover:text-white hover:border-white cursor-pointer leading-[23px] px-2">
                lo
              </li>
              <li className="border border-dark-middle hover:text-white hover:border-white cursor-pointer leading-[23px] px-2">
                lo
              </li>
              <li className="border border-dark-middle hover:text-white hover:border-white cursor-pointer leading-[23px] px-2">
                lo
              </li>
              <li className="border border-dark-middle hover:text-white hover:border-white cursor-pointer leading-[23px] px-2">
                lo
              </li>
            </ul>
          </div>
          <div>
            <h1 className="uppercase text-xl text-white pb-4">
              subscribe newsletter
            </h1>
            <p className="pb-4">
              Get all the latest information on events, sales and offers. Sign
              up for newsletter:
            </p>
            <form action="">
              <input
                className="rounded-full bg-dark-middle block focus:ring-0 focus:border-dark-middle border-dark-middle placeholder:text-gray-low  w-3/4"
                type="text"
                placeholder="email address"
              />
              <button className="bg-blue font-bold text-white rounded-full uppercase py-2.5 px-5 mt-2">
                subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="flex justify-between mx-auto w-9/12 pt-5">
          <p>© Porto eCommerce. 2021. All Rights Reserved</p>
          <ul className="flex justify-center flex-wrap">
            <li className="cursor-pointer">
              <img
                className="w-10 invert"
                src="https://portotheme.com/html/porto_ecommerce/assets/images/payments/payment-visa.svg"
                alt=""
              />
            </li>
            <li className="cursor-pointer mx-4">
              <img
                className="w-10 invert"
                src="https://portotheme.com/html/porto_ecommerce/assets/images/payments/payment-paypal.svg"
                alt=""
              />
            </li>
            <li className="cursor-pointer">
              <img
                className="w-10 invert"
                src="https://portotheme.com/html/porto_ecommerce/assets/images/payments/payment-stripe.png"
                alt=""
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
