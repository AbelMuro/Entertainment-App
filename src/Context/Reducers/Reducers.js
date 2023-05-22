export function searchReducer(state, action) {

    switch(action.type) {
        case 'set query':
            return action.query;
        case 'get query':
            return state;
        default:
            return state;
    }
}
