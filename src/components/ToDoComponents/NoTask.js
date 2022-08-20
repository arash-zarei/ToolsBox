import React from 'react';

import image from '../../images/noTask.webp'

const NoTask = () => {
    return (
        <div style={{textAlign: 'center'}}>
            <img src={image} alt="noTask..." style={{width: '100%'}} />
            <h2>وقت استراحته...</h2>
        </div>
    );
};

export default NoTask;