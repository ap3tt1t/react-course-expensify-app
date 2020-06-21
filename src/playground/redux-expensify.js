import { createStore, combineReducers } from 'redux'
import { v4 as uuid } from 'uuid'

// ADD_EXPENSE
const addExpense = (
    { description = '', note = '', amount = 0, createdAt = 0 }
    ) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})
// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id, 
    updates
})

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})

const sortByDate = () => ({
    type: 'SET_BY_DATE'
})
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})

const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})

const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})

// EXPENSES REDUCER
const expensesReducerDefaultState = []
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ]
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id)
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense
                }
            })
        default:
            return state
    }
}   

// Filters reducer:
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}
const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default: 
            return state
    }
}


// GET VISIBLE EXPENSES

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())

        return startDateMatch && endDateMatch && textMatch
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.created ? 1 : -1
        }
        if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1
        }
    })
}

// STORE CREATION
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
)

store.subscribe(() => {
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses)
})

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: 1000 }))
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: -1000 }))

// store.dispatch(removeExpense({  id: expenseOne.expense.id }))
// store.dispatch(editExpense(expenseTwo.id, { amount: 500 }))

// store.dispatch(setTextFilter('rent'))
// store.dispatch(setTextFilter(''))



const demoState = {
    expense: [
        {
            id: 'qwey8u08y23q0',
            description: 'January Rent',
            note: 'This was the final payment for the address',
            amount: 54500,
            createdAt: 0
        }
    ], filters: {
        text: 'rent',
        sortBy: 'date', // date or amount
        startDate: undefined,
        endDate: undefined
    }
}

const user = {
    name: 'Jen',
    age: 24
}
console.log({...user})