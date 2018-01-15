import {REQUEST_POSTS, RECEIVE_POSTS, ERROR_POSTS} from "./actions";

export function posts(state = {isFetching: false, posts: [], error: false}, action) {
    switch(action.type) {
        case REQUEST_POSTS:
            return {
                ...state,
                isFetching: true,
                error: false
            };
        case RECEIVE_POSTS:
            return {
                ...state,
                isFetching: false,
                error: false,
                posts: action.posts
            };
        case ERROR_POSTS:
            return {
                ...state,
                isFetching: false,
                posts: [],
                error: true
            };
        default:
            return state;
    }
}