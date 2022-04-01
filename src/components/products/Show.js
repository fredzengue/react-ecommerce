import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Breadcrumb from '../utilities/Breadcrumb'

export default function Show() {
    return (
        <div className='w-9/12 mx-auto'>
            <Breadcrumb prev={['product']} current='product name' />
            <div className='flex'>
                <div>
                    <div>
                        <img src="https://portotheme.com/html/porto_ecommerce/assets/images/products/zoom/product-1-big.jpg" alt="" />
                    </div>
                    <div>
                        <ul>
                            <li><img src="https://portotheme.com/html/porto_ecommerce/assets/images/products/zoom/product-1.jpg" alt="" /></li>
                            <li><img src="https://portotheme.com/html/porto_ecommerce/assets/images/products/zoom/product-2.jpg" alt="" /></li>
                            <li><img src="https://portotheme.com/html/porto_ecommerce/assets/images/products/zoom/product-3.jpg" alt="" /></li>
                            <li><img src="https://portotheme.com/html/porto_ecommerce/assets/images/products/zoom/product-5.jpg" alt="" /></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h1>Men Black Sports Shoes</h1>
                    <div>
                        <h1 className='pt-2 text-sm flex justify-center text-gray-middle'>
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                        </h1>
                        <h1>(6 reviews)</h1>
                    </div>
                    <h1 className='pt-2 flex justify-center gap-x-2 items-center'>
                        <span className='text-sm line-through text-gray-middle'>90.00&euro;</span>
                        <span className='text-dark-low font-bold text-xl'>70.00&euro;</span>
                    </h1>
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt veniam molestiae a aut non ab perferendis eligendi blanditiis vitae ipsam! Vero optio deleniti aut temporibus sequi exercitationem omnis doloribus eligendi.</h1>
                    <ul>
                        <li>sku: <span>654613612</span></li>
                        <li>category: <span>SHOES</span></li>
                        <li>tags: <span>CLOTHES, SWEATER</span></li>
                        <li>colors
                            <span></span>
                            <span></span>
                            <span></span>
                        </li>
                        <li>size
                            <span>extra large</span>
                            <span>large</span>
                            <span>medium</span>
                            <span>small</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
