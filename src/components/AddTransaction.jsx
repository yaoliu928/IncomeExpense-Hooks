import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext);
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction({
      id: Math.floor(Math.random() * 100000000),
      text, amount: +amount
    });
    setAmount(0);
    setText('');
  }
  return (
    <div>
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input
            type='text'
            value={text}
            id='text'
            placeholder='Enter text ...'
            onChange={(e) => { setText(e.target.value) }}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>Amount</label>
          <input
            type='number'
            value={amount}
            id='amount'
            placeholder='Enter number ...'
            onChange={(e) => { setAmount(e.target.value) }}
          />
        </div>
        <button className='btn'>Add transaction</button>
      </form>
    </div>
  )
};

export default AddTransaction;