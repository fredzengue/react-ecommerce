import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';


const Oders = () => {
    return (
        <div className='text-center  pt-72'>
            <div>
                    <h3 className='-ml-96'> <FontAwesomeIcon icon={faHome} color="#d3d3d4;" size='3.5 em' /> ODERS</h3>
                    <div className='mt-20 mx-20  divide-y'>
                    <table className= 'flex place-content-center pl-12 -mt-12'> 
                        <tr>
                            <td className='px-10'>Oder</td>
                            <td className='px-10'>Date</td>
                            <td className='px-10'>Statut</td>
                            <td className='px-10'>Total</td>
                            <td className='px-10'>Actions</td>
                        </tr>
                    </table>
                    <p className=' pt-10 pb-10 text-slate-400 '>no oder has been made yet.</p>
                <p className='pt-10'><a className='text-white font-bold text-3xl bg-black' href='bolo.com'>GO SHOP</a></p>
                </div>
           </div>
    
        </div>
    );
};

export default Oders;