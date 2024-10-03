import React from 'react'
import ActionButton from '../Buttons/ActionButton'
function ShopEquipmentCard({title, content, price, buttonContent,imageUrl, subscriptionMessage,isFinalAndOdd }) {

  

  return (
    <div className={isFinalAndOdd ? 'col-lg-12' : 'col-lg-6'}>
    <div className={isFinalAndOdd ? 'shop-equipment-card-final-odd' : 'shop-equipment-card'} >

      <div className="">

      <div className="row">

      <div className={isFinalAndOdd ? 'col-md-6 col-sm-12' : 'col-lg-12 col-md-6 col-sm-12'}>

      <div>
        <div className="shop-equipment-card-container">


          <p className='inter-extra-bold heading'>{title}</p>
          <p className='content' >
            {content}
          </p>

      {price &&  <p>${price}</p>}   



          <div style={{ alignItems: 'center', justifyContent: 'center' }} className="ml-auto mr-auto d-flex justify-content-center">
            <ActionButton content={buttonContent} backgroundColor={'transparent'} textColor={'black'} border={'2px solid black'} hoverBackgroundColor={'black'} hoverTextColor={'white'} />
           {price && <p className='inter-medium shop-now'>Shop now</p>}

          </div>





        </div>
        <p className='footer' >{subscriptionMessage}</p>
      </div>
      </div>

      <div className={isFinalAndOdd ? 'col-md-6 col-sm-12' : 'col-lg-12 col-md-6 col-sm-12'}>
      <div className='shop-equipment-image-div' style={{backgroundImage:`url(${imageUrl})`}}>
      {/* <img className='shop-equipment-image' src="https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_1.0,f_auto,q_auto:good,w_600/https://images.ctfassets.net/7vk8puwnesgc/wE0xDKnYxrha5Z7PWemsX/fd26bfadf5df9026d17c990b2feeecf7/Homepage_bikeplus.png" alt="" /> */}


      </div>
         
      </div>



      </div>


      </div>

    </div>
    </div>
  )
}

export default ShopEquipmentCard