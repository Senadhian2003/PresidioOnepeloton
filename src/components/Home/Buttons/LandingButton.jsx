import React from 'react'
import styles from './Buttons.module.css'


function LandingButton({backgroundColor, textColor, hoverBackgroundColor, hoverTextColor, content, border}) {
  
  return (
   
         <button
         style={{
          backgroundColor: backgroundColor,
          color: textColor,
          border: border
        }}

        onMouseEnter={(e) => {
          e.target.style.backgroundColor = hoverBackgroundColor;
          e.target.style.color = hoverTextColor;
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = backgroundColor;
          e.target.style.color = textColor;
        }}
         
         className={styles.landingButton}>{content}</button>
   
  )
}

export default LandingButton