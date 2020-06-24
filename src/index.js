// LIBRARY IMPORTS
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

// COMPONENT IMPORTS
import AppRouter from './routers/AppRouter'

// ACTIONS
import { startSetExpenses } from './actions/expenses'
// ReDUX STORE
import configureStore from './store/configureStore'


// FIREBASE
import './firebase/firebase'


// CSS / SCSS IMPORTS
import 'normalize.css/normalize.css'
import './styles/styles.scss';


const store = configureStore()

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
  
)
ReactDOM.render(
  <p>Loading...</p>,
  document.getElementById('root')
);

store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(
    jsx,
    document.getElementById('root')
  );
})



