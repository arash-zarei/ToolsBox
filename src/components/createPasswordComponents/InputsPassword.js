import React from 'react';

import styles from './InputsPassword.module.css'
const InputsPassword = React.forwardRef(({value , min , placeholder , type , label , change} , ref)=>{
    return (
        <div className={styles.item}>
          <label>{label}</label>
          <input onChange={change} ref={ref} value={value} min={min} placeholder={placeholder} type={type}/>
        </div>
    );
})  



export default InputsPassword;