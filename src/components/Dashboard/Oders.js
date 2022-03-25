import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/react-fontawesome';

const Oders = () => {
    return (
        <div>
            <h3> <FontAwesomeIcon icon={faHome} color="yellow" />ODERS</h3>
            <table className> 
                <tr>
                    <td>oder</td>
                    <td>date</td>
                    <td>statut</td>
                    <td>total</td>
                    <td>actions</td>
                </tr>
            </table>
            <p>no oder has been made yet</p>
            <button>retourner a l'achat</button>
        </div>
    );
};

export default Oders;