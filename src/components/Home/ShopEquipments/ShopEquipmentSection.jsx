import React from 'react'
import './ShopEquipment.css'
import ShopEquipmentCard from './ShopEquipmentCard'

function ShopEquipmentSection() {

  const data = [
    {id : 1,title : 'Paleton Bike+', content : 'Our most advanced Bike with a larger rotating screen, auto-resistance, and more.', price:'2589', buttonContent:'Explore',subscriptionMessage: '$44/mo Peloton All-Access Membership required to access full content on the Peloton Row.', imageUrl:"https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_1.0,f_auto,q_auto:good,w_600/https://images.ctfassets.net/7vk8puwnesgc/2GCUTSr0mYOyutMyP7L2Uf/5cf23ca4b5867921e0429b5eee68236e/Homepage_bike.png" },
    {id : 2,title : 'Paleton Bike', content : 'The original motivating cardio machine loved by millions.', price:'2589', buttonContent:'Explore',subscriptionMessage: '$44/mo Peloton All-Access Membership required to access full content on the Peloton Row.', imageUrl : 'https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_1.0,f_auto,q_auto:good,w_600/https://images.ctfassets.net/7vk8puwnesgc/wE0xDKnYxrha5Z7PWemsX/fd26bfadf5df9026d17c990b2feeecf7/Homepage_bikeplus.png' },
    {id : 3,title : 'Peloton Tread+', content : 'The ultimate treadmill experience.', price:'2589', buttonContent:'Explore',subscriptionMessage: '$44/mo Peloton All-Access Membership required to access full content on the Peloton Row.', imageUrl : 'https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_1.0,f_auto,q_auto:good,w_600/https://images.ctfassets.net/7vk8puwnesgc/y2Vcgqd9s2i984Ba83imv/d3d6f6d31ffd76788ffb561d511c5742/product-card-treadplus.png' },

    {id : 4,title : 'Peloton Tread', content : 'Built to go the extra mile and keep you focused on the road ahead.', price:'2589', buttonContent:'Explore',subscriptionMessage: '$44/mo Peloton All-Access Membership required to access full content on the Peloton Row.', imageUrl : 'https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_1.0,f_auto,q_auto:good,w_600/https://images.ctfassets.net/7vk8puwnesgc/4kdWjFVtFNSfGjYmFpmGCU/e9aebab780a801e10c2d33bd49771a46/tread-card.jpg' },
    {id : 5,title : 'Peloton Row', content : 'Our most efficient workout yet with form features to make you a better rower.', price:'2589', buttonContent:'Explore', subscriptionMessage: '$44/mo Peloton All-Access Membership required to access full content on the Peloton Row.',imageUrl : 'https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_1.0,f_auto,q_auto:good,w_600/https://images.ctfassets.net/7vk8puwnesgc/5iA17KUMDyFHM1scZq4ONJ/2b475fa171716a35df667870afa4e81d/guide-product-card.jpg' },
    {id : 6,title : 'Apparel', content : 'Now’s the time to build a new look.', buttonContent:'Shop new arrivals',subscriptionMessage: '$44/mo Peloton All-Access Membership required to access full content on the Peloton Row.', imageUrl : 'https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_1.0,f_auto,q_auto:good,w_600/https://images.ctfassets.net/7vk8puwnesgc/2xFoYqdTtXYummJv9dJz8d/4b54cd1dd153d4bfbed01ff5fe8cbe4d/Product_Images_Cards.png' },
    {id : 7,title : 'Gift Cards', content : 'Shop gift cards to redeem on Peloton equipment, accessories, and memberships.', buttonContent:'Explore',subscriptionMessage: '$44/mo Peloton All-Access Membership required to access full content on the Peloton Row.', imageUrl : 'https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_1.0,f_auto,q_auto:good,w_600/https://images.ctfassets.net/7vk8puwnesgc/3u157P4AS9qZt3KkDZuln0/58734dc8b02978d685e7b64531b41f1e/GC-product-block.jpg' }





  ]

  return (
    <div className='shop-equipment'>

    <div className=" shopping-container">
      
      <div className="row justify-content-md-center">

      {
        data.map((element, index)=>{
          return   <ShopEquipmentCard key={element.id} title={element.title} content={element.content} price={element.price} buttonContent={element.buttonContent} imageUrl={element.imageUrl} subscriptionMessage={element.subscriptionMessage} isFinalAndOdd={index===data.length-1 && index%2===0} />
     
    
        })
      }
     
    

      </div>
      
      </div>    


    
    </div>
  )
}

export default ShopEquipmentSection