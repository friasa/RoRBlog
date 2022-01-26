import logo from './logo.svg';
import './App.css';
import axios from "axios"
import Posts from "./components/posts";
import {useEffect, useState} from 'react'
import posts from "./components/posts";

function App() {
    // const [posts, setPosts] = useState([]);
    //
    // useEffect(() => {
    //     let mounted = true;
    //     getPosts().then((items) => {
    //         if (mounted) {
    //             setPosts(items);
    //         }
    //     })
    //     return () => (mounted = false);
    // }, []);

    return (
    <div className="App">
        <h1>Hello</h1>
        <Posts/>
    </div>
    );
}

export default App;
