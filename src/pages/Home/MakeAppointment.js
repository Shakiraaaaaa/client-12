import React from 'react';
import ladyPhotographer from '../../assets/images/ladyPhotographer-removebg-preview.png';
import background from '../../assets/images/background.jpg';
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${background})`
        }}
            className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={ladyPhotographer} alt="" />
            </div>
            <div className='flex-1'>
                <h3 className='text-xl text-accent font-bold'>Booking</h3>
                <h2 className='text-3xl text-accent font-bold'>Book Early to Capture Your Moments</h2>
                <p className='text-dark font-bold'>Photography is a way of feeling, of touching, of loving. What you have caught on film is captured forever… It remembers little things, long after you have forgotten everything.</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;