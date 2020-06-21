import { createStore } from 'redux'

// Action Generators
const incrementCount = () => ({
    type: 'INCREMENT'
})


const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
        case "INCREMENT": 
            return {
                count: state.count + 1
            }
        case "DECREMENT": 
            return {
                count: state.count - 1
            }
        case "RESET":
            return {
                count: 0
            }
        default: 
            return state
    }
})
console.log(store.getState())

store.subscribe(() => {
    console.log(store.getState())
})

// increment
store.dispatch({
    type: 'INCREMENT'
})
store.dispatch({
    type: 'DECREMENT'
})
store.dispatch({
    type: 'RESET'
})



console.log(store.getState())

