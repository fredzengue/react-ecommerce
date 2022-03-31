
import React from 'react';
import { useState } from 'react';
import Profile from './Profile';
import Oders from './Oders';
import Logout from './Logout';
import Address from './Address';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Dashbord from './Dashbord';



const Layout = () => {

    const [page, setPage] =useState(<Dashbord/>);

   
   


    return (
        <div className=''>
            <div className='bg-[#e7e7e7]'>
                <div className=' mt-10 hover:mt-8  pt-10 pb-10 text-center mx-20'>
                    <ul className="flex   place-content-center ">
                        <li className=' px-3 text-blue underline hover:underline-offset-1'> Home  <FontAwesomeIcon icon={faAngleRight}/> </li>
                        <li className=' px-3 text-blue underline hover:underline-offset-2'> shop   <FontAwesomeIcon icon={faAngleRight}/> </li>
                        <li className=' px-5'>my Acount</li>
                    </ul>
                    <h1 className='font-bold text-3xl'>MY ACCOUNT</h1>
                </div>
            </div>
            <div className='mx-44 pt-16 justify-between flex '>
                <div className='w-1/5 '>
                <h1 className='font-bold'>MY ACCOUNT</h1>
                    <ul className='divide-y divide-[#e7e7e7] '>
                        <li className='py-5  text-currentColor-400' onClick={ () => setPage(<Dashbord/>)}>Dashboard</li>
                        <li className='py-5  text-currentColor-400' onClick={ () => setPage(<Oders/>)} >Odres</li>
                        <li className='py-5 text-currentColor-400 ' onClick={ () => setPage(<Profile />)} >Profile</li>
                        <li className='py-5 text-currentColor-400 'onClick={ () => setPage(<Address />)}>Adresses</li>
                        <li className='py-5 text-currentColor-400 'onClick={ () => setPage(<Logout />)}>logout</li>
                    </ul>
                </div>
                <div className='w-4/5 bg-gray-200'>
                    {page}
                </div>
            </div>

        </div>
    );
};

export default Layout;