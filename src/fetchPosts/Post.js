import React from 'react';
import {connect} from 'react-redux';
import {fetchPostDetails} from "../postDetails/actions";

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.handleOpenPost = this.handleOpenPost.bind(this);
    }

    handleOpenPost(url) {
        this.props.dispatch(fetchPostDetails(url));
    }

    render() {
        let props = this.props;
        return (
            <div className={'individualPost'} onClick={() => this.handleOpenPost(`https://www.reddit.com${props.data.permalink}.json`)}>
                <div className="imageWrapper">
                    {props.data.url && props.data.url.indexOf('gfycat') !== -1
                        ? <img className="thumbnail" src={props.data.media.oembed.thumbnail_url} />
                        : <img className="thumbnail" src={props.data.url} onError={(e) => e.target.setAttribute("src", "logo.png")}/>
                    }
                </div>
                <div className="cardDetailsContainer">
                    <p className="postTitle">{props.data.title}</p>
                    <p className="score">score: {props.data.score}</p>
                </div>

            </div>
        );
    }
};

export default connect()(Post);