import React from 'react';


const Layout = () => {
    return (
            <div>
                <div className='bg-gray-100'>
                                <div className=' mt-10 hover:mt-8  pt-10 pb-10 text-center mx-20'>
                                        <ul className= "flex   place-content-center ">
                                            <li className=' px-5 text-blue-300 underline hover:underline-offset-2' >Home</li>
                                            <li className=' px-5 text-blue-300 underline hover:underline-offset-2'>shop</li>
                                            <li className=' px-5'>my Acount</li>
                                        </ul>
                                        <h1 className='font-bold'>MY ACCOUNT</h1>
                                </div>
                </div>
                       <div className='mt-10 mx-20 flex'>
                           <div className='w-1/5 '>
                                <ul className='divide-y '>
                                        <li className='py-5  text-currentColor-400   '><a className='hover:text-green-600 ' href='google.com'>Dashboard</a></li>
                                        <li className='py-5 text-currentColor-400 ' ><a className='hover:text-green-600' href='google.com'>Profile</a></li>
                                        <li className='py-5 text-currentColor-400 '><a className='hover:text-green-600' href='google.com'>Oders</a></li>
                                        <li className='py-5 text-currentColor-400 '><a className='hover:text-green-600' href='google.com'>Adresses</a></li>
                                        <li className='py-5 text-currentColor-400 '><a  className='hover:text-green-600'href='google.com'>whishlist</a></li>
                                        <li className='py-5 text-currentColor-400 '><a className='hover:text-green-600'href='google.com'>logout</a></li>
                                    </ul>
                           </div>
                       <div className='w-4/5 bg-gray-200'>

                </div>
         </div>

     </div>
    );
};

export default Layout;