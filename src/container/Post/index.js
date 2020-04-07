import React from 'react';
import './style.css';
import Card from '../../components/UI/Card';
import SideBar from '../../components/sidebar';
import BlogPost from '../../components/BlogPost';

const Post = props => {
    return (
        <section className="container">
            <BlogPost {...props} />
            <SideBar />
        </section>
    );
}

export default Post;