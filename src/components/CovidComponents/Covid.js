import React, { useRef, useEffect, useState } from "react";

import styles from "./Covid.module.css";
import { Link, Outlet } from "react-router-dom";

const Covid = () => {
  const routsParent = useRef(null);
  const [active , setActive] = useState(true)

  useEffect(() => {
    const links = routsParent.current.querySelectorAll("a");
    console.log(window.location.href.split('/')[4]);
    links.forEach((element) => {
        if (element.getAttribute('href').split('/')[2] === window.location.href.split('/')[4]) {
            setActive(!active)
            element.classList.add('Covid_activeMenu__Js-LL')
        } else {
            setActive(!active)
            element.classList.remove('Covid_activeMenu__Js-LL')
        }
    } , [active]);
  });

  return (
    <div className={styles.covid}>
      <div ref={routsParent} className={styles.routs}>
        <Link to="/covid19/iran">ایران</Link>
        <Link to="/covid19/global">جهانی</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Covid;
