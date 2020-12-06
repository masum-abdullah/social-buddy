import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./postDetail.css"
import Comments from '../comments/Comments';
import FakeImageData from '../FakeData/FakeImageData';


const PostDetails = () => {

    const [post, setPost] = useState([]) 
    const {id} = useParams();

    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data))
    }, []);


    const [comments, setComments] = useState([]);

    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setComments(data))
    }, []);
    for(let i=0; i<comments.length; i++){
        let comment = comments[i];
        comment["img"] = FakeImageData[i].img;
    }
    
    return (
        <div>
            <div className="postDetail">
                <div className="main-post">
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            </div>
            <div>
                <div className='cmt-headline'><h4>All Comments({comments.length})</h4></div>
                {
                    comments.map(cmt => <Comments comment={cmt} key={cmt.id}></Comments>)
                }
            </div>
        </div>
    );
};

export default PostDetails;