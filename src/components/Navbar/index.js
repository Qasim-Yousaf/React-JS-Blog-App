import React, { useState } from 'react'
import './style.css';
import { NavLink } from 'react-router-dom';

/**
* @author
* @function Navbar
**/

const Navbar = (props) => {

    const [search, setSearch] = useState(false);
    const [searhItem, setSearhItem] = useState('');
    // const updateSearch = (e) => {
    //     setSearch(true);
    // }
    const CLASS_NAME = search === true ? 'txtInput active' : 'txtInput';

    const submitForm = e => {
        e.preventDefault();
        alert(searhItem);
        setSearhItem('');
    }
    return (
        <div className="navbar">

            <ul className="nabarMenu">

                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about-us">About Us</NavLink></li>
                <li><NavLink to="/contact-us">Contact Us</NavLink></li>
                <li><NavLink to="/post">Posts</NavLink></li>

            </ul>

            <div className="search">

                <form onSubmit={submitForm}>

                    <input type="text"
                        required
                        placeholder="Search Post"
                        className={CLASS_NAME}
                        value={searhItem}
                        onChange={VAL => setSearhItem(VAL.target.value)}
                    />

                    {/* <img onClick={updateSearch} className="searchIcon" src={require('../../assets/images/search.png')} alt="search" /> */}
                    <button type="submit">Search</button>
                </form>
            </div>
        </div>
    )

}

export default Navbar;