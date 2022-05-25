import React from 'react';
import photo1 from '../../assets/images/photo-1.png'
import PrimaryButton from '../Shared/PrimaryButton';

const Banner = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={photo1} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Capture your beautiful moments</h1>
                    <p className="py-6"> "It's not enough to just own a camera. Everyone owns a camera. To be a photographer, you must understand, appreciate, and harness the power you hold!"</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;