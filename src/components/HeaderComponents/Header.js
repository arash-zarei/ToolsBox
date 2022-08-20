import React from 'react';

import HeaderItems from './HeaderItems';

import styles from './Header.module.css';
import instagram from '../../images/instagram.png';
import telegram from '../../images/telegram.png';
import github from '../../images/github.png';
import linkedin from '../../images/linkedin.png'

import menu from '../../images/menu.png'

const Header = (props)=> {


        return (
    <div className={styles.header}>
        <span className={styles.opne}> <img  onClick={props.openMenu}  src={menu} alt="menu" /></span>
        <HeaderItems 
        href="https://www.instagram.com/arashzarei.js/"
        src={instagram}
        />
        <HeaderItems 
        href="https://t.me/arashzarei_js"
        src={telegram}
        />
        <HeaderItems 
        href="https://github.com/arashzareiJS"
        src={github}
        />
        <HeaderItems 
        href="https://www.linkedin.com/in/arash-zarei-60867b231/"
        src={linkedin}
        />
    </div>
        );
}

export default Header;