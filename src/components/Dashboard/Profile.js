import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Profile = () => {
    return (
        <div className='mx-auto ml-28 mb-7'>
            <h1 className='font-bold text-2xl pb-7' ><FontAwesomeIcon icon={faUser} /> Account Details</h1>
            
                <form>
                    <div className=''>
                        <div className='flex mx-auto items-center'>
                                <div>
                                    <label> Nom <em className='text-red'>*</em></label><br />
                                    <input className='w-3/4' type="text" name="name" required="required" />
                                </div>
                            <div className=''>
                                    <label> prenom <em className='text-red'>*</em></label><br />
                                    <input className='w-3/4 ' type="text" name="prenom" required="required" />
                            </div>
                        </div>
                            <div>
                                <label className=''>Nom_utilisateur <em className='text-red'>*</em></label><br />
                                <input className='w-3/4' type="text" name="user-name" required="required" />
                            </div>
                            <div>
                                <label className=''> Email <em className='text-red'>*</em></label><br />
                                <input className='w-3/4' type="text" name="email" required="required" />
                            </div>
                    </div> 
                    <div className='mt-10 border border-'>
                        <div className='ml-4 mb-4'>
                            <h1 className='font-bold text-2xl py-5'>Modifier mot de passe</h1>
                            <div className='pb-4'>
                                    <label>Ancien mot de passe (ne rien ecrire si vous ne voulez pas modifier)</label><br />
                                    <input className='w-3/4' type="text" name="name" />
                            </div>
                            <div className='pb-4'>
                                    <label>Nouveau mot de passe (ne rien ecrire si vous ne voulez pas modifier)</label><br />
                                    <input className='w-3/4' type="text" name="name" />
                            </div>
                            <div>
                                        <label>Confirmé mot de passe</label><br />
                                        <input className='w-3/4' type="text" name="name" />
                            </div>
                        </div>
                    </div>
                    <input className='mt-5 py-2 bg-dark-low text-white hover:bg-gray-low rounded' type='submit' value='ENREGISTRER' />
                </form>
        </div>
    );
};

export default Profile;