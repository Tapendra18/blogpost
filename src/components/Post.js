import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './post.css';
import {useNavigate} from "react-router-dom";

const Post = () => {
    const [posts, setpost] = useState([]);
    const navigate = useNavigate();

    // const headers = {
    //     headers:
    //         { 'Authorization': `token ${token}` }
    // }
    useEffect(() => {
        axios.get('http://localhost:5000/api/post')
            .then((response) => {
                if (response.data) {
                    setpost(response.data.data);
                }
            })
    }, []);

    console.log(posts, "rrrrrr");

    const handleClick = (e) => {
        e.preventDefault();
        navigate('addpost');
    }
    // if (!posts) return null;
    return (

        <>
        
            <div className="app">
                <div style={{
                    display: "flex",
                    justifyContent: "space-around",
                    marginTop: "10px",
                    alignItems: "center"
                }}>
                    <h2>All Posts 📫</h2>
                    <button className='btn' onClick={handleClick} >Add Post</button>
                </div>

                {posts && posts?.map((item) => (

                    <div className="post-card" key={item.id} style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                    }}>
                        <h2>{item.title}</h2>
                        <h2 className="post-title">{item.description}</h2>
                        <p className="post-body">{item.author}</p>
                        <p className="post-body">{item.text}</p>
                        <img src={item.thumbnail} alt={item.thumbnail} />
                        <img src={item.featured} alt={item.featured}/>
                        <div className="button">
                            <button className='btn' style={{
                                margin: "5px"
                            }}>edit post</button>
                            <button className='btn'>delete post</button>
                        </div>
                    </div>
                )
                )}
            </div>
        </>
    )
}

export default Post