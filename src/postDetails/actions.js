import {errorPosts, receivePosts, requestPosts} from "../fetchPosts/actions";
import fetch from "cross-fetch";

export const CLOSE_POPUP = "CLOSE_POPUP";
export const REQUEST_POST_DETAILS = "REQUEST_POST_DETAILS";
export const RECEIVE_POST_DETAILS = "RECEIVE_POST_DETAILS";

export function requestPostDetails(url) {
    return {
        type: REQUEST_POST_DETAILS,
        url: url
    }
}

export function closepopup(){
    return {
        type: CLOSE_POPUP
    }
}

export function receivePostDetails(data) {
    return {
        type: RECEIVE_POST_DETAILS,
        data
    }
}

export function fetchPostDetails(url) {
    return dispatch => {
        dispatch(requestPostDetails(url));
        return fetch(url)
            .then(response => {
                if(!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json()
            })
            .then(json => {
                dispatch(receivePostDetails(json))
            }).catch(error => dispatch(errorPosts(error)));
    }
}