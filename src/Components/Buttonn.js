
import React from 'react';
import styles from './Buttonn.module.css';

function Buttonn ({text})
{
    return(<button className = {styles.button}>{text}</button>); 
    {/*We are applying styles object to the className of button*/}
}

export default Buttonn;