import {posts} from "./fetchPosts/reducer";
import {currentOpenPost} from "./postDetails/reducer";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    posts,
    currentOpenPost
});
export default rootReducer;