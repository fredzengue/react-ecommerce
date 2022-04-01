
import { useState } from 'react'
import Layout from '../Layout'
import Breadcrumbs from '../utilities/Breadcrumb'
import { faChevronDown, faTh } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListUl } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faExternalLink } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import Slider from '@mui/material/Slider';

import CustomSelect from '../utilities/CustomSelect'
import Collapse from '../utilities/Collapse'
export default function Index() {
    const [show_filter, setFilter] = useState(false)
    const [value, setValue] = useState([2, 10]);
    const rangeSelector = (event, newValue) => {
        setValue(newValue);
        console.log(newValue)
    };
    return (
        <Layout>
            <div className='h-[300px] bg-electronic_product'>
                <div className='w-1/2 mx-auto pt-[150px] content-center'>
                    <button className='leading-none py-4 px-6 uppercase bg-dark-low text-white hover:opacity-75 font-bold text-sm'>get yours!</button>
                </div>
            </div>
            <div className='w-9/12 mx-auto mt-4 mb-10'>
                <Breadcrumbs current='products' />
                <div className='my-4 flex items-center justify-between'>
                    <div className='flex items-center gap-x-2'>
                        <label className='text-gray-middle uppercase'>filter</label>
                        <button onClick={() => setFilter(!show_filter)} className={show_filter ? 'w-[46px] h-[26px] border-2 border-divider rounded-full bg-blue ' : 'w-[46px] h-[26px] border-2 border-divider rounded-full '}>
                            <span className={show_filter ? 'float-right w-1/2 h-full rounded-full shadow-close_btn block bg-white' : 'w-1/2 h-full rounded-full shadow-close_btn block'}></span>
                        </button>
                    </div>
                    <div className='flex items-center gap-x-8'>
                        <div className='flex items-center gap-x-2'>
                            <label className='text-gray-middle uppercase'>sort by</label>
                            <CustomSelect list={['by popularity', 'by low price']} default='default sorting' />
                        </div>
                        <div>
                            <div className='flex items-center gap-x-2'>
                                <label className='text-gray-middle uppercase'>show</label>
                                <CustomSelect list={['40', '60', '70', '80', '100']} default='20' />
                            </div>
                        </div>
                        <div className='px-3 py-1 border border-divider text-xl hover:text-blue cursor-pointer'>
                            <FontAwesomeIcon icon={faTh} />
                        </div>
                        <div className='px-3 py-1 border border-divider text-xl hover:text-blue cursor-pointer'>
                            <FontAwesomeIcon icon={faListUl} />
                        </div>
                    </div>
                </div>
                <div className='my-4 flex justify-between items-start gap-x-4'>
                    {show_filter ?
                        <div className='w-1/4'>
                            <ul className=''>
                                <Collapse title='categories'>
                                    <ul>
                                        <li className='py-1'>Accessories(3)</li>
                                        <li className='py-1'>Accessories(3)</li>
                                        <li className='py-1'>Accessories(3)</li>
                                    </ul>
                                </Collapse>
                                <Collapse title='prices'>
                                    <Slider
                                        value={value}
                                        onChange={rangeSelector}
                                        sx={{
                                            color: '#08C',
                                        }}
                                    />
                                    <div className='flex justify-between pt-4'>
                                        <h1 className='text-sm capitalize text-gray-middle'>price: {value[0]}&euro; - {value[1]}&euro;</h1>
                                        <button className='bg-blue text-white py-1 px-2 uppercase text-sm'>filter</button>
                                    </div>
                                </Collapse>
                                <Collapse title='colors'>
                                    <div className='grid grid-cols-5 gap-1'>
                                        <span className='cursor-pointer bg-dark-low w-[30px] h-[30px] text-center leading-7'><FontAwesomeIcon icon={faCheck} className='text-white' /></span>
                                        <span className='cursor-pointer bg-blue w-[30px] h-[30px] '></span>
                                        <span className='cursor-pointer bg-red w-[30px] h-[30px] '></span>
                                        <span className='cursor-pointer bg-green w-[30px] h-[30px] '></span>
                                        <span className='cursor-pointer bg-green w-[30px] h-[30px] '></span>
                                        <span className='cursor-pointer bg-green w-[30px] h-[30px] '></span>
                                        <span className='cursor-pointer bg-green w-[30px] h-[30px] '></span>
                                    </div>
                                </Collapse>
                                <Collapse title='sizes'>
                                    <div className='grid grid-cols-4 gap-1'>
                                        <span className='cursor-pointer text-center uppercase border bg-blue border-blue text-white text-sm py-1 px-2'>ls</span>
                                        <span className='cursor-pointer text-center uppercase border border-divider hover:bg-blue hover:border-blue hover:text-white text-gray-strong text-sm py-1 px-2'>xl</span>
                                        <span className='cursor-pointer text-center uppercase border border-divider hover:bg-blue hover:border-blue hover:text-white text-gray-strong text-sm py-1 px-2'>s</span>
                                        <span className='cursor-pointer text-center uppercase border border-divider hover:bg-blue hover:border-blue hover:text-white text-gray-strong text-sm py-1 px-2'>xxl</span>
                                        <span className='cursor-pointer text-center uppercase border border-divider hover:bg-blue hover:border-blue hover:text-white text-gray-strong text-sm py-1 px-2'>xxxl</span>
                                        <span className='cursor-pointer text-center uppercase border border-divider hover:bg-blue hover:border-blue hover:text-white text-gray-strong text-sm py-1 px-2'>l</span>
                                        <span className='cursor-pointer text-center uppercase border border-divider hover:bg-blue hover:border-blue hover:text-white text-gray-strong text-sm py-1 px-2'>m</span>
                                    </div>
                                </Collapse>
                                <Collapse title='features'>
                                    <ul>
                                        <li className='py-1'>Accessories(3)</li>
                                        <li className='py-1'>Accessories(3)</li>
                                        <li className='py-1'>Accessories(3)</li>
                                    </ul>
                                </Collapse>
                            </ul>
                        </div>
                        : null
                    }
                    <div className={show_filter ? 'grid w-full grid-cols-4 gap-4' : 'grid  grid-cols-4 gap-4'}>
                        <div className='border border-divider text-center'>
                            <div className='relative cursor-pointer'>
                                <div className='absolute z-10 pl-2'>
                                    <span className=' bg-green text-white rounded-full block text-[10px] px-[11px] mt-2'>Hot</span>
                                    <span className=' bg-red text-white rounded-full block text-[10px] mt-2'>-20%</span>
                                </div>
                                <img src="https://portotheme.com/html/porto_ecommerce/assets/images/products/product-1-2.jpg" alt="" />
                                <img className='absolute top-0 hover:hidden' src="https://portotheme.com/html/porto_ecommerce/assets/images/products/product-1.jpg" alt="" />
                            </div>
                            <div className='p-2'>
                                <h1 className='pt-2 text-sm text-gray-low uppercase hover:text-blue whitespace-nowrap overflow-hidden text-ellipsis'>category</h1>
                                <h1 className='pt-2 text-md text-dark uppercase whitespace-nowrap overflow-hidden text-ellipsis'>Lorem, ipsum dolor sit amet consecte</h1>
                                <h1 className='pt-2 text-sm flex justify-center text-gray-middle'>
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                </h1>
                                <h1 className='pt-2 flex justify-center gap-x-2 items-center'>
                                    <span className='text-sm line-through text-gray-middle'>90.00&euro;</span>
                                    <span className='text-dark-low font-bold text-xl'>70.00&euro;</span>
                                </h1>
                            </div>
                            <div className='relative'>
                                <div className='absolute w-full bg-white hover:hidden'>
                                    <button className='bg-input w-3/5 py-2 leading-6 text-gray-middle uppercase text-sm font-bold mx-auto'>add to cart</button>
                                </div>
                                <div className='flex'>
                                    <button className='w-1/4 py-2 text-gray-middle hover:bg-input hover:text-dark-low'><FontAwesomeIcon icon={faHeart} /></button>
                                    <button className='bg-dark-low w-3/4 py-2 text-white font-bold uppercase text-sm'>add to cart</button>
                                    <button className='w-1/4 py-2 text-gray-middle hover:bg-input hover:text-dark-low'><FontAwesomeIcon icon={faExternalLink} /></button>
                                </div>
                            </div>
                        </div>
                        <div className='border border-divider text-center'>
                            <div className='relative cursor-pointer'>
                                <div className='absolute z-10 pl-2'>
                                    <span className=' bg-green text-white rounded-full block text-[10px] px-[11px] mt-2'>Hot</span>
                                    <span className=' bg-red text-white rounded-full block text-[10px] mt-2'>-20%</span>
                                </div>
                                <img src="https://portotheme.com/html/porto_ecommerce/assets/images/products/product-1-2.jpg" alt="" />
                                <img className='absolute top-0 hover:hidden' src="https://portotheme.com/html/porto_ecommerce/assets/images/products/product-1.jpg" alt="" />
                            </div>
                            <div className='p-2'>
                                <h1 className='pt-2 text-sm text-gray-low uppercase hover:text-blue whitespace-nowrap overflow-hidden text-ellipsis'>category</h1>
                                <h1 className='pt-2 text-md text-dark uppercase whitespace-nowrap overflow-hidden text-ellipsis'>Lorem, ipsum dolor sit amet consecte</h1>
                                <h1 className='pt-2 text-sm flex justify-center text-gray-middle'>
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                </h1>
                                <h1 className='pt-2 flex justify-center gap-x-2 items-center'>
                                    <span className='text-sm line-through text-gray-middle'>90.00&euro;</span>
                                    <span className='text-dark-low font-bold text-xl'>70.00&euro;</span>
                                </h1>
                            </div>
                            <div className='relative'>
                                <div className='absolute w-full bg-white hover:hidden'>
                                    <button className='bg-input w-3/5 py-2 leading-6 text-gray-middle uppercase text-sm font-bold mx-auto'>add to cart</button>
                                </div>
                                <div className='flex'>
                                    <button className='w-1/4 py-2 text-gray-middle hover:bg-input hover:text-dark-low'><FontAwesomeIcon icon={faHeart} /></button>
                                    <button className='bg-dark-low w-3/4 py-2 text-white font-bold uppercase text-sm'>add to cart</button>
                                    <button className='w-1/4 py-2 text-gray-middle hover:bg-input hover:text-dark-low'><FontAwesomeIcon icon={faExternalLink} /></button>
                                </div>
                            </div>
                        </div>
                        <div className='border border-divider text-center'>
                            <div className='relative cursor-pointer'>
                                <div className='absolute z-10 pl-2'>
                                    <span className=' bg-green text-white rounded-full block text-[10px] px-[11px] mt-2'>Hot</span>
                                    <span className=' bg-red text-white rounded-full block text-[10px] mt-2'>-20%</span>
                                </div>
                                <img src="https://portotheme.com/html/porto_ecommerce/assets/images/products/product-1-2.jpg" alt="" />
                                <img className='absolute top-0 hover:hidden' src="https://portotheme.com/html/porto_ecommerce/assets/images/products/product-1.jpg" alt="" />
                            </div>
                            <div className='p-2'>
                                <h1 className='pt-2 text-sm text-gray-low uppercase hover:text-blue whitespace-nowrap overflow-hidden text-ellipsis'>category</h1>
                                <h1 className='pt-2 text-md text-dark uppercase whitespace-nowrap overflow-hidden text-ellipsis'>Lorem, ipsum dolor sit amet consecte</h1>
                                <h1 className='pt-2 text-sm flex justify-center text-gray-middle'>
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                </h1>
                                <h1 className='pt-2 flex justify-center gap-x-2 items-center'>
                                    <span className='text-sm line-through text-gray-middle'>90.00&euro;</span>
                                    <span className='text-dark-low font-bold text-xl'>70.00&euro;</span>
                                </h1>
                            </div>
                            <div className='relative'>
                                <div className='absolute w-full bg-white hover:hidden'>
                                    <button className='bg-input w-3/5 py-2 leading-6 text-gray-middle uppercase text-sm font-bold mx-auto'>add to cart</button>
                                </div>
                                <div className='flex'>
                                    <button className='w-1/4 py-2 text-gray-middle hover:bg-input hover:text-dark-low'><FontAwesomeIcon icon={faHeart} /></button>
                                    <button className='bg-dark-low w-3/4 py-2 text-white font-bold uppercase text-sm'>add to cart</button>
                                    <button className='w-1/4 py-2 text-gray-middle hover:bg-input hover:text-dark-low'><FontAwesomeIcon icon={faExternalLink} /></button>
                                </div>
                            </div>
                        </div>
                        <div className='border border-divider text-center'>
                            <div className='relative cursor-pointer'>
                                <div className='absolute z-10 pl-2'>
                                    <span className=' bg-green text-white rounded-full block text-[10px] px-[11px] mt-2'>Hot</span>
                                    <span className=' bg-red text-white rounded-full block text-[10px] mt-2'>-20%</span>
                                </div>
                                <img src="https://portotheme.com/html/porto_ecommerce/assets/images/products/product-1-2.jpg" alt="" />
                                <img className='absolute top-0 hover:hidden' src="https://portotheme.com/html/porto_ecommerce/assets/images/products/product-1.jpg" alt="" />
                            </div>
                            <div className='p-2'>
                                <h1 className='pt-2 text-sm text-gray-low uppercase hover:text-blue whitespace-nowrap overflow-hidden text-ellipsis'>category</h1>
                                <h1 className='pt-2 text-md text-dark uppercase whitespace-nowrap overflow-hidden text-ellipsis'>Lorem, ipsum dolor sit amet consecte</h1>
                                <h1 className='pt-2 text-sm flex justify-center text-gray-middle'>
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                </h1>
                                <h1 className='pt-2 flex justify-center gap-x-2 items-center'>
                                    <span className='text-sm line-through text-gray-middle'>90.00&euro;</span>
                                    <span className='text-dark-low font-bold text-xl'>70.00&euro;</span>
                                </h1>
                            </div>
                            <div className='relative'>
                                <div className='absolute w-full bg-white hover:hidden'>
                                    <button className='bg-input w-3/5 py-2 leading-6 text-gray-middle uppercase text-sm font-bold mx-auto'>add to cart</button>
                                </div>
                                <div className='flex'>
                                    <button className='w-1/4 py-2 text-gray-middle hover:bg-input hover:text-dark-low'><FontAwesomeIcon icon={faHeart} /></button>
                                    <button className='bg-dark-low w-3/4 py-2 text-white font-bold uppercase text-sm'>add to cart</button>
                                    <button className='w-1/4 py-2 text-gray-middle hover:bg-input hover:text-dark-low'><FontAwesomeIcon icon={faExternalLink} /></button>
                                </div>
                            </div>
                        </div>
                        <div className='border border-divider text-center'>
                            <div className='relative cursor-pointer'>
                                <div className='absolute z-10 pl-2'>
                                    <span className=' bg-green text-white rounded-full block text-[10px] px-[11px] mt-2'>Hot</span>
                                    <span className=' bg-red text-white rounded-full block text-[10px] mt-2'>-20%</span>
                                </div>
                                <img src="https://portotheme.com/html/porto_ecommerce/assets/images/products/product-1-2.jpg" alt="" />
                                <img className='absolute top-0 hover:hidden' src="https://portotheme.com/html/porto_ecommerce/assets/images/products/product-1.jpg" alt="" />
                            </div>
                            <div className='p-2'>
                                <h1 className='pt-2 text-sm text-gray-low uppercase hover:text-blue whitespace-nowrap overflow-hidden text-ellipsis'>category</h1>
                                <h1 className='pt-2 text-md text-dark uppercase whitespace-nowrap overflow-hidden text-ellipsis'>Lorem, ipsum dolor sit amet consecte</h1>
                                <h1 className='pt-2 text-sm flex justify-center text-gray-middle'>
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                </h1>
                                <h1 className='pt-2 flex justify-center gap-x-2 items-center'>
                                    <span className='text-sm line-through text-gray-middle'>90.00&euro;</span>
                                    <span className='text-dark-low font-bold text-xl'>70.00&euro;</span>
                                </h1>
                            </div>
                            <div className='relative'>
                                <div className='absolute w-full bg-white hover:hidden'>
                                    <button className='bg-input w-3/5 py-2 leading-6 text-gray-middle uppercase text-sm font-bold mx-auto'>add to cart</button>
                                </div>
                                <div className='flex'>
                                    <button className='w-1/4 py-2 text-gray-middle hover:bg-input hover:text-dark-low'><FontAwesomeIcon icon={faHeart} /></button>
                                    <button className='bg-dark-low w-3/4 py-2 text-white font-bold uppercase text-sm'>add to cart</button>
                                    <button className='w-1/4 py-2 text-gray-middle hover:bg-input hover:text-dark-low'><FontAwesomeIcon icon={faExternalLink} /></button>
                                </div>
                            </div>
                        </div>
                        <div className='border border-divider text-center'>
                            <div className='relative cursor-pointer'>
                                <div className='absolute z-10 pl-2'>
                                    <span className=' bg-green text-white rounded-full block text-[10px] px-[11px] mt-2'>Hot</span>
                                    <span className=' bg-red text-white rounded-full block text-[10px] mt-2'>-20%</span>
                                </div>
                                <img src="https://portotheme.com/html/porto_ecommerce/assets/images/products/product-1-2.jpg" alt="" />
                                <img className='absolute top-0 hover:hidden' src="https://portotheme.com/html/porto_ecommerce/assets/images/products/product-1.jpg" alt="" />
                            </div>
                            <div className='p-2'>
                                <h1 className='pt-2 text-sm text-gray-low uppercase hover:text-blue whitespace-nowrap overflow-hidden text-ellipsis'>category</h1>
                                <h1 className='pt-2 text-md text-dark uppercase whitespace-nowrap overflow-hidden text-ellipsis'>Lorem, ipsum dolor sit amet consecte</h1>
                                <h1 className='pt-2 text-sm flex justify-center text-gray-middle'>
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                </h1>
                                <h1 className='pt-2 flex justify-center gap-x-2 items-center'>
                                    <span className='text-sm line-through text-gray-middle'>90.00&euro;</span>
                                    <span className='text-dark-low font-bold text-xl'>70.00&euro;</span>
                                </h1>
                            </div>
                            <div className='relative'>
                                <div className='absolute w-full bg-white hover:hidden'>
                                    <button className='bg-input w-3/5 py-2 leading-6 text-gray-middle uppercase text-sm font-bold mx-auto'>add to cart</button>
                                </div>
                                <div className='flex'>
                                    <button className='w-1/4 py-2 text-gray-middle hover:bg-input hover:text-dark-low'><FontAwesomeIcon icon={faHeart} /></button>
                                    <button className='bg-dark-low w-3/4 py-2 text-white font-bold uppercase text-sm'>add to cart</button>
                                    <button className='w-1/4 py-2 text-gray-middle hover:bg-input hover:text-dark-low'><FontAwesomeIcon icon={faExternalLink} /></button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-x-2'>
                        <label className='text-gray-middle uppercase'>show</label>
                        <CustomSelect list={['40', '60', '70', '80', '100']} default='20' />
                    </div>
                    <div className='flex items-center gap-x-2 text-gray-middle font-bold'>
                        <span className='border px-3 py-2 block leading-none border-blue cursor-pointer'>1</span>
                        <span className='border border-divider px-3 py-2 block leading-none hover:border-blue cursor-pointer'>2</span>
                        <span className='border border-divider px-3 py-2 block leading-none hover:border-blue cursor-pointer'>3</span>
                        <span className=' px-3 py-2 block leading-none  cursor-pointer'>...</span>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </div>
                </div>
            </div>
        </Layout>
    )
}
