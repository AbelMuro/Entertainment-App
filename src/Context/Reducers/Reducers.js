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

export function bookmarkReducer(state, action) {
    const bookmarks = state;

    switch(action.type){
        case 'add bookmark':
            return [...bookmarks, action.bookmark];
        case 'remove bookmark':
            return bookmarks.filter((bookmark) => {
                 return bookmark === action.bookmark ? false : true;
            })
        default:
            return state;
    }
}