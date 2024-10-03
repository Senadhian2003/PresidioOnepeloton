import React from 'react'
import './ShopEquipment.css'
import ShopEquipmentCard from './ShopEquipmentCard'

function ShopEquipmentSection() {
  return (
    <div className='shop-equipment'>ShopEquipmentSection

    <div className="container-fluid shopping-container">
      
      <div className="row justify-content-md-center">

      <div className="col-lg-6">
      <ShopEquipmentCard />
      </div>

      <div className="col-lg-6">
      <ShopEquipmentCard />
      </div>

      </div>
      
      </div>    


    
    </div>
  )
}

export default ShopEquipmentSection