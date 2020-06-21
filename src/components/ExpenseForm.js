import React from 'react'
import moment from 'moment'

import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'

const now = moment()
console.log(now.format())

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            description: props.expense ? props.expense.description : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            note: props.expense ? props.expense.note : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        }
    }
    onDescriptionChange = (e) => {
        const description = e.target.value
        this.setState(() => ({ description }))
    }
    onNoteChange = (e) => {
        const note = e.target.value
        this.setState(() => ({ note }))
    }
    onAmountChange = (e) => {
        const amount = e.target.value
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }))
        }
        
    }
    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }))
        }
        
    }
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused}))
    }
    onSubmit = (e) => {
        e.preventDefault()
        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({ error: 'Please provide description and amount'}))
        } else {
            this.setState(() => ({ error: ''}))
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    Description: <input
                    type='text'
                    placeholder='Description'
                    autoFocus
                    value={this.state.description}
                    onChange={this.onDescriptionChange}
                    />
                    <br />
                    Amount: <input
                    type='number'
                    placeholder='Amount'
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                    />
                    <br />
                    Date: <SingleDatePicker 
                    date={this.state.createdAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    displayFormat="DD/MM/YYYY"
                    />
                    <br />
                    Notes: <textarea
                    placeholder='Add a note for your expense (optional)'
                    onChange={this.onNoteChange}
                    value={this.state.note}
                    >
                    </textarea>
                    <br />
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}
