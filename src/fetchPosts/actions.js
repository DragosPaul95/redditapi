import fetch from 'cross-fetch';
export const REQUEST_POSTS = "REQUEST_POSTS";
export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const ERROR_POSTS = "ERROR_POSTS";

export function requestPosts(subreddit) {
    return {
        type: REQUEST_POSTS,
        subreddit: subreddit
    }
}

export function receivePosts(posts) {
    return {
        type: RECEIVE_POSTS,
        posts
    }
}

export function errorPosts(error) {
    return {
        type: ERROR_POSTS,
        error
    }
}

export function fetchPosts(subreddit) {
    return dispatch => {
        dispatch(requestPosts(subreddit));
        return fetch(`https://www.reddit.com/r/${subreddit}/.json`)
            .then(response => {
                if(!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json()
            })
            .then(json => {
                if(json.data) {
                    let posts = json.data.children.map(post => post);
                    dispatch(receivePosts(posts))
                }
            }).catch(error => dispatch(errorPosts(error)));
    }
}