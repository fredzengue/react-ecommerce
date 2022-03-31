import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

export default function Collapse(props) {
    const [show, setShow] = useState(true)
  return (
    <ul>
    <li className='border border-divider p-5'>
        <h1 className='flex items-center justify-between pb-5 uppercase font-bold cursor-pointer' onClick={() => setShow(!show)}>{props.title} {show ? <FontAwesomeIcon icon={faMinus} /> : <FontAwesomeIcon icon={faPlus} />}</h1>
        {show ? props.children : null}
    </li>
</ul>
  )
}
