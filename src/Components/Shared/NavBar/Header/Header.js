import React from 'react';
import './Header.css';
import reel from '../../../../Reel/All Scene_4.mp4';

const Header = () => {
    return (
        <div className='sect'>
            <div className='para-1'>
                <h1 className='text-6xl font-bold digital' style={{ color: 'rgb(212,175,55)' }}>Digital Marketing Agency</h1>
                <p className='partner' style={{ color: 'rgb(212,175,55)' }}>Partner with the GCC region's top digital agency for luxury, retail, and public sectors and experience the full power of ASTUDIO 360-degree digital marketing services. We'll build and manage your online brand presence, captivate your audience, and help you reach new markets.</p>
            </div>

            <div className='para-2'>
                <video autoPlay loop muted>
                    <source src={reel} type="video/mp4" />
                </video>
            </div>
        </div>
    );
};

export default Header;