import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'

// initial state

const initialState = {
    transitions: [
        // { id: 1, text: 'Flower', amount: -20 },
        // { id: 2, text: 'Salary', amount: 310 },
        // { id: 3, text: 'Book', amount: -10 },
        // { id: 4, text: 'Camera', amount: 150 }
    ],

}

// Create context 
export const GlobalContext = createContext(initialState)

// Provider Components
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)
    // actions 
    function deleteTransaction(id) {
        console.log(id)
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }
    function addTransaction(transition) {

        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transition
        })
    }
    return (<GlobalContext.Provider value={{
        transitions: state.transitions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>)
}