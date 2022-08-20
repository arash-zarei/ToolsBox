import React from 'react';

import styles from './Error.module.css'

const Error = () => {
    return (
        <div className={styles.error404}>
            <div className={styles.ErrorText}>
                <p><span>4</span><span>0</span><span>4</span></p>
            </div>
        </div>
    );
};

export default Error;