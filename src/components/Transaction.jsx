import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';


const Transaction = ({ id, text, amount }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = amount >= 0 ? '+' : '-';
  const handleDelete = () => {
    deleteTransaction(id);
  };

  return (
    <li className={amount >= 0 ? 'plus' : 'minus'}>
      {text}
      <span>
        {sign}${Math.abs(amount)}
      </span>
      <button onClick={handleDelete} className='delete-btn'>X</button>
    </li>
  )
}

export default Transaction;