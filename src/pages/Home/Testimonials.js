import React from 'react';
import client1 from '../../assets/images/client1.jfif';
import client2 from '../../assets/images/client2.jpg';
import client3 from '../../assets/images/client3.jpg';
import Review from './Review';
const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Hayat Uzun',
            review: 'best service',
            location: 'Turkey',
            img: client1
        },
        {
            _id: 2,
            name: 'Nazli Yalmaz',
            review: 'Satisfied',
            location: 'canada',
            img: client2
        },
        {
            _id: 3,
            name: 'Ariana Grande',
            review: 'Very good',
            location: 'USA',
            img: client3
        },
    ];
    return (
        <section className='my-28'>
            <div className='flex justify-between'>
                <div>

                    <h2 className='text-4xl text-primary font-bold'>Experiences of our clients</h2>
                </div>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonials;