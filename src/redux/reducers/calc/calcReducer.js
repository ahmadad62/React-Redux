const initialState = {
    adad: 0,
    mahsoolat: 0

}

export const calcReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT_ADAD':
            return {
                ...state,
                adad: state.adad + 1
            }
        case 'DECREMENT_ADAD':
            return {
                ...state,
                adad: state.adad - 1

            }
        default:
            return state
    };

}