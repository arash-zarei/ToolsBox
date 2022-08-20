import React from "react";

import styles from "./Tools.module.css";

const Tools = ({ open, data, valueHandler }) => {
  return (
    <div id={open ? styles.openTool : ""} className={styles.toolsEdit}>
      <div className={styles.range}>
        <label htmlFor="">گردی(شعاع)</label>
        <input
          name="radius"
          onChange={valueHandler}
          type="range"
          min="0"
          max="100"
          step="1"
          value={data.radius}
        />
        <span className={styles.status}>{data.radius}%</span>
      </div>

      <div className={styles.range}>
        <label htmlFor="">روشنایی</label>
        <input
          name="brightness"
          onChange={valueHandler}
          type="range"
          min="0"
          max="100"
          step="1"
          value={data.brightness}
        />
        <span className={styles.status}>{data.brightness}%</span>
      </div>

      <div className={styles.range}>
        <label htmlFor="">تاری</label>
        <input
          name="blurV"
          onChange={valueHandler}
          type="range"
          min="0"
          max="100"
          step="1"
          value={data.blurV}
        />
        <span className={styles.status}>{data.blurV}%</span>
      </div>

      <div className={styles.range}>
        <label htmlFor="">کنتراست</label>
        <input
          name="contrast"
          onChange={valueHandler}
          type="range"
          min="0"
          max="100"
          step="1"
          value={data.contrast}
        />
        <span className={styles.status}>{data.contrast}%</span>
      </div>

      <div className={styles.range}>
        <label htmlFor="">سیاه سفید</label>
        <input
          name="grayscale"
          onChange={valueHandler}
          type="range"
          min="0"
          max="100"
          step="1"
          value={data.grayscale}
        />
        <span className={styles.status}>{data.grayscale}%</span>
      </div>

      <div className={styles.range}>
        <label htmlFor="">رنگ</label>
        <input
          name="hue"
          onChange={valueHandler}
          type="range"
          min="0"
          max="360"
          step="1"
          value={data.hue}
        />
        <span className={styles.status}>{data.hue}°</span>
      </div>

      <div className={styles.range}>
        <label htmlFor="">معکوس</label>
        <input
          name="invert"
          onChange={valueHandler}
          type="range"
          min="0"
          max="100"
          step="1"
          value={data.invert}
        />
        <span className={styles.status}>{data.invert}%</span>
      </div>

      <div className={styles.range}>
        <label htmlFor="">شفافیت</label>
        <input
          name="opacity"
          onChange={valueHandler}
          type="range"
          min="0"
          max="100"
          step="1"
          value={data.opacity}
        />
        <span className={styles.status}>{data.opacity}%</span>
      </div>

      <div className={styles.range}>
        <label htmlFor="">اشباع</label>
        <input
          name="saturation"
          onChange={valueHandler}
          type="range"
          min="0"
          max="100"
          step="1"
          value={data.saturation}
        />
        <span className={styles.status}>{data.saturation}%</span>
      </div>

      <div className={styles.range}>
        <label htmlFor="">قهوه ای</label>
        <input
          name="sepia"
          onChange={valueHandler}
          type="range"
          min="0"
          max="100"
          step="1"
          value={data.sepia}
        />
        <span className={styles.status}>{data.sepia}%</span>
      </div>
    </div>
  );
};

export default Tools;
