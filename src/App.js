
import React from 'react';
import './App.css';
import Home from './container/Home/index'
import Header from './components/Header'
import Hero from './components/Hero'
import ContactUs from './container/ContactUs';
import AboutUs from './container/AboutUs';
import Post from './container/Post';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {

    return (

        <Router>
            <div className="fullContainer">
                <div className="App">

                    {/* these components are include in all the pages  */}

                    <Header />
                    <Hero />

                    <Route path="/" exact component={Home} />
                    <Route path="/about-us" exact component={AboutUs} />
                    <Route path="/contact-us" exact component={ContactUs} />
                    <Route path="/post/:postSlug" exact component={Post} />


                </div>
            </div>

        </Router>

    );
}

export default App;

