import React, { useContext, useEffect } from 'react';
import { Transaction } from './Transaction';
import { Container } from '@sberdevices/plasma-ui';

import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
        const { transactions, getTransactions } = useContext(GlobalContext);

        useEffect(() => {
            getTransactions();
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);

        return ( 
            <Container className = "container2">
                <h3 className = "History"> История </h3> 
                <ul className = "list"> {transactions.map(transaction => ( < Transaction key = { transaction._id } transaction = { transaction }/>))} 
                </ul> 
            </Container>
        )
}