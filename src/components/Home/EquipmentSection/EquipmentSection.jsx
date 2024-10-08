import React from 'react';
import EquipmentCard from './EquipmentCard/EquipmentCard';
import styles from './EquipmentSection.module.css';

function EquipmentSection() {
  const equipments = [
    { name: 'Bike', image: 'https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_2.0,f_auto,q_auto:good,w_120/https://images.ctfassets.net/7vk8puwnesgc/2tHUNOiaupKoSnBJuDW6LP/c0d023d7d32e0ddaf439947afdd4e479/Peloton_Bikes.png' },
    { name: 'Bike+', image: 'https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_2.0,f_auto,q_auto:good,w_120/https://images.ctfassets.net/7vk8puwnesgc/2tHUNOiaupKoSnBJuDW6LP/c0d023d7d32e0ddaf439947afdd4e479/Peloton_Bikes.png' },
    { name: 'Row', image: 'https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_2.0,f_auto,q_auto:good,w_150/https://images.ctfassets.net/7vk8puwnesgc/4D6LcrY5vDyDhoAbytzY40/bfad74751baf27e69d0fe39147ab1a0d/Peloton_Row_BellyBand.png' },
    { name: 'Tread', image: 'https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_2.0,f_auto,q_auto:good,w_150/https://images.ctfassets.net/7vk8puwnesgc/39UuwumUIf38aRRLKAkiSZ/05c04f2345215238683521750caf6616/04-bellyband-tread.png' },
    { name: 'Tread+', image: 'https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_2.0,f_auto,q_auto:good,w_150/https://images.ctfassets.net/7vk8puwnesgc/ApKx6MrInrHk7GWT5ftFp/f1a652fa9ddfb203927e31fbe8404e02/belly-tread-plus.png' },
    { name: 'Guide', image: 'https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_2.0,f_auto,q_auto:good,w_150/https://images.ctfassets.net/7vk8puwnesgc/7bP3mIakbWrVWQP425o2bh/4a01f717bdb3b047b253c046ff6055e1/Guide_Band_HP.png' },
    { name: 'App', image: 'https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_2.0,f_auto,q_auto:good,w_150/https://images.ctfassets.net/7vk8puwnesgc/66sPzRQnIfRfj0j6bbPklm/d7d566b1c46998637408af7d2e37698e/AppBelly.png' },
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
