import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import { Container, Button, TextField, TextBox } from '@sberdevices/plasma-ui';

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            text,
            amount: +amount
        }

        addTransaction(newTransaction);
    }

    ///<label htmlFor="amount">На какую сумму?<br/>(Отрицательная сумма - затраты, положительная - прибыль)</label>
    return ( 
        <Container className = "container4" >
            <h3> Добавить транзакцию </h3> 
            <form onSubmit = { onSubmit } >
                <div>
                    <label htmlFor = "text" > Ваша транзакция </label> 
                    <TextField required = { true } 
                               value = { text }
                               onChange = {(e) => setText(e.target.value) } 
                               label = "Введите сюда"/>
                </div> 
                <div>
                    <TextBox caption = "(Отрицательная сумма - затраты, положительная - прибыль)" 
                        label = ""
                        size = "l"
                        subTitle = ""
                        title = "На какую сумму" /
                    >
                    <TextField type = "number"
                               value = { amount }
                               onChange = {(e) => setAmount(e.target.value) }
                               placeholder = "На какую сумму..." />
                </div> 
                <Button className = "btn" > Добавить </Button> 
            </form> 
        </Container>
    )
}