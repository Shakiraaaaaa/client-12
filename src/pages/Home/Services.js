import React from 'react';
import photography1 from '../../assets/icons/photography1.png'
import photography2 from '../../assets/icons/photography2.png'
import photography3 from '../../assets/icons/photography3.png'
import Service from './Service';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Bridal photoshoot',
            description: '',
            img: photography1
        },
        {
            _id: 2,
            name: 'Food Photography',
            description: '',
            img: photography2
        },
        {
            _id: 3,
            name: 'Wedding Photoshoot',
            description: '',
            img: photography3
        },
    ];
    return (
        <div className='my-28'>
            <div className='text-center'>

                <h2 className='text-primary  text-6xl font-bold uppercase'>Services We Provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;