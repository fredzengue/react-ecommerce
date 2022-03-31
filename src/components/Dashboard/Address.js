import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faLocation, faLocationPin, faLocationPinLock } from '@fortawesome/free-solid-svg-icons';

const Address = () => {
    return (
        <div className='ml-20'>
                <h1><FontAwesomeIcon icon={faLocation} /> Adresses</h1>
                <p className='pt-10'>The following addresses will be used on the checkout page by default.</p>
                <div className='flex justify-between pt-10'>
                        <div>
                            <h3 className='font-bold'>Billing address</h3>
                            <p className='pb-10'>You have not set up this type of address yet.</p>
                            <a href='#' className=' bg-[#e7e7e7] hover:bg-gray-strong'>ADD ADDRESS</a>
                        </div>
                        <div>
                            <h3 className='font-bold'>Shipping address</h3>
                            <p className='pb-10'>You have not set up this type of address yet.</p>
                            <a href='#' className=' bg-[#e7e7e7] hover:bg-gray-strong'>ADD ADDRESS</a>
                        </div>
                </div>
                
        </div>
    );
};

export default Address;