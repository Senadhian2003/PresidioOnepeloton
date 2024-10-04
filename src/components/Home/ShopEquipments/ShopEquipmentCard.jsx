import React, { useCallback } from 'react'
import ActionButton from '../Buttons/ActionButton'
import { useDispatch } from 'react-redux';
import { addCartItem } from '../../../store/cartSlice';


function ShopEquipmentCard({element,isFinalAndOdd }) {

  const dispatch = useDispatch();

  const handleButtonClick = useCallback(()=>{
    console.log(element)
    dispatch(addCartItem(element))
  },[element])

  return (
    <div className={isFinalAndOdd ? 'col-lg-12' : 'col-lg-6'}>
    <div className={isFinalAndOdd ? 'shop-equipment-card-final-odd' : 'shop-equipment-card'} >

      <div className="">

      <div className="row">

      <div className={isFinalAndOdd ? 'col-md-6 col-sm-12' : 'col-lg-12 col-md-6 col-sm-12'}>

      <div>
        <div className="shop-equipment-card-container">


          <p className='inter-extra-bold heading'>{element.title}</p>
          <p className='content' >
            {element.content}
          </p>

      {element.price &&  <p>${element.price}</p>}   



          <div style={{ alignItems: 'center', justifyContent: 'center' }} className="ml-auto mr-auto d-flex justify-content-center">
            <ActionButton  content={element.buttonContent} backgroundColor={'transparent'} textColor={'black'} border={'2px solid black'} hoverBackgroundColor={'black'} hoverTextColor={'white'} />
           {element.price && <p onClick={()=>{
              handleButtonClick(element)
            }} className='inter-medium shop-now'>Shop now</p>}

          </div>





        </div>
        <p className='footer' >{element.subscriptionMessage}</p>
      </div>
      </div>

      <div className={isFinalAndOdd ? 'col-md-6 col-sm-12' : 'col-lg-12 col-md-6 col-sm-12'}>
      <div className='shop-equipment-image-div' style={{backgroundImage:`url(${element.imageUrl})`}}>
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