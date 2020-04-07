import React, { useEffect, useState } from 'react';
import './style.css';
import Card from '../UI/Card';
import blogPost from '../../data/blog.json';


/**
* @author
* @function BlogPost
**/

const BlogPost = (props) => {

    const [post, setPost] = useState({
        id: '',
        blogCategory: '',
        blogTitle: '',
        slug: '',
        postedOn: '',
        author: '',
        blogImage: '',
        blogText: '',
    });


    useEffect(() => {

        const post = blogPost.data.find(post => post.slug === props.match.params.postSlug);
        setPost(post);

    }, [post, props.match.params.postSlug]);

    /**
     * First time the component is render the image property make an error of ./undefine
     * so we make first time image null . and the set the image to any variable 
     * 
    */

    if (post.blogImage == '') return null;


    return (
        <div className="blogPost">
            <Card >
                <div className="blogHeader">
                    <span className="blogCategory">{post.blogCategory}</span>
                    <h1 className="postTitle">{post.blogTitle}</h1>
                    <span className="postedBy">posted on {post.postedOn} by {post.author} Blogging Tips</span>
                </div>

                <div className="blogPostImage">
                    <img src={require(`../../blogPostImages/${post.blogImage}`)} alt="post Image" />
                </div>

                <div className="postContent">
                    <h3>{post.blogTitle}</h3>
                    <p>{post.blogText}</p>
                </div>

            </Card>
        </div>
    )

}

export default BlogPost;

