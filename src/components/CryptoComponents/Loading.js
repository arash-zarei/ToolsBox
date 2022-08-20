import React from 'react';

import loading from './Gifs/loading.gif'

const Loading = () => {
    return (
        <div style={{textAlign: 'center'}}>
            <img src={loading} alt="loading" style={{width: '100px'}} />
        </div>
    );
};

export default Loading;