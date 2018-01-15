import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import FetchPostsContainer from './fetchPosts/FetchPostsContainer'
import SubredditInputContainer from './SubredditInput/SubredditInputContainer'

const store = configureStore();

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <SubredditInputContainer />
                    <FetchPostsContainer />
                </div>
            </Provider>
        )
    }
}