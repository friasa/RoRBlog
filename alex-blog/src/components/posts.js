import React, {useEffect, useState} from 'react'
import axios from "axios";
import Post from "./post";
import {Routes, Route } from 'react-router-dom';

const API_URL = "http://localhost:3000";

class Posts extends React.Component {

    async getPosts() {
        return await axios
            .get(API_URL + '/posts.json')
            .then((response) => response.data)
            .catch(function(error) {
                console.log(error);
            }
        );
    }

    constructor() {
        super();
        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        if (this.state.posts.length === 0) {
            this.getPosts().then(response => {
                this.setState({
                    posts: response
                });
            });
        }
    }

    render() {
        return (
            <div>
                {this.state.posts.length > 0 && this.state.posts.map((post) => {
                    return (
                        <div key={post.id}>
                            <h2>{post.title}</h2>
                            <div key={post.content.id}>
                                <p>{post.content.body}</p>
                                <p>{post.content.created_at}</p>
                            </div>
                            <p>{post.status}</p>
                            {/*<Post post={post}/>Show Post*/}
                        </div>
                    );
                })}
            </div>
        )
    }
}

export default Posts;

