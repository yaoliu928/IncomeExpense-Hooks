import React, { createContext, useReducer, useMemo } from "react";
import AppReducer from './AppReducer';

const initialState = {
  transactions: [
    {
      id: 1, text: 'Fan', amount: -20
    },
    {
      id: 2, text: 'Salary', amount: 2000
    },
    {
      id: 3, text: 'Tea', amount: -1
    }
  ]
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction
    });
  }

  const foo = useMemo(() => ({
    transactions: [...state.transactions],
    deleteTransaction,
    addTransaction
  }), [state.transactions]);

  return (
    <GlobalContext.Provider
      value={foo}
    >
      {children}
    </GlobalContext.Provider>
  );
};