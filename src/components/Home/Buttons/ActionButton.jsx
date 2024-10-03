import React from 'react'
import styles from './Buttons.module.css'
function ActionButton({content, backgroundColor, textColor, border, hoverBackgroundColor, hoverTextColor, width}) {
  return (
    <button
    style={{
      backgroundColor: backgroundColor,
      color: textColor,
      border: border,
      width : width
    }}

    onMouseEnter={(e) => {
      e.target.style.backgroundColor = hoverBackgroundColor;
      e.target.style.color = hoverTextColor;
    }}
    onMouseLeave={(e) => {
      e.target.style.backgroundColor = backgroundColor;
      e.target.style.color = textColor;
    }}

   
    
    className={styles.actionButton}>{content}</button>
  )
}

export default ActionButton