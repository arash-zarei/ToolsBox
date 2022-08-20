import React,{ useState } from 'react';

import styles from './Coin.module.css'

//Components
import ChartCoin from './ChartCoin';


const Coin = ({name, symbol, image, price, marketCap, priceChange, id, coins }) => {

    const [coin, setCoin] = useState([])
    const [isChart, setIsChart] = useState(false)

    const coinHandler = (id) =>{
        const coinData = coins.find(item => item.id === id)
        setCoin(coinData) 
        setIsChart(!isChart)
     }

    return (
        <div id={isChart ? styles.openChart : ''} className={styles.coin}>
            <div>
                <img src={image} alt="logo" />
                <span className={styles.name}>{name}</span>
                <span className={styles.symbol}>{symbol.toUpperCase()}</span>
            </div>

            <div>
                <span className={styles.price}>{price.toLocaleString()} $</span>
                <span className={priceChange > 0 ? styles.greenPriceChange : styles.redPriceChange}>{priceChange.toFixed(2)} %</span>
                <span className={styles.marketCap}>{marketCap.toLocaleString()}$</span>
            </div>
            <button onClick={()=> coinHandler(id)}>نمودار قیمت</button>
            {isChart && <ChartCoin closeChart={()=> setIsChart(!isChart)} coin={coin} />} 
        </div>
    );
};

export default Coin;