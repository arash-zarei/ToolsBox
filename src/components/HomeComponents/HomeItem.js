import React from 'react';

import styles from './HomeItem.module.css'


const HomeItem = (props)=> {
        return (
            <div className={styles.item}>
                <img alt='img' src={props.image} />
                <p>{props.title}</p>
            </div>
        );
}

export default HomeItem;