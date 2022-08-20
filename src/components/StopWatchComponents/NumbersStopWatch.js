import React from 'react';

import styles from './NumbersStopWatch.module.css'


const DisplayComponent = ({time}) => {
    const h = () => {
       if(time.h !== 0){
           return '';
          }else {
           return <div className={styles.numberBox}>{(time.h >= 10)? time.h : "0"+ time.h}</div>;
       }
    }
    return (
        <div className={styles.boxs}>
       <div className={styles.numberBox}>{(time.ms >= 10)? time.ms : "0"+ time.ms}</div>
       <span>:</span>
       <div className={styles.numberBox}>{(time.s >= 10)? time.s : "0"+ time.s}</div>
       <span>:</span>
       <div className={styles.numberBox}>{(time.m >= 10)? time.m : "0"+ time.m}</div>
       <span>:</span>
       {h()}&nbsp;&nbsp;
    </div>
  );
}

export default DisplayComponent;