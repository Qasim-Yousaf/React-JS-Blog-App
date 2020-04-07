import React from 'react';
import './style.css';
import Card from '../../components/UI/Card';
import SideBar from '../../components/sidebar';

const Home = props => {

    const galleryHeight = '450';

    const galleryStyle = {
        height: galleryHeight + 'px',
        overflow: 'hidden'
    }

    const sideImageHeight = galleryHeight / 3;

    return (
        <div>
            <Card >
                <div className="galleryPost" style={galleryStyle}>

                    <section className="BigWraper" style={{ width: '70%' }}>
                        <div>
                            <img src={require('../../blogPostImages/memories-from.jpg')} alt="Author Image" />
                        </div>
                    </section>

                    <section className="sideBarWraper" style={{ width: '30%' }}>

                        <div style={{ height: `${sideImageHeight}px` }}>
                            <img src={require('../../blogPostImages/memories-from.jpg')} alt="Author Image" />
                        </div>

                        <div style={{ height: `${sideImageHeight}px` }}>
                            <img src={require('../../blogPostImages/affection-baby-baby-girl-beautiful-377058.jpg')} alt="Author Image" />
                        </div>

                        <div style={{ height: `${sideImageHeight}px` }}>
                            <img src={require('../../blogPostImages/memories-from.jpg')} alt="Author Image" />
                        </div>

                    </section>

                </div>

            </Card>


            <section className="HomeContainer" >
                <div style={{ width: '70%' }}>

                    <Card style={{ marginBottom: '30px' }}>
                        <div className="postImageWrapper">
                            <img src={require('../../blogPostImages/affection-baby-baby-girl-beautiful-377058.jpg')} alt="" />
                        </div>
                        <div className="postContainer">
                            <span className="postCategory">Featured</span>
                            <h1 className="postTitle">Fitness Mantra To Live Fit Life</h1>
                            <span className="postedBy">posted on July 21, 2016 by Faiz Khan Blogging Tips</span>
                            <p>fitness-blog-post.jpggiven the he one third rule fruit, very. Fill. Seed give firmament doesn't land, isn't lesser creeping. Abundantly you called signs waters yielding he cattle greater were evening. Sixth make moving the multiply dominion creature beast made subdue lights him.</p>

                        </div>

                        <div className="readMore">
                            <button type="button" className="btn btn-dark btn-lg btn-block">Read More</button>
                        </div>
                    </Card>

                    <Card style={{ marginBottom: '30px' }}>
                        <div className="postImageWrapper">
                            <img src={require('../../blogPostImages/memories-from.jpg')} alt="" />
                        </div>
                        <div className="postContainer">
                            <span className="postCategory">Featured</span>
                            <h1 className="postTitle">Fitness Mantra To Live Fit Life</h1>
                            <span className="postedBy">posted on July 21, 2016 by Faiz Khan Blogging Tips</span>
                            <p>fitness-blog-post.jpggiven the he one third rule fruit, very. Fill. Seed give firmament doesn't land, isn't lesser creeping. Abundantly you called signs waters yielding he cattle greater were evening. Sixth make moving the multiply dominion creature beast made subdue lights him.</p>

                        </div>

                        <div className="readMore">
                            <button type="button" className="btn btn-dark btn-lg btn-block">Read More</button>
                        </div>
                    </Card>


                </div>

                <SideBar />

            </section>





        </div>
    );
}

export default Home;