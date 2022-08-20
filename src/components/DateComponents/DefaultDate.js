import React from 'react';

import styles from './DefaultDate.module.css'
import convert from '../../images/convert.png'


const DefaultDate = () => {
    return (
        <div className={styles.bgDate}> 
            <img className={styles.image} src={convert} alt='covid' />
        </div>
    );
};

export default DefaultDate;