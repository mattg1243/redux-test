const counterReducer = (state = 0, action ) => {
    switch (action.type) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return 0;
        default:
            return 7;
    }   
}

export default counterReducer;