// LIBRARY IMPORTS
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

// COMPONENT IMPORTS
import AppRouter from './routers/AppRouter'

// ReDUX STORE
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'


// CSS / SCSS IMPORTS
import 'normalize.css/normalize.css'
import './styles/styles.scss';


const store = configureStore()

store.dispatch(addExpense({description: 'Water Bill', amount: 4500, createdAt: 1591297684000}))
store.dispatch(addExpense({description: 'Gas Bill', createdAt: 1591816111000}))
store.dispatch(addExpense({description: 'Rent', amount: 109500, createdAt: 1591038511000}))

const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)

console.log(visibleExpenses)

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
  
)

ReactDOM.render(
  jsx,
  document.getElementById('root')
);

