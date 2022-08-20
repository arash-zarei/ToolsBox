import React, { useState, useEffect, useReducer } from 'react';

import styles from './Crypto.module.css'

//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faForward, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

//API
import { getCoin } from './services/api';

//Components
import Loading from './Loading';
import Coin from './Coin';

const initialState = 1;

const pageReducer = (state, action)=>{
    console.log(state);
    switch(action){
        case "PREVPAGE":
            if (state > 1) {
                return state - 1
            }else{
                return initialState
            }

        case "NEXTPAGE":
            if (state < 10) {
                return state + 1
            }else{
                return state
            }

        case "GOFIRSTPAGE":
            return initialState

        case "GOLASTPAGE":
            return state + 10 - state

        default:
            return state
    }
}

const Crypto = () => {

    const [coins, setCoins] = useState([])
    const [search, setSearch] = useState('');
    const [state, dispatch] = useReducer(pageReducer, initialState)

    useEffect(()=>{
        const fetchAPI = async ()=>{
            const data = await getCoin(state)
            setCoins(data)
        }
        fetchAPI()
    })

    const searchHandler = e =>{
        setSearch(e.target.value)
    }

    const searchCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))

    return (
        <div className={styles.crypto}>
            <input type="text" placeholder='جستوجو...' onChange={searchHandler} value={search} />

            <div className={styles.coins}>
                {
                    coins.length ?
                    searchCoins.map(coin => <Coin 
                        key={coin.id} 
                        name={coin.name}
                        symbol={coin.symbol}
                        image={coin.image}
                        price={coin.current_price}
                        marketCap={coin.market_cap}
                        priceChange={coin.price_change_percentage_24h}
                        coins={coins}
                        id={coin.id}
                     />) :
                      <Loading />
                }
                <div className={styles.pagesNumber}>
                    <span className={styles.pagestatus}>صفحه {state} از 10</span>
                    <div>
                        <span onClick={()=> dispatch('NEXTPAGE')}>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </span>
                        <span onClick={()=> dispatch('GOLASTPAGE')}>
                            <FontAwesomeIcon icon={faForward} />
                        </span>
                        <span onClick={()=> dispatch('GOFIRSTPAGE')}>
                            <FontAwesomeIcon icon={faBackward} />
                        </span>
                        <span onClick={()=> dispatch('PREVPAGE')}>
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </span>
                    </div>                  
                </div>
            </div>

        </div>
    );
};

export default Crypto;