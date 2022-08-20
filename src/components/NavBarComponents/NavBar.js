import React, { useRef , useEffect } from "react";

import { Link } from 'react-router-dom'

import styles from './NavBar.module.css'

import home from '../../images/home.png'
import chronometer from '../../images/chronometer.png'
import covid from '../../images/coronavirus.png'
import todo from '../../images/to-do-list(1).png'
import calculator from '../../images/calculator.png'
import bitcoin from '../../images/increase.png'
import edit from '../../images/edit.png'
import dots from '../../images/keyboard.png'
import close from '../../images/close.png'
import password from '../../images/reset-password.png'
import calendar from '../../images/calendar.png'
import camera from '../../images/camera.png'

const NavBar = ({closeMenu}) =>{
    const ul = useRef(null)

    useEffect(()=>{
      const aLink = ul.current.querySelectorAll('li a')
      aLink.forEach(element => {
        if(element.getAttribute('href') === '/'+ window.location.href.split('/')[3]) {
          element.classList.add('NavBar_active__Cvluy')
        }else{
          element.classList.remove('NavBar_active__Cvluy')
        }
      });
    })
    
    return (
      
      <nav className={styles.navbar}>
        <div>
        <p>منو</p>
        <span><img  onClick={closeMenu}  src={close} alt="close" /></span>
        </div>
        <ul ref={ul}>
            <li><Link onClick={closeMenu} className={styles.active} to="/"><img alt="logo" src={home} />خانه</Link></li>
            <li><Link onClick={closeMenu} to="/stopwatch"><img alt="logo" src={chronometer} />کرنومتر</Link></li>
            <li><Link onClick={closeMenu} to="/covid19"><img alt="logo" src={covid} />آمار کرونا</Link></li>
            <li><Link onClick={closeMenu} to="/createpassword"><img alt="logo" src={password} />ساخت رمز</Link></li>
            <li><Link onClick={closeMenu} to="/converterdate"><img alt="logo" src={calendar} />تبدیل تاریخ</Link></li>
            <li><Link onClick={closeMenu} to="/calculator"><img alt="logo" src={calculator} />ماشین حساب</Link></li>
            <li><Link onClick={closeMenu} to="/dotcounter"><img alt="logo" src={dots} />نقطه شمار</Link></li>
            <li><Link onClick={closeMenu} to="/camera"><img alt="logo" src={camera} />دوربین</Link></li>
            <li><Link onClick={closeMenu} to="/editphoto"><img alt="logo" src={edit} />ویرایش عکس</Link></li>
            <li><Link onClick={closeMenu} to="/crypto"><img alt="logo" src={bitcoin} />ارز دیجیتال</Link></li>
            <li><Link onClick={closeMenu} to="/todolist"><img alt="logo" src={todo} />لیست کارها</Link></li>
        </ul>
      </nav>
    );
}

export default NavBar;
