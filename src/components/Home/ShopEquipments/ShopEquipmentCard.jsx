import React from 'react'
import ActionButton from '../Buttons/ActionButton'
function ShopEquipmentCard() {
  return (
    <div className='shop-equipment-card' >

     <div className="shop-equipment-card-container">


     <p className='inter-extra-bold heading'>Peloton Bike</p>
      <p className='content' >
      Our most advanced Bike with a larger rotating screen, auto-resistance, and more.
      </p>

      <p>$2,496</p>

    

     <div style={{alignItems:'center', justifyContent:'center'}} className="ml-auto mr-auto d-flex justify-content-center">
            <ActionButton content={'Explore'}/>
            <p className='inter-medium shop-now'>Shop now</p>
            
            </div>

    


      
      </div> 
     
    </div>
  )
}

export default ShopEquipmentCard