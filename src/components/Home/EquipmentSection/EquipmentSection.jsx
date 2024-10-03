import React from 'react';
import EquipmentCard from './EquipmentCard/EquipmentCard';
import styles from './EquipmentSection.module.css';

function EquipmentSection() {
  const equipments = [
    { name: 'Bike', image: 'https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_2.0,f_auto,q_auto:good,w_120/https://images.ctfassets.net/7vk8puwnesgc/2tHUNOiaupKoSnBJuDW6LP/c0d023d7d32e0ddaf439947afdd4e479/Peloton_Bikes.png' },
    { name: 'Bike+', image: 'https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_2.0,f_auto,q_auto:good,w_120/https://images.ctfassets.net/7vk8puwnesgc/2tHUNOiaupKoSnBJuDW6LP/c0d023d7d32e0ddaf439947afdd4e479/Peloton_Bikes.png' },
    { name: 'Row', image: 'https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_2.0,f_auto,q_auto:good,w_120/https://images.ctfassets.net/7vk8puwnesgc/2tHUNOiaupKoSnBJuDW6LP/c0d023d7d32e0ddaf439947afdd4e479/Peloton_Bikes.png' },
    { name: 'Tread', image: 'https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_2.0,f_auto,q_auto:good,w_120/https://images.ctfassets.net/7vk8puwnesgc/2tHUNOiaupKoSnBJuDW6LP/c0d023d7d32e0ddaf439947afdd4e479/Peloton_Bikes.png' },
    { name: 'Tread+', image: 'https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_2.0,f_auto,q_auto:good,w_120/https://images.ctfassets.net/7vk8puwnesgc/2tHUNOiaupKoSnBJuDW6LP/c0d023d7d32e0ddaf439947afdd4e479/Peloton_Bikes.png' },
    { name: 'Guide', image: 'https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_2.0,f_auto,q_auto:good,w_120/https://images.ctfassets.net/7vk8puwnesgc/2tHUNOiaupKoSnBJuDW6LP/c0d023d7d32e0ddaf439947afdd4e479/Peloton_Bikes.png' },
    { name: 'App', image: 'https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_2.0,f_auto,q_auto:good,w_120/https://images.ctfassets.net/7vk8puwnesgc/2tHUNOiaupKoSnBJuDW6LP/c0d023d7d32e0ddaf439947afdd4e479/Peloton_Bikes.png' },
  ];

  return (
    <div className={styles.equipments}>
      <div className={styles.container}>
        <div className={styles.equipmentSlider}>
          {equipments.map((equipment, index) => (
            <EquipmentCard key={index} name={equipment.name} image={equipment.image} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default EquipmentSection;
