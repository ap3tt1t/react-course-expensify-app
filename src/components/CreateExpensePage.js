import React from 'react';
import { connect } from 'react-redux'
import { addExpense } from './../actions/expenses'

import ExpenseForm from './ExpenseForm'

const CreateExpensePage = (props) => (
<div>
    <h2>Create a new Expense</h2>
    <ExpenseForm 
        onSubmit={(expense) => {
            props.dispatch(addExpense(expense))
            props.history.push('/')
        }}
    />
</div>
)

export default connect()(CreateExpensePage)