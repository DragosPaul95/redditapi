import {REQUEST_POST_DETAILS, RECEIVE_POST_DETAILS, CLOSE_POPUP} from "./actions";

export function currentOpenPost(state = {loading: false, showPopup: false, data: []}, action) {
    switch (action.type) {
        case REQUEST_POST_DETAILS: {
            return {
                ...state,
                loading: true,
                showPopup: false
            }
        }
        case RECEIVE_POST_DETAILS:
            return {
                ...state,
                loading: false,
                showPopup: true,
                data: action.data
            };
        case CLOSE_POPUP:
            return {
                ...state,
                showPopup: false
            };
        default:
            return state;
    }
}