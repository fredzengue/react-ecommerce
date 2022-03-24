import React, { useState } from 'react';
import {AddressData} from './data/AddressData';

const Contact = () => {
    const [adressData] = useState(AddressData);
    
    return (
        <div className='block'>
            <div className="block">
                <iframe 
                    title='la localisation'
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11757.487118051042!2d11.529617718601685!3d3.882714499745933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bc596d33e5b29%3A0x93d8de55c6ff0e81!2sSODEPA!5e0!3m2!1sfr!2sfr!4v1648138761212!5m2!1sfr!2sfr" 
                    width={1290} 
                    height={450} 
                    style={{border: 0}} 
                    allowFullScreen 
                    loading="lazy" 
                />
            </div>
            <div className="block">
                <h1 className="text-2xl font-bold  text-red-600">Contact Info</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ipsam, nesciunt obcaecati laboriosam iusto quos? Beatae nam vel molestias ducimus hic veniam est, adipisci recusandae voluptas quis aliquam, fugiat voluptate!</p>
            </div>
            <div className="flex flex-row">
                {
                    adressData.map((adress) => (
                        <div className="basis-1/4">
                            <img src="" alt={"icon " + adress.name}/>
                            <h4>{adress.name}</h4>
                            <p>{adress.value}</p>
                        </div>
                    ))
                }   
            </div>
            <div className='flex flex-row'>
                <div className="basis-1/2 ronded"></div>
                <div className="basis-1/2"></div>
            </div>
        </div>
    );
};

export default Contact;