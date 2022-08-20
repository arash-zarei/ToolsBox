import React,{useState, useRef, useEffect} from 'react';

import styles from './Camera.module.css'
import getPhoto from '../../images/diaphragm.png'
import poster from '../../images/picture.png'

const Camera = () => {

    const [hasPhoto , setHasPhoto] = useState(false)
    const [webcame , setWebcame] = useState(false)

    const videoRef = useRef(null)
    const photoRef = useRef(null)

    const webCameHandler = ()=>{
        setWebcame(!webcame)
        if (!webcame) {
            window.localStream.getVideoTracks()[0].stop();
            window.localStream.getAudioTracks()[0].stop();          
        }
    }

    useEffect(()=>{
        if (webcame) {
            getVideo()
        }
    }, [videoRef , webcame])

    const getVideo = ()=> {
        navigator.mediaDevices.getUserMedia({
            video:{width: 720, height: 480}
        })
        .then(stream=>{
            let video = videoRef.current;
            video.srcObject = stream;
            video.play()
        })
        .catch(err=>{
            console.error(err)
        })
    }

    const takePhoto = ()=>{
        const width = 414;
        const height = width / (16/9)

        let video = videoRef.current;
        let photo = photoRef.current;

        photo.width = width;
        photo.height = height;

        let ctx = photo.getContext('2d');
        ctx.drawImage(video,0,0,width,height);
        setHasPhoto(true)
    }

    const closePhoto = ()=>{
        let photo = photoRef.current;
        let ctx = photo.getContext('2d');
        ctx.clearRect(0,0,photo.width,photo.height)
        setHasPhoto(false)
    }

    return (
        <div className={styles.camera}>
            {webcame &&
            <div className={styles.video}>
                <video poster={poster} ref={videoRef}></video>
                <button onClick={takePhoto}><img src={getPhoto}/></button>
            </div>
            }
            <button className={styles.checked} onClick={webCameHandler}>{webcame ? 'بستن دوربین' : 'باز کردن دوربین'}</button>
            {webcame&&
            <div id={hasPhoto ? styles.hasPhoto : ''} className={styles.result}>
                <canvas ref={photoRef}></canvas>
                <button onClick={closePhoto}>بستن</button>
            </div>
        }
        </div>
    );
};

export default Camera;