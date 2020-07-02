import React from 'react';
import { Router, Route, Switch, useHistory } from 'react-router-dom'
// COMPONENTS
import ExpenseDashboardPage from './../components/ExpenseDashboardPage'
import CreateExpensePage from './../components/CreateExpensePage'
import EditExpensePage from './../components/EditExpensePage'
import HelpPage from './../components/HelpPage'
import NotFoundPage from './../components/NotFoundPage'
import LoginPage from './../components/LoginPage'
import PrivateRoute from './PrivateRoute'

import createHistory from "history/createBrowserHistory";

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}> 
    <div>
      <Switch>
        <Route path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
        <PrivateRoute path="/create" component={CreateExpensePage} />
        <PrivateRoute path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);
export default AppRouter