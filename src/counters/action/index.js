const AddCounterAction = () => {
    return (dispatch) => {
        dispatch({
            type: "ADD_COUNTER",

        })
    }
}
const MinusCounterAction = () => {
    return (dispatch) => {
        dispatch({
            type: "MINUS_COUNTER",

        })
    }
}
export { AddCounterAction, MinusCounterAction }