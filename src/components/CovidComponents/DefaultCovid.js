import React from 'react';

import styles from './DefaultCovid.module.css'
import corona from '../../images/patient.png'


const DefaultCovid = () => {
    return (
        <div className={styles.bgCovid}> 
            <img className={styles.image} src={corona} alt='covid' />
        </div>
    );
};

export default DefaultCovid;