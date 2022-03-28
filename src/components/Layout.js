import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Cart from './cart/Index'
//import flag icon
import Flags from 'country-flag-icons/react/3x2';

//import translation 
import { useTranslation, Trans } from 'react-i18next';

import 'react-dropdown/style.css';
import Dropdown from './utilities/Dropdown'

const lngs = {
  en: { nativeName: 'English', icon: <Flags.US title="United States" className="w-5" /> },
  fr: { nativeName: 'French', icon: <Flags.FR title="United States" className="w-5" /> }
};
function App() {
  const { t, i18n } = useTranslation();
  const [show, setShow] = useState(false);

  function handleClick() {
    setShow(!show)
  }

  return (
    <>
      <div className='flex items-center justify-center mx-auto w-9/12 flex-auto text-gray-700 py-4'>
        <img className='w-max' src="https://portotheme.com/html/porto_ecommerce/assets/images/logo.png" alt="" />
        <div className="ml-8 w-auto flex-1">
          <form action="">
            <div className='flex w-full'>
              <input type="text" className='w-full px-6 rounded-full rounded-r-none border-none bg-gray-200 focus:ring-0 focus:border-0   placeholder:text-gray-400 ' placeholder={t('layout.search_placeholder')} />
              <button className='border-2 rounded-full rounded-l-none bg-gray-200 border-none text-gray-700 py-2 px-3'><FontAwesomeIcon icon={faSearch} /></button>
            </div>
          </form>
        </div>
        <div className="flex items-center ml-8 w-max">
          <FontAwesomeIcon className='text-3xl mr-1 rotate-90' icon={faPhoneAlt}></FontAwesomeIcon>
          <p>
            <h1 className='uppercase text-sm'>{t('layout.contact_info_title')}</h1>
            <h1 className='text-lg'><strong>+123 5535 3663</strong></h1>
          </p>
        </div>

        <ul className='w-max ml-8'>
          <li className='flex items-center cursor-pointer' onClick={handleClick}>{Object.values(lngs[localStorage.getItem('i18nextLng')])[1]}{localStorage.getItem('i18nextLng') ? <span className='mx-1'>{Object.values(lngs[localStorage.getItem('i18nextLng')])[0]}</span> : <span className='mx-1'>{Object.values(lngs['fr'])[0]}</span>} <FontAwesomeIcon icon={show ? faChevronUp : faChevronDown} /></li>
          {show ?
            <ul className='absolute z-10  bg-white shadow-sm shadow-slate-400'>
              {Object.keys(lngs).map((lng) => (
                <li className='flex p-2 hover:bg-slate-200 items-center cursor-pointer' key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => { i18n.changeLanguage(lng); handleClick() }}>
                  {lngs[lng].icon}
                  <span className='mx-1'>{lngs[lng].nativeName}</span>
                </li>
              ))}
            </ul> : null
          }
        </ul>

      </div>
      <div className='flex items-center justify-between mx-auto w-9/12 flex-auto text-gray-700 border-gray-200 border-t py-4'>
        <ul className='flex '>
          <li className='py-4 cursor-pointer font-bold border-t-2 border-blue-500 capitalize'><Link to="/invoices">home</Link></li>
          <li className='py-4 cursor-pointer hover:border-blue-500 mx-6 border-t-2 border-white font-bold capitalize'>
            <Dropdown title={'categories'}>
              <ul className='absolute shadow-sm shadow-slate-400 text-sm bg-white'>
                <li className='py-2 px-4 hover:bg-slate-100'>dropdown 1</li>
                <li className='py-2 px-4 hover:bg-slate-100'>dropdown 2</li>
              </ul>
            </Dropdown>
          </li>
          <li className='py-4 cursor-pointer hover:border-blue-500 mx-6 border-t-2 border-white font-bold capitalize'><Link to="/expenses">about us</Link></li>
          <li className='py-4 cursor-pointer hover:border-blue-500 font-bold border-t-2 border-white  capitalize'><Link to="/expenses">contact us</Link></li>
        </ul>
        <ul className='flex'>
          <li className='py-4 text-2xl cursor-pointer'> <FontAwesomeIcon className='' icon={faUser} /></li>
          <li className='py-4 px-4 text-2xl cursor-pointer'> <FontAwesomeIcon className='' icon={faHeart} /></li>
          <li className='py-4 text-2xl cursor-pointer relative'> <FontAwesomeIcon className='' icon={faBagShopping} /><span className='text-sm rounded-full bg-red-600 text-white leading-none px-1 absolute left-4 top-6'>3</span><FontAwesomeIcon className='text-sm ml-3' icon={faChevronLeft} /></li>
        </ul>
      </div>
      <div className='text-gray-500 text-sm bg-slate-900 absolute bottom-0 w-full pt-20 pb-4'>
        <div className='flex justify-between mx-auto w-9/12 border-b'>
          <ul>
            <h1 className='uppercase text-xl text-white pb-4'>Contact infos</h1>
            <li>
              <h1 className='uppercase text-white'>address</h1>
              <p>Lorem ipsum dolor si</p>
            </li>
            <li>
              <h1 className='uppercase text-white'>phone</h1>
              <p>Lorem ipsum dolor si</p>
            </li>
            <li>
              <h1 className='uppercase text-white'>email</h1>
              <p>Lorem ipsum dolor si</p>
            </li>
            <ul className='flex py-4 text-white'>
              <li><FontAwesomeIcon className='border border-gray-400 rounded-full p-2 leading-none cursor-pointer' icon={faUser} /></li>
              <li><FontAwesomeIcon className='border border-gray-400 rounded-full p-2 leading-none cursor-pointer mx-4' icon={faUser} /></li>
              <li><FontAwesomeIcon className='border border-gray-400 rounded-full p-2 leading-none cursor-pointer' icon={faUser} /></li>
            </ul>
          </ul>
          <ul>
            <h1 className='uppercase text-xl text-white pb-4'>customer service</h1>
            <li>Help & FAQs</li>
            <li>shipping and delivery</li>
            <li>my account</li>
            <li>about us</li>
            <li>privacy</li>
          </ul>

          <div>
            <h1 className='uppercase text-xl text-white pb-4'>popular tags</h1>
            <ul className='grid grid-cols-5 gap-2'>
              <li className='border border-gray-40 px-2'>bag</li>
              <li className='border border-gray-40 px-2'>lo</li>
              <li className='border border-gray-40 px-2'>lo</li>
              <li className='border border-gray-40 px-2'>lo</li>
              <li className='border border-gray-40 px-2'>lo</li>
              <li className='border border-gray-40 px-2'>bag</li>
              <li className='border border-gray-40 px-2'>lo</li>
              <li className='border border-gray-40 px-2'>lo</li>
              <li className='border border-gray-40 px-2'>lo</li>
              <li className='border border-gray-40 px-2'>lo</li>
            </ul>
          </div>
          <div>
            <h1 className='uppercase text-xl text-white pb-4'>subscribe newsletter</h1>
            <p className='pb-4'>Get all the latest information on events, sales and offers. Sign up for newsletter:</p>
            <form action="">
              <input className='rounded-full bg-transparent block focus:ring-0 focus:border-gray-500  w-3/4' type="text" placeholder='email address' />
              <button className='bg-blue-500 text-white rounded-full uppercase py-2.5 px-5 mt-2'>subscribe</button>
            </form>
          </div>
        </div>
        <div className='flex justify-between mx-auto w-9/12 pt-5'>
          <p>© Porto eCommerce. 2021. All Rights Reserved</p>
          <ul className='flex justify-center flex-wrap'>
            <li className='cursor-pointer'><img className='w-10 invert' src="https://portotheme.com/html/porto_ecommerce/assets/images/payments/payment-visa.svg" alt="" /></li>
            <li className='cursor-pointer mx-4'><img className='w-10 invert' src="https://portotheme.com/html/porto_ecommerce/assets/images/payments/payment-paypal.svg" alt="" /></li>
            <li className='cursor-pointer'><img className='w-10 invert' src="https://portotheme.com/html/porto_ecommerce/assets/images/payments/payment-stripe.png" alt="" /></li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
