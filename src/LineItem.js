import React from 'react'
import { FaTrashCan } from 'react-icons/fa6';

const LineItem = ({ item, handleCheck, handleDelete }) => {
  return (
    <li className="item">
        <input 
            type="checkbox"
            onChange={() => handleCheck(item.id)}
            checked={item.checked}
        />
        <label
            style={(item.checked) ? { textDecoration: 'line-through'} : null}
            onDoubleClick={() => handleCheck(item.id)}
        >{item.item}</label>
        <FaTrashCan
            onClick={() => handleDelete(item.id)} 
            role="button" 
            tabIndex='0'
            aria-label={`Delete ${item.item}`}
        />
    </li>
  )
}

export default LineItem