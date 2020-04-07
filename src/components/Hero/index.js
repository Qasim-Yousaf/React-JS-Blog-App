import React from 'react';
import './style.css';
import Card from '../UI/Card';
import Logo from '../Logo';
import Navbar from '../Navbar'

const Hero = (props) => {
    return (
        <div>
            {/* here the card is higher level component 
            and all the things inside the card is there childern  */}
            <Card>
                <div style={{ padding: '50px 0px' }}>
                    <Logo />
                </div>
                <Navbar />

            </Card>
        </div>
    );
}

export default Hero;