import React from 'react';

import styles from './LengthPassword.module.css'

const LengthPassword = ({changeLength , length}) => {
    return (
        <div className={styles.item}>
            <p>تعداد ارقام؟</p>
            <span>
            <span onClick={changeLength} className={styles.up}></span>
            <span className={styles.showLength}>{length}</span>
            <span id={length <= 4 ? styles.disable : ''} onClick={changeLength} className={styles.down}></span>
            </span>
        </div>
    );
};

export default LengthPassword;