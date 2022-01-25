import React, {useEffect, useState} from 'react'
import axios from "axios";

const API_URL = "http://localhost:3000";

function getPost(post) {
    return axios.get(API_URL + '/post/' + post.id + '.json').then((response) => response.data);
}

function getComments(post) {
    return axios.get(API_URL + '/post/' + post.id + '/comments.json').then((response) => response.data);
}

function Post(props) {
    const [post, setPost] = useState([]);

    useEffect(() => {
        let mounted = true;
        getPost(props.post).then((items) => {
            if (mounted) {
                setPost(items);
            }
        })
        return () => (mounted = false);
    }, []);

    return (
        <div>
            {post.map((post) => {
                return (
                    <div key={post.id}>
                        <h2>{post.title}</h2>
                        <div key={post.content.id}>
                            <p>{post.content.body}</p>
                            <p>{post.content.created_at}</p>
                        </div>
                        <p>{post.status}</p>
                    </div>
                );
            })}
        </div>
    )
}

export default Post;

