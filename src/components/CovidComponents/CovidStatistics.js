import React from 'react';

import styles from './CovidStatistics.module.css'

const CovidStatistics = ({image , newConfirmed , totalConfirmed , newDeaths , totalDeaths , newRecovered , totalRecovered}) => {
    return (
        <div className={styles.statistics}>
            <img src={image} alt="flag" />
            <span className={styles.date}>{new Date().toLocaleDateString('fa-IR')}</span>
            <div className={styles.status}>
                <div className={styles.confirmed}>
                    <div className={styles.new}>
                    <p>ابتلا جدید</p>
                    <p>{newConfirmed}</p>
                    </div>
                    <div className={styles.total}>
                    <p>کل ابتلا</p>
                    <p>{totalConfirmed}</p>
                    </div>
                </div>
                <div className={styles.deaths}>
                    <div className={styles.new}>
                    <p>فوتی جدید</p>
                    <p>{newDeaths}</p>
                    </div>
                    <div className={styles.total}>
                    <p>کل فوتی</p>
                    <p>{totalDeaths}</p>
                    </div>
                </div>
                <div className={styles.recovered}>
                    <div className={styles.new}>
                    <p>بهبود یافتگان جدید</p>
                    <p>{newRecovered}</p>
                    </div>
                    <div className={styles.total}>
                    <p>کل بهبود یافتگان</p>
                    <p>{totalRecovered}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default CovidStatistics;