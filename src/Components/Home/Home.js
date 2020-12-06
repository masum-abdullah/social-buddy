import React, { useEffect, useState } from 'react';
import Posts from '../posts/Posts';

const Home = () => {
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/posts/`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPosts(data))
    }, []);
    return (
        <div className="post">
            {
                posts.map(pst => <Posts key={pst.id} post={pst}></Posts>)
            }
        </div>
    );
};

export default Home;