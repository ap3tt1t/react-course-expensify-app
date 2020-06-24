import React from 'react';
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { startEditExpense, startRemoveExpense } from './../actions/expenses'


const EditExpensePage = (props) => {
    console.log(props)
    const id = props.match.params.id
    return (
        <div>
        <h2>Edit Expense</h2>
            <ExpenseForm 
                expense={props.expense}
                onSubmit={(expense) => {
                    props.dispatch(startEditExpense(id, expense))
                    props.history.push('/')
                }}
            />
            <button onClick={() => {
                props.dispatch(startRemoveExpense({id}))
                props.history.push('/')
            }}>Remove</button>
        </div>
        
    )
}

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    }
}

export default connect(mapStateToProps)(EditExpensePage)