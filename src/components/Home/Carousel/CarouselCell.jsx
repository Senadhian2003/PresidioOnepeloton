import React from 'react'
import './CarouselSection.css'
function CarouselCell({imageUrl, heading}) {
  return (
    <div className="carousel-cell">
    <div className="carousel-img">
        <div
          className="carousel-img-inner"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
      </div>
    <div className="carousel-text-content">
        <p className='inter-semi-bold heading'>{heading}</p>
        <p className='preview'>Preview {heading} classes</p>
    </div>
</div>
  )
}

export default CarouselCell