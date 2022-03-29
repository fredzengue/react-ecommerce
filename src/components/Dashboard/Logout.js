import React from 'react';

const Logout = () => {
    return (
        <div className='w-3/4 :w-full mx-auto bg-red-400 py-8'>
            <h1 className='font-bold text-center capitalize text-2xl mb-7'>Connectez-Vous</h1>
              <form>
                   <div className=''>
                       <div className='mb-7'>
                           <label className='text-center block'>Nom_utilisateur ou email </label>
                           <input className='w-3/4 mx-auto block' type="text" name="name" required="required" />
                        </div>
                        <div className='mb-7'> <label className='text-center block'> mot de passe </label>
                        <input className='w-3/4 mx-auto block' type="text" name="prenom"  required="required"/>
                        </div>
                        <div className='flex items-center justify-between w-3/4 mx-auto my-7'>
                            <label className=' flex items-center gap-x-3'> 
                                <input  type="checkbox" id="vehi"/>
                                Se Souvenir de moi 
                            </label>
                            <a href='#'>mot de passe oublié?</a>
                        </div>
                       
                        <input className='bg-black w-3/4 mx-auto block text-white py-2 mb-7' type= 'submit' value= 'Connexion'/>
                        
                    </div>
                </form>
        </div>
    );
};

export default Logout;