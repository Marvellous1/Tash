const initState={
    forums: [
        {id:'1',authorId: 'vT5B2LRtZNT6VqxUF25mOQ8DCq32', content: 'bcbbchbhzjbcj', createdAt: 1222222},
        {id:"2" ,authorId: 'xT5BtZNT6VqxUF25mOQ8DCq32', content: 'bcbbchbhzjbcj' , createdAt: 12226222},
        {id:"3" ,authorId: 'xT5tZNT6VqxUF25mOQ8DCq32', content: 'bcbbchbhzjbcj' , createdAt: 1223222},
        {id:'4',authorId: 'vT5B2LRtZNT6VqxUF25mOQ8DCq32', content: 'bcbbchbhzjbcj' , createdAt: 1222222},
        {id:'5' ,authorId: 'vT5B2LRtZNT6VqxUF25mOQ8DCq32', content: 'bcbbchbhzjbcj' , createdAt: 12242222},
        {id:"6" ,authorId: 'xT5tZNT6VqxUF25mOQ8DCq32', content: 'bcbbchbhzjbcj' , createdAt: 12222222}
    ]
}

const forumReducer =  (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_FORUM' :
            console.log('created forum', action.forum);
            console.log('stare', state)
            return state;
        case 'CREATE_FORUM_ERROR' :
            console.log('created forum error', action.err);
            return state;
        default:
            return state;      
    }

}

export default forumReducer;