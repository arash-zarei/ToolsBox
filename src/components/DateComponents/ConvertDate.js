import React, { useRef, useEffect , useState } from "react";

import styles from "./ConvertDate.module.css";
import { Link, Outlet } from "react-router-dom";

const ConvertDate = () => {
  const routsParent = useRef(null);
  const [active , setActive] = useState(true)

  useEffect(() => {
    const links = routsParent.current.querySelectorAll("a");
    links.forEach((element) => {
        if (element.getAttribute('href').split('/')[2] === window.location.href.split('/')[4]) {
            setActive(!active)
            element.classList.add('ConvertDate_activeMenu__H3cvp')
        } else {
            setActive(!active)
            element.classList.remove('ConvertDate_activeMenu__H3cvp')
        }
    } , [active]);
  });

  return (
    <div className={styles.ConvertDate}>
      <div ref={routsParent} className={styles.routsDate}>
        <Link to="/converterdate/jalalitomiladi">شمسی به میلادی</Link>
        <Link to="/converterdate/miladitojalali">میلادی به شمسی</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default ConvertDate;