import React, { useContext } from 'react'
import { GlobalContext } from '../../../context/GlobalState'
import Transaction from './Transaction'



export const TransactionList = function () {
    const { transitions } = useContext(GlobalContext)

    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {transitions.map(transition => (
                    <Transaction key={transition.id} transition={transition} />
                ))}

            </ul>
        </>
    )
}
