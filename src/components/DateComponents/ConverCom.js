import React from 'react';


import styles from './ConvertCom.module.css'

const ConverCom = ({changeHandler, onclick, dateType}) => {



    return (
        <>
            <div className={styles.convert}>
                <div className={styles.inputField}>
                    <label>سال</label>
                    <input name='year' onChange={changeHandler} placeholder='xxxx' maxLength={4} type="text" />
                </div>
                <div className={styles.inputField}>
                    <label>ماه</label>
                    <input name='mount' onChange={changeHandler} placeholder='xx' maxLength={2} type="text" />
                </div>
                <div className={styles.inputField}>
                    <label>روز</label>
                    <input name='day' onChange={changeHandler} placeholder='xx' maxLength={2} type="text" />
                </div>
            </div>

            <div className={styles.btnContainer}>
                <button onClick={onclick} className={styles.btnConverter}>تبدیل</button>
            </div>

            <div className={styles.result}>
                <span>{!dateType.length ? '****/**/**' : `${dateType[0]}/${dateType[1]}/${dateType[2]}`}</span>
            </div>

        </>
    );
};

export default ConverCom;