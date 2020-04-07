import React from 'react';
import './style.css';
import Card from '../UI/Card';
import blogPost from '../../data/blog.json';
import { NavLink } from 'react-router-dom';


/**
* @author
* @function SideBar
**/

const SideBar = (props) => {
    const posts = blogPost.data;

    return (
        <div className="sidebar">
            <Card style={{ marginBottom: '20px' }} >
                <div className="cardHeader">
                    <span>About us</span>
                </div>

                <div className="imageContainer">
                    <img src={require('../../blogPostImages/QasimYousaf.png')} alt="Author Image" />
                </div>

                <div className="cardBody">
                    <p className="personalBio">My name is Muhammad Qasim Yousaf.
                     I am a software Developer and i have specilization in fontend & backend. I love to write Blogs</p>
                </div>
            </Card>

            <Card style={{ marginBottom: '20px' }}>
                <div className="cardHeader">
                    <span>Social Network</span>
                </div>
            </Card>

            <Card style={{ marginBottom: '20px' }}>
                <div className="cardHeader">
                    <span>Recent Post</span>
                </div>

                <div className="recentPosts">
                    {
                        posts.map((post, index) => {
                            return (

                                <div className="rectPost">
                                    <NavLink key={post.id.toString()} to={`/post/${post.slug}`}>
                                        <h3>{post.blogTitle}</h3>
                                    </NavLink>
                                    <span className="postDate">
                                        <img src={require('../../blogPostImages/date-20.png')} /> {post.postedOn}</span>
                                </div>


                            );
                        })
                    }
                </div>
            </Card>
        </div >
    )

}

export default SideBar;