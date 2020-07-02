import React from 'react';
import { connect } from 'react-redux'

import ExpenseForm from './ExpenseForm'
import { startAddExpense } from './../actions/expenses'

const CreateExpensePage = (props) => (
    <div>
        <div className='page-header'>
            <div className='container'>
                <h1 className='page-header__title'>Add Expense</h1>
            </div>
        </div>
        <div className='container'>
            <ExpenseForm 
                onSubmit={(expense) => {
                    props.dispatch(startAddExpense(expense))
                    props.history.push('/')
                }}
            />
        </div>
    </div>
)

export default connect()(CreateExpensePage)