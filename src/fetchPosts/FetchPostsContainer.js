import React from 'react';
import {connect} from 'react-redux';
import Post from './Post';
import "./Posts.css";
import PostDetails from "../postDetails/PostDetails";

function mapStateToProps(state) {
    return {
        isFetching: state.posts.isFetching,
        posts: state.posts.posts,
        error: state.posts.error,
        showPopup: state.currentOpenPost.showPopup,
        currentPost: state.currentOpenPost
    }
}

class FetchPostsContainer extends React.Component {

    render() {
        if(this.props.isFetching) {
            return <div>loading...</div>
        }
        else if(this.props.error) {
            return <div>no posts to show</div>
        }
        else return (
            <div className={'postsWrapper'}>
                {this.props.posts.map((post, index) => {return <Post key={index} {...post}/>})}
                {this.props.showPopup? <PostDetails {...this.props.currentPost}/> : ''}
            </div>
        )
    }
}

export default connect(mapStateToProps)(FetchPostsContainer);