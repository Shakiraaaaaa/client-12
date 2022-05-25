import React from 'react';
import photo1 from '../../assets/images/photo-1.png';
import bg from '../../assets/images/background.jpg';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = ({ date, setDate }) => {

    return (
        <div style={{
            background: `url(${bg})`,
            backgroundSize: 'cover'
        }} className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={photo1} className="max-w-sm rounded-lg shadow-2xl" alt='Dentist Chair' />
                <div>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                </div>
            </div>

        </div>
    );
};

export default AppointmentBanner;