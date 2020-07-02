import "babel-polyfill";
// LIBRARY IMPORTS
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

// COMPONENT IMPORTS
import AppRouter, { history } from './routers/AppRouter'
import LoadingPage from './components/LoadingPage'

// ACTIONS
import { startSetExpenses } from './actions/expenses'
import { login, logout } from './actions/auth'
// ReDUX STORE
import configureStore from './store/configureStore'


// FIREBASE
import { firebase } from './firebase/firebase'


// CSS / SCSS IMPORTS
import 'normalize.css/normalize.css'
import './styles/styles.scss';


const store = configureStore()

const jsx = (
  <Provider store={store}>
      <AppRouter />
  </Provider>
  
)

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx,document.getElementById('root'));
    hasRendered = true;
  }
}

ReactDOM.render(<LoadingPage />,document.getElementById('root'));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid))
    store.dispatch(startSetExpenses()).then(() => {
      renderApp()
      if (history.location.pathname === '/') {
        console.log('Redirecting to dashboard')
      }
    })
  } else {
    store.dispatch(logout())
    renderApp()
    history.push('/')
  }
})


