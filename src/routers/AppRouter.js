import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom'

// COMPONENTS
import Header from './../components/partials/Header'
import ExpenseDashboardPage from './../components/ExpenseDashboardPage'
import CreateExpensePage from './../components/CreateExpensePage'
import EditExpensePage from './../components/EditExpensePage'
import HelpPage from './../components/HelpPage'
import NotFoundPage from './../components/NotFoundPage'


const AppRouter = () => (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' component={ExpenseDashboardPage} exact/>
        <Route path='/create' component={CreateExpensePage}/>
        <Route path='/edit/:id' component={EditExpensePage}/>
        <Route path='/help' component={HelpPage}/>
        <Route component={NotFoundPage}/>
      </Switch>
    </BrowserRouter>
)

export default AppRouter