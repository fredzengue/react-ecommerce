import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocation, faUser } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';


const Dashbord = () => {
    return (
        <div className='ml-28'>
            <div className='place-content-center mb-10'>
                    <p>From your account dashboard you can view your <a className='text-blue' href='#'>recent oders</a> , manage your <a className='text-blue' href='#'> shipping and billing addresses</a>  , and <a className='text-blue' href='#'> edit your password and Profile.</a> </p>
            </div>
            
            <div className=''>
                <div className='flex gap-x-16 text-gray-low items-center'>
                    <div className='border-0 ' >
                    <a className=' text-4xl '>< FontAwesomeIcon icon={faHome} /></a>
                    <p className='font-bold pt-3 text-gray-strong'>ORDERS</p>
                    </div>

                    <div className='border-0' >
                    <a className=' text-4xl '>< FontAwesomeIcon icon={faUser} /></a>
                    <p className='font-bold pt-3 text-gray-strong'>PROFILE</p>
                    </div>

                    <div className='border-0' >
                    <a className=' text-4xl'>< FontAwesomeIcon icon={faLocation} /></a>
                    <p className='font-bold pt-3 text-gray-strong'>ADRESSE</p>
                    </div>

             </div>
        </div>
            
        </div>
    );
};

export default Dashbord;