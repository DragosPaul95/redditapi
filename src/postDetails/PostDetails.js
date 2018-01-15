import React from 'react';
import {connect} from 'react-redux';
import {closepopup} from "./actions";

class PostDetails extends React.Component {
    constructor(props) {
        super(props);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }
    handleClickOutside(ev) {
        if(ev.currentTarget === ev.target) {
            this.props.dispatch(closepopup());
        }
    }
    render() {
        let firstPost = this.props.data[0].data.children[0].data;
        let comments = this.props.data[1].data.children;
        console.log(comments);
        return (
            <div id="postWrapperNode" className="postDetailsWrapper" onClick={this.handleClickOutside}>
                <div className="postDetailsInner">
                    <div className="threadStart">
                        <p>{firstPost.title}</p>
                        <p>{firstPost.selftext}</p>
                    </div>
                    <hr/>
                    <div className="postDetailsComments">
                        {comments.map((comment,index) => (
                                    <div key={index} className="comment">
                                        <p><strong>{comment.data.author}</strong></p>
                                        <p>{comment.data.body}</p>
                                    </div>
                                )
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
};
export default connect()(PostDetails);