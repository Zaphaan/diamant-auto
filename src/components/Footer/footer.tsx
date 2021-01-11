import React from 'react';
import style from './footer.module.css';

import facebook from '../Footer/facebook.svg';
import twitter from '../Footer/twitter.svg';
import  insta from '../Footer/insta.svg';



const Footer = () => {
    return <footer className={style.footer}>
       <div className={style.footerContainer}>
           <div className={style.footerLeft}>
               <p className={style.title}>Diamant auto</p>
               <p className={style.content}>
                   Spécialiste de la vente de véhicules pour la Réunion, nous proposons également nos services en France métropolitaine.
                   Diamant Auto vous acceuille dans sa concession de la Réunion.
                </p>
                <p className={style.content}>De nombreux modèles sont disponibles, parmis les Audi, Mercedes, Volkswagen, Mercedes, Porsche...</p>
               
           </div>
           <div className={style.footerMiddle}>
            <p className={style.title}>Horaires d'ouverture</p>
            <p className={style.content}>
                   Du Lundi au Vendredi de 8h30 à 12h00 et de 14h00 à 19h00
            </p>
            <p className={style.content}>
                   Le Samedi de 9h00 à 17h00
            </p>
           </div>
           <div className={style.footerRight}>
            <p className={style.title}>Réseaux sociaux</p>
                <img className={style.reseaux} src={facebook} alt='facebook'/>
                <img className={style.reseaux} src={twitter} alt='twitter'/>
                <img className={style.reseaux} src={insta} alt='insta'/>
           </div>
       </div>
    </footer>
}

export default Footer;