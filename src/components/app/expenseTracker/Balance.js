import React, { useContext } from 'react'
import { GlobalContext } from '../../../context/GlobalState'
// import { GlobalProvider } from '../../../context/GlobalState'
export const Balance = function () {
    const { transitions } = useContext(GlobalContext)
    const amounts = transitions.map(transition => transition.amount)
    const total = amounts.reduce((acc, amount) => (acc += amount), 0).toFixed(2)
    console.log(total)
    return (
        <>
            <h4>Your Balance</h4>
            <h1>$ {total}</h1>
        </>
    )
}
