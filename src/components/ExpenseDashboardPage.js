import React from 'react';

import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'

const ExpenseDashboardPage = () => (
<div>
    <h4>Home</h4>
    <ExpenseListFilters />
    <ExpenseList />
</div>
)

export default ExpenseDashboardPage