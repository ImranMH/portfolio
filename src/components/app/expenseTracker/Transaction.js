import React, { useContext } from 'react'
import { GlobalContext } from '../../../context/GlobalState'


export default function Transaction({ transition }) {
    const { deleteTransaction } = useContext(GlobalContext)
    const sign = transition.amount < 0 ? "-" : "+"
    return (
        <li className={transition.amount < 0 ? 'minus' : 'plus'}>
            {transition.text} <span> {sign} ${Math.abs(transition.amount)}</span>
            <button onClick={() => deleteTransaction(transition.id)} className="delete-btn">X</button>
        </li>
    )
}
