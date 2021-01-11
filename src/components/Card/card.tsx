import React from 'react';
import style from './card.module.css';
import megane from '../../components/Card/images/megane.jpeg'




const Card = () => {
    return <div className={style.card}>
       <img className={style.img} src={megane} alt='voiture'/>
       <h2 className={style.title}>
           Renault Megane IV
       </h2>
       <p className={style.modele}>1.5 DCI Intens</p>
       <p className={style.price}>20 900 euros</p>
    </div>
}

export default Card;