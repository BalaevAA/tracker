import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

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

  return (
    <div className="container4">
      <h3>Добавить транзакцию</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Ваша транзакция</label>
          <input className="inputTransaction" type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Пишите сюда..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >скока денег <br />
            (отрицательная сумма - затраты, положительная - прибыль)</label
          >
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="На какую сумму..." />
        </div>
        <button className="btn">Добавить</button>
      </form>
    </div>
  )
}
