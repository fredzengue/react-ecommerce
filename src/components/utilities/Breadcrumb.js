import React from 'react'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
export default function Breadcrumbs(props) {
  return (
    <ul className='flex items-center text-gray-middle uppercase text-sm gap-x-3'>
        <li className='flex items-center gap-x-3'><Link to={'/'}><FontAwesomeIcon icon={faHome} /></Link><FontAwesomeIcon icon={faChevronRight} /></li> 
        {props.prev ? props.prev.map((element) => (
            <li className='flex items-center gap-x-3'><Link to = {'/'+element}>{element}</Link><FontAwesomeIcon icon={faChevronRight} /></li>
        )) : null
        }
        <li>{props.current}</li>
    </ul>
  )
}
