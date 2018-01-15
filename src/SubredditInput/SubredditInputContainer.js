import React from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from "../fetchPosts/actions"


class SubredditInputContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            subreddit: 'popular'
        };
        this.handleSubredditChange = this.handleSubredditChange.bind(this);
        this.submitSubredditRefresh = this.submitSubredditRefresh.bind(this);
    }
    handleSubredditChange(ev) {
        this.setState({
            subreddit: ev.target.value
        });
    }
    submitSubredditRefresh(ev) {
        ev.preventDefault();
        if(!this.state.subreddit || this.state.subreddit.length < 2) return;
        this.props.dispatch(fetchPosts(this.state.subreddit));
    }
    componentDidMount() {
        this.props.dispatch(fetchPosts(this.state.subreddit));
    }
    render() {
        let {subreddit} = this.state;
        return (
            <form onSubmit={this.submitSubredditRefresh}>
               <input value={subreddit} onChange={this.handleSubredditChange} />
               <button type={'submit'}>Fetch posts</button>
            </form>
        )
    }
}

export default connect()(SubredditInputContainer);