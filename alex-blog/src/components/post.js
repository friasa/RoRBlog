import React, {useEffect, useState} from 'react'
import axios from "axios";

const API_URL = "http://localhost:3000";

class Posts extends React.Component {

    async getPost(post) {
        return await axios
            .get(API_URL + '/post' + post + '.json')
            .then((response) => response.data)
            .catch(function(error) {
                    console.log(error);
                }
            );
    }

    async getComments(post) {
        return await axios
            .get(API_URL + '/post' + post + '/comments.json')
            .then((response) => response.data)
            .catch(function(error) {
                    console.log(error);
                }
            );
    }

    constructor(props) {
        super(props);
        this.state = {
            post: {},
            comments: []
        };
    }

    componentDidMount() {
        if (this.state.posts.length === 0) {
            this.getPosts(this.props).then(response => {
                this.setState({
                    post: response
                });
            });
        }

        if (this.state.comments.length === 0) {
            this.getComments(this.props).then(response => {
                this.setState({
                    comments: response
                });
            });
        }
    }

    render() {
        return (
            <div>
                return (
                    <div key={this.state.post.id}>
                        <h2>{this.state.post.title}</h2>
                        <div key={this.state.post.content.id}>
                            <p>{this.state.post.content.body}</p>
                            <p>{this.state.post.content.created_at}</p>
                        </div>
                        <p>{this.state.post.status}</p>
                    </div>
                    );
                })}
            </div>
        )
    }
}

export default Posts;

