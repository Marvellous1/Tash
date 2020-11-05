const initState={
    posts: [
        {id:'1', title: 'vT5B2LRtZNT6VqxUF25mOQ8DCq32', body: 'bcbbchbhzjbcj', createdAt: 1222222},
        {id:"2" , title: 'xT5BtZNT6VqxUF25mOQ8DCq32', body: 'bcbbchbhzjbcj' , createdAt: 12226222},
        {id:"3" , title: 'xT5tZNT6VqxUF25mOQ8DCq32', body: 'bcbbchbhzjbcj' , createdAt: 1223222},
        {id:'4', title: 'vT5B2LRtZNT6VqxUF25mOQ8DCq32', body: 'bcbbchbhzjbcj' , createdAt: 1222222},
        {id:'5' , title: 'vT5B2LRtZNT6VqxUF25mOQ8DCq32', body: 'bcbbchbhzjbcj' , createdAt: 12242222},
        {id:"6" , title: 'xT5tZNT6VqxUF25mOQ8DCq32', body: 'bcbbchbhzjbcj' , createdAt: 12222222}
    ]
}

const postReducer =  (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_POST' :
            console.log('created post', action.post);
            console.log('state post', state)
            return state;
        case 'CREATE_POST_ERROR' :
            console.log('created post error', action.err);
            return state;
        default:
            return state;      
    }

}

export default postReducer;