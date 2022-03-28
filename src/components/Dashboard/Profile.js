import React from 'react';

const Profile = () => {
    return (
                    <div>
                        <h3 className='text-center mt-10 pt-10'>Details du compte</h3>

                               <form className='text-center border border-gray-600 ml-10 mr-10 '>
                                    <label htmlFor="name">nom</label><br/>
                                    <input type="text" className="form-control"  placeholder='nom'/><br/>                               
                                    <label htmlFor="name">prenom</label><br/>
                                    <input type="text" className="form-control" placeholder='prenom' /><br/>
                                
                                    <label htmlFor="name">nom d'utilisateur</label><br/>
                                    <input type="text" className="form-control"/><br/>
                                
                                    <label htmlFor="exampleInputEmail1">Email</label><br/>
                                    <input type="email" className="form-control" placeholder='email' /><br/> <br/>
                                
                                   <div className='border-4 border-gray-600'>
                                        <label htmlFor="name">ancien mot de passe</label><br/>
                                        <input type="text" className="form-control" /><br/>
                                    
                                        <label htmlFor="name">nouveau mot de passe</label><br/>
                                        <input type="text"  className="form-control"  /><br/>
                                
                                        <label htmlFor="name">confirmer le mot de passe</label><br/>
                                        <input type="text" className="form-control" /><br/>
                                  </div>
                                <button type="submit" className="">Enregistrer</button>
                            </form>

                    </div>
    );
};

export default Profile;