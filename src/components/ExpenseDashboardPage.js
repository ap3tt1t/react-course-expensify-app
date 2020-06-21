import React from 'react';

import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'
import ExpenseSummary from './ExpensesSummary'

const ExpenseDashboardPage = () => (
<div>
    <h2>Home</h2>
    <ExpenseSummary />
    <ExpenseListFilters />
    <ExpenseList />
</div>
)

export default ExpenseDashboardPage