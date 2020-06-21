import React from 'react'
import { connect } from 'react-redux'
import selectExpenses from './../selectors/expenses'

import ExpenseListItem from './ExpenseListItem'


const ExpenseList = (props) => (
    <div>
        <h3>Expense List</h3>
        {props.expenses.map((expense) => {
            return <ExpenseListItem key={expense.id} {...expense}/>
        })}
    </div>
)

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseList)
