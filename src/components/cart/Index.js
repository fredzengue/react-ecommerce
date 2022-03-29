import { useState } from 'react';
export default function Index(props) {
    function closeCart() {
        props.show = false;
    }
    return (
        <div className={props.show ? "fixed w-full h-full bg-black z-50 " : "hidden w-full h-full bg-black z-50 "}>
            <div className='fixed h-full  w-1/4 bg-white right-0 opacity-100 py-7 px-4 shadow-2xl'>
                <span className='absolute top-3 cursor-pointer text-white right-full pr-8 text-5xl' onClick={() => closeCart()}>x</span>
                <h1 className='uppercase text-xl font-bold pb-4'>shopping cart</h1>
                <ul>
                    <li className='flex items-center justify-between gap-x-4 py-4'>
                        <p>
                            <strong className='block'>lorem ipsum</strong>
                            <span>1 x 999 	&euro;</span>
                        </p>
                        <div className='relative'>
                            <img className='w-20' src="https://portotheme.com/html/porto_ecommerce/assets/images/products/product-1.jpg" alt="" />
                            <span className='bg-white rounded-full  absolute -top-2 cursor-pointer text-sm font-bold -right-2 block w-6 h-6 text-center leading-5 shadow-xl shadow-gray-400'>x</span>
                        </div>
                    </li>
                    <li className='flex items-center justify-between gap-x-4 py-4'>
                        <p>
                            <strong className='block'>lorem ipsum</strong>
                            <span>1 x 999 	&euro;</span>
                        </p>
                        <div className='relative'>
                            <img className='w-20' src="https://portotheme.com/html/porto_ecommerce/assets/images/products/product-1.jpg" alt="" />
                            <span className='bg-white rounded-full  absolute -top-2 cursor-pointer text-sm font-bold -right-2 block w-6 h-6 text-center leading-5 shadow-xl shadow-gray-400'>x</span>
                        </div>
                    </li>
                    <li className='flex items-center justify-between gap-x-4 py-4'>
                        <p>
                            <strong className='block'>lorem ipsum</strong>
                            <span>1 x 999 	&euro;</span>
                        </p>
                        <div className='relative'>
                            <img className='w-20' src="https://portotheme.com/html/porto_ecommerce/assets/images/products/product-1.jpg" alt="" />
                            <span className='bg-white rounded-full  absolute -top-2 cursor-pointer text-sm font-bold -right-2 block w-6 h-6 text-center leading-5 shadow-xl shadow-gray-400'>x</span>
                        </div>
                    </li>
                </ul>
                <h1 className='flex text-sm justify-between uppercase font-bold my-4'>Subtotal: <span>134&euro;</span></h1>
                <button className='block border w-full my-4 py-2 text-black bg-gray-500 uppercase'>view cart</button>
                <button className='block border w-full my-4 py-2 bg-black text-white uppercase'>checkout</button>
            </div>
        </div>
    )
}
