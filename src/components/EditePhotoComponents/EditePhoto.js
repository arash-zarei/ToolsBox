import React, { useState, useRef } from 'react';

import { saveAs } from 'file-saver';
import domtoimage from 'dom-to-image';

import styled from 'styled-components';

import styles from './EditePhoto.module.css'

import upload from '../../images/image.png'
import remove from '../../images/trash-bin.png'
import download from '../../images/download.png'
import openTools from '../../images/tools.png'

import Tools from './Tools';

const Img = styled.img`
    filter: 
        blur(${({blur}) => blur}px) 
        brightness(${({brightness}) => brightness}%)
        contrast(${({contrast}) => contrast}%)
        grayscale(${({grayscale}) => grayscale}%)
        hue-rotate(${({hue}) => hue}deg)
        invert(${({invert}) => invert}%)
        opacity(${({opacity}) => opacity}%)
        saturate(${({saturation}) => saturation}%)
        sepia(${({sepia}) => sepia}%);

        border-radius: ${({radius}) => radius}%;
`

const EditePhoto = () => {

    const [open, setOpen] = useState(false)

    const [data, setData] = useState({
        radius: 0,
        brightness: 100,
        blurV: 0,
        contrast: 100,
        grayscale: 0,
        hue: 0,
        invert: 0,
        opacity: 100,
        saturation: 100,
        sepia: 0,
    })

    
    const img = useRef(null)
    
    const removeImage = () =>{
        img.current.setAttribute('src', '')
        setData({
            radius: 0,
            brightness: 100,
            blurV: 0,
            contrast: 100,
            grayscale: 0,
            hue: 0,
            invert: 0,
            opacity: 100,
            saturation: 100,
            sepia: 0,
        })
    }
    
    const loadImage = (event) =>{
        img.current.src = URL.createObjectURL(event.target.files[0])
        img.current.onLoad = ()=>{
            URL.revokeObjectURL(img.current.src)
        }
    }

    const downloadImage = () =>{
        domtoimage.toBlob(img.current)
        .then((blob)=> window.saveAs(blob,'output.png'))
    }

    const valueHandler = (event)=>{
        setData({...data , [event.target.name] : event.target.valueAsNumber})
    }

    return (
        <div className={styles.edite}>
            <nav className={styles.navbar}>
               <button id={styles.openToolBar} onClick={()=> setOpen(!open)}><img src={openTools} alt="remove" /></button>
               <div className={styles.uploadImage}>
                    <label htmlFor='upload'><img src={upload} alt="upload" /></label>
                    <input onChange={loadImage} type="file" id="upload" multiple />
               </div>
               <button onClick={removeImage}><img src={remove} alt="remove" /></button>
               <button onClick={downloadImage}><img src={download} alt="download" /></button>
            </nav>

            <div className={styles.output}>
                <div id={open ? styles.openTool : ''} className={styles.imageOutPut}>
                    <Img 
                        ref={img} 
                        src='' 
                        alt=" " 
                        sepia={data.sepia} 
                        invert={data.invert} 
                        opacity={data.opacity} 
                        saturation={data.saturation} 
                        hue={data.hue} 
                        grayscale={data.grayscale} 
                        contrast={data.contrast} 
                        radius={data.radius} 
                        brightness={data.brightness} 
                        blur={data.blurV} 
                    />
                </div>
                <Tools data={data} valueHandler={valueHandler} open={open} />
            </div>


        </div>
    );
};

export default EditePhoto;