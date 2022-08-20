import React from 'react';

import styles from './BtnStopWatch.module.css'


const BtnComponent = ({status , start , stop , reset , resume}) => {
  return (
    <div className={styles.boxBtn}>
      {(status === 0)? 
        <button className={styles.start}
        onClick={start}>شروع</button> : ""
      }

      {(status === 1)? 
        <div>
          <button className={styles.stop}
                  onClick={stop}>ایست</button>
          <button className={styles.reset}
                  onClick={reset}>از اول</button>
        </div> : ""
      }

     {(status === 2)? 
        <div>
          <button className={styles.resume}
                  onClick={resume}>ادامه</button>
          <button className={styles.reset}
                  onClick={reset}>از اول</button>
        </div> : ""
      }
     
    </div>
  );
}

export default BtnComponent;