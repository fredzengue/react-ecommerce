import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
export default function Dropdown(props) {
    const [show, setShow] = useState(false);

    function handleClick() {
        setShow(!show)
    }
    return (
        <>
            <li className='flex items-center cursor-pointer' onClick={handleClick}>{props.title} <span className='mx-1'></span> <FontAwesomeIcon icon={show ? faChevronUp : faChevronDown} /></li>
            {show ?
                props.children
                : null
            }
        </>
    )
}
