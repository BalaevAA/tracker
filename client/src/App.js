import React from 'react';
import { Head } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';

import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
    return ( <
        GlobalProvider >
        <
        Head / >
        <
        div className = "container" >
        <
        Balance / >
        <
        IncomeExpenses / >
        <
        TransactionList / >
        <
        AddTransaction / >
        <
        /div> <
        /GlobalProvider>
    );
}

export default App;