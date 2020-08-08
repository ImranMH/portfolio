import React from 'react'
import { Balance } from './Balance';
import { IncomeExpenses } from './IncomeExpenses';
import { TransactionList } from './TransactionList';
import { AddTransaction } from './AddTransaction';
import { GlobalProvider } from '../../../context/GlobalState'
import './Main.css'

export default function Index() {
    return (
        <GlobalProvider>
            <div className="container-expense">
                <Balance />
                <IncomeExpenses />
                <TransactionList />
                <AddTransaction />
            </div>

        </GlobalProvider>
    )
}

