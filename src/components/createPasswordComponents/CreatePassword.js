import React, { useEffect, useState, useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import randomatic from "randomatic";
import styles from "./CreatePassword.module.css";
import InputsPassword from "./InputsPassword";
import LengthPassword from "./LengthPassword";

const CreatePassword = () => {

  const [length, setLength] = useState(4);
  const [uperCase, setUperCase] = useState(false);
  const [lowerCase, setLowerCase] = useState(false);
  const [number, setNumber] = useState(false);
  const [unic, setUnic] = useState(false);
  const uperCaseValue = useRef(null)
  const lowerCaseValue = useRef(null)
  const numberValue = useRef(null)
  const unicValue = useRef(null)
  const showPassword = useRef(null)

  useEffect(()=>{
    getPassword()
  }, [uperCase , lowerCase , number , unic ,length])

  const getPassword = ()=>{
    const A = uperCaseValue.current.value
    const a = lowerCaseValue.current.value
    const ziro = numberValue.current.value
    const unicProps = unicValue.current.value
    let password = randomatic(A+a+ziro+unicProps, length)
    showPassword.current.value = password.length >=4 ? password : 'موردی انتخاب نشده';
  }
  
  const propertyPassword = ()=>{
    setUperCase(uperCaseValue.current.checked)
    setLowerCase(lowerCaseValue.current.checked)
    setNumber(numberValue.current.checked)
    setUnic(unicValue.current.checked)
  }

  const changeLength = (e)=>{
    if (e.target.classList.contains('LengthPassword_up__WXkzW')) {
      setLength(prevLength => prevLength +1)
    } else {
      if (length > 4) {
        setLength(prevLength => prevLength -1)
      }
    }
  }

  const copyText = ()=>{
    showPassword.current.select()
    document.execCommand('copy');
    toast.success('.رمز کپی شد', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }

  return (
    <div className={styles.createPassword}>
      <div className={styles.items}>
        <div>
          <InputsPassword ref={uperCaseValue} label="حروف بزرگ" type="checkbox" value={uperCase ? 'A' : ''} change={propertyPassword} />
          <InputsPassword ref={lowerCaseValue} label="حروف کوچک" type="checkbox" value={lowerCase ? 'a' : ''} change={propertyPassword} />
        </div>
        <div>
          <InputsPassword ref={numberValue} label="عدد" type="checkbox" value={number ? '0' : ''} change={propertyPassword} />
          <InputsPassword ref={unicValue} label="کاراکتر خاض (% $ / ! @ #)" type="checkbox" value={unic ? '!' : ''} change={propertyPassword} />
        </div>
          <LengthPassword length={length} changeLength={changeLength} />
      </div>

      <div className={styles.copyBox}>
        <input readOnly ref={showPassword} className={styles.showPassword} />
        <div>
          <button onClick={getPassword} className={styles.refresh}></button>
          <button onClick={copyText} className={styles.copyBtn}></button>
        </div>
      </div>
      <ToastContainer />

    </div>
  );
};

export default CreatePassword;
