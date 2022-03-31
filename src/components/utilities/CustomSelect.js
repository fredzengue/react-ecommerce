import { useState } from 'react'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function CustomSelect(props) {
    const [show, setShow] = useState(false)
    return (
        <ul className='relative cursor-pointer'>
            <li onClick={() => setShow(!show)} className='flex items-center gap-x-4 text-dark-low px-3 py-2 capitalize text-sm border border-divider'>{props.default}{show ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}</li>
            {
                show ?
                    <ul className='bg-input absolute w-full z-20'>
                    <li className='text-dark-low bg-divider px-3 py-2 capitalize text-sm border border-divider'>{props.default}</li>
                        {props.list ? props.list.map((element) => (
                            <li className='text-gray-strong px-3 py-2 capitalize text-sm border border-divider hover:bg-divider'>{element}</li>
                        )) : null
                        }
                    </ul>
                : null
            }
        </ul>
    )
}
