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
            const newBookmarks = [...bookmarks, action.bookmark];
            const JSONbookmarks = JSON.stringify(newBookmarks)
            localStorage.setItem('movie bookmarks', JSONbookmarks);
            return newBookmarks;
        case 'remove bookmark':
            let storedBookmarks = JSON.parse(localStorage.getItem('bookmarks'));
            storedBookmarks = storedBookmarks.filter((bookmark) => {
                return bookmark === action.bookmark ? false : true;
            })
            const JSONstoredBookmarks = JSON.stringify(storedBookmarks);
            localStorage.setItem('movie bookmarks', JSONstoredBookmarks);
            return storedBookmarks;
        default:
            return state;
    }
}

