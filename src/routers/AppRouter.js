import React from 'react';
import { BrowserRouter, Router, Route, Switch, useHistory } from 'react-router-dom'
// COMPONENTS
import Header from './../components/partials/Header'
import ExpenseDashboardPage from './../components/ExpenseDashboardPage'
import CreateExpensePage from './../components/CreateExpensePage'
import EditExpensePage from './../components/EditExpensePage'
import HelpPage from './../components/HelpPage'
import NotFoundPage from './../components/NotFoundPage'
import LoginPage from './../components/LoginPage'

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={LoginPage} exact={true} />
        <Route path="/dashboard" component={ExpenseDashboardPage} />
        <Route path="/create" component={CreateExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);
export default AppRouter