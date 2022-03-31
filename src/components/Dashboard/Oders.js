import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';


const Oders = () => {
    return (
        <div className='mx-auto text-center flex'>
                <div className=' mx-10 w-1/5'>

                </div>
            <div className='w-4/5 -ml-24'>
                <h3 className='capitalize -ml-96 -pl-28 text-2xl'> <FontAwesomeIcon icon={faHome} /> ODERS</h3>
                <div className='divide-y divide-[#e7e7e7] pt-10'>
                    <table className='flex justify-center '>
                        <tr>
                            <td className='px-10'>Oder</td>
                            <td className='px-10'>Date</td>
                            <td className='px-10'>Statut</td>
                            <td className='px-10'>Total</td>
                            <td className='px-10'>Actions</td>
                        </tr>
                    </table>
                    <p className=' pt-10 pb-10 text-[#e7e7e7]  '>no oder has been made yet.</p>
                    <p className='pt-10 '><a className='bg-dark-middle text-white hover:bg-gray-strong text-2xl' href='#'>GO SHOP</a></p>
                </div>
            </div>

        </div>
    );
};

export default Oders;