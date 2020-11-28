import React from 'react';
import burgLogo from '../../assests/images/burger-logo.png';
import classes from './Logo.module.css'


const logo = (props) =>{
    return(
        <div className={classes.Logo}>
            <img src={burgLogo} alt="Burger Time"/>
        </div>
    )
};

export default logo;