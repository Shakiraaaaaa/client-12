import React from 'react';
import notfound from '../../assets/images/notfound.jpg'


const Notfound = () => {
    return (
        <div>
            <h1>The page you are looking for is not found</h1>
            <img src={notfound} alt="" />

        </div>
    );
};

export default Notfound;