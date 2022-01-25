import React, {useEffect, useState} from 'react'
import axios from "axios";

const API_URL = "http://localhost:3000";

function getPosts() {
    return axios.get(API_URL + '/posts.json').then((response) => response.data);
}

class Posts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            comments: []
        };
    }

    componentDidMount() {
        getPosts().then(response => {
            console.log(response)
            this.setState({
                posts: response
            });
            console.log(this.state.posts)
        });
    }

    render() {
        return (
            <div>
                {this.state.posts}
                {/*{this.state.posts.map((post) => {*/}
                {/*    return (*/}
                {/*        <div key={post.id}>*/}
                {/*            <h2>{post.title}</h2>*/}
                {/*            <div key={post.content.id}>*/}
                {/*                <p>{post.content.body}</p>*/}
                {/*                <p>{post.content.created_at}</p>*/}
                {/*            </div>*/}
                {/*            <p>{post.status}</p>*/}
                {/*            <a href="/posts/2">Show Post</a>*/}
                {/*        </div>*/}
                {/*    );*/}
                {/*})}*/}
            </div>
        )
    }
}

export default Posts;

