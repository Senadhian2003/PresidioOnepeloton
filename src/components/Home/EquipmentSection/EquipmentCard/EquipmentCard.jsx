import React from 'react';
import styles from './EquipmentCard.module.css';

function EquipmentCard({ name, image }) {
  return (
    <div className={styles.equipmentCard}>
      <img height={'120px'} alt={name} src={image} />
      <p className={` ${styles.equipmentCardText}`}>{name}</p>
    </div>
  );
}

export default EquipmentCard;