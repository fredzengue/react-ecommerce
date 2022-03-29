import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser } from '@fortawesome/free-solid-svg-icons';

const Profile = () => {
    return (
            <div className='text-center mt-20'>
                  <h1 className='font-bold -ml-96' ><FontAwesomeIcon icon={faUser }/> Account Details</h1>
            <div className='ml-40'>
               <form>
                   <div className='-ml-48 '>
                        <label className='-ml-96'>
                            Nom : <br/>
                            <input className='w-1/3' type="text" name="name" required="required" />
                        </label><br/>
                        <label className='-ml-96'>
                            prenom : <br/>
                            <input className='w-1/3' type="text" name="prenom"  required="required"/>
                        </label><br/>
                        <label className='-ml-96'>
                            Nom_utilisateur: <br/>
                            <input className='w-1/3' type="text" name="user-name"  required="required"/>
                        </label><br/>
                        <label className='-ml-96'>
                            Email : <br/>
                            <input className='w-1/3' type="text" name="email" required="required" />
                        </label><br/>
                    </div> <br/>
                    <div className='pt-20 outline outline-offset-2 outline-black mr-52 ml-80'>
                        <div className='-ml-52 -mt-10 pb-10 '>
                                <h1 className='font-bold'>Modifier mot de passe</h1>
                                    <label>
                                        Ancien mot de passe (ne rien ecrire si vous ne voulez pas modifier) <br/>
                                        <input className='w-1/3' type="text" name="name" />
                                    </label><br/>
                                    <label>
                                        Nouveau mot de passe (ne rien ecrire si vous ne voulez pas modifier) <br/>
                                        <input className='w-1/3' type="text" name="name" />
                                    </label><br/>
                                    <label>
                                        Confirmé mot de passe: <br/>
                                        <input className='w-1/3' type="text" name="name" />
                                    </label><br/> 
                        </div>
                    </div>
                    <input className=' -ml-96 bg-black text-white mt-10' type= 'submit' value= 'ENREGISTRER'/>
                </form>
            </div>
      

            </div>
    );
};

export default Profile;