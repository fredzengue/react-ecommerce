import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollar, faDollarSign, faHome, faMicrophoneLines, faShippingFast } from '@fortawesome/free-solid-svg-icons';

const About_us = () => {
    return (
        <div className='mx-auto pt-10'>
                 <div className='flex items-center gap-5 text-gray-low'>
                    <FontAwesomeIcon icon={faHome} />
                    <p> About_us </p>
                </div>
                <div className='pt-16'>
                    <h1 className='pb-6 font-bold'> OUR STORY </h1>
                    <p className='justify-self-stretch'>
                         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.

                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                        
                    <p className='pt-3'>“ Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model search for evolved over sometimes by accident, sometimes on purpose ”</p> 
                </div>
                <div className='py-10 bg-gray-low'>
                <h1 className='font-bold text-2xl'> WHY CHOOSE US</h1>
                <div className='flex gap-6 pt-10'>
                    <div className='px-10 py-10 bg-white'>
                      <p className='text-blue'><FontAwesomeIcon icon={faShippingFast} /></p>
                        <h2 className='pb-2'>FREE Shipping</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className='px-10 py-10 bg-white'>
                       <p  className='text-blue'><FontAwesomeIcon icon={faDollarSign} /></p>, 
                        <h2 className='pb-2'> 100% MONEY BACK GUARANTEE</h2>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr.
                    </div>
                    <div className='px-10 py-10 bg-white'>
                    <p  className='text-blue'> <FontAwesomeIcon icon={faMicrophoneLines} /></p>
                        <h2 className='pb-2'> Online support 24h/7</h2>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr.
                    </div>
                </div>
                </div>
                <div>
                <div className='pt-20'>
                <h1 className='text-center pb-6 font-bold text-xl'>Happy clients</h1>
                <div className='flex gap-3'>
                <div>
                    <span>BOB SMITH</span>
                   <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr</p>
                </div>
                <div>
                    <span>BOB SMITH</span>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr</p> 
                </div>
                </div>
                </div>

            </div>
        </div>
    );
};

export default About_us;