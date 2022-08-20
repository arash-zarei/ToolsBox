import React from 'react';

import styles from './Home.module.css'
import HomeItem from './HomeItem';

import { Link } from 'react-router-dom';

import chronometer from '../../images/chronometer.png'
import covid from '../../images/coronavirus.png'
import todo from '../../images/to-do-list(1).png'
import calculator from '../../images/calculator.png'
import bitcoin from '../../images/increase.png'
import edit from '../../images/edit.png'
import dots from '../../images/keyboard.png'
import password from '../../images/reset-password.png'
import calendar from '../../images/calendar.png'
import camera from '../../images/camera.png'

const Home = ({status})=> {
        return (
            <div id={status ? styles.home_hight : ''} className={styles.home}>
                <Link to="/stopwatch"><HomeItem image={chronometer} title="کرنومتر"/> </Link>
                <Link to="/covid19"><HomeItem image={covid} title="آمار کرونا"/> </Link>
                <Link to="/converterdate"><HomeItem image={calendar} title="تبدیل تاریخ"/> </Link>
                <Link to="/createpassword"><HomeItem image={password} title="ساخت رمز"/> </Link>
                <Link to="/calculator"><HomeItem image={calculator} title="ماشین حساب"/> </Link>
                <Link to="/dotcounter"><HomeItem image={dots} title="نقطه شمار"/> </Link>
                <Link to="/camera"><HomeItem image={camera} title="دوربین"/> </Link>
                <Link to="/todolist"><HomeItem image={todo} title="لیست کارها"/> </Link>
                <Link to="/crypto"><HomeItem image={bitcoin} title="ارز دیجیتال"/> </Link>
                <Link to="/editphoto"><HomeItem image={edit} title="ویرایش عکس"/> </Link>
            </div>
        );
}

export default Home;