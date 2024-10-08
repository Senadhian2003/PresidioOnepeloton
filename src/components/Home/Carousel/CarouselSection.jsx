import React from 'react';
import Flickity from 'react-flickity-component';
import 'flickity/css/flickity.css';
import './CarouselSection.css';
import CarouselCell from './CarouselCell';
import { ApiState } from '../../HigherOrderComponents/ApiState';
const  _CarouselSection =({data})=> {

    // const data = [
    //     {imageUrl : 'https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_1.0,f_auto,q_auto:good,w_600/https://images.ctfassets.net/7vk8puwnesgc/1xxaCMlxguek1IOGongpIE/4aae8d7a1cc246cdf479174d47c00dbd/boxing.png', heading:'Walking'},
    //     {imageUrl : 'https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_1.0,f_auto,q_auto:good,w_600/https://images.ctfassets.net/7vk8puwnesgc/39RfW5BtElEcHNCRlSo6Df/c864ce9b567e24c3842f4ec0c907295d/yoga.png', heading:'Walking'},
    //     {imageUrl : 'https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_1.0,f_auto,q_auto:good,w_600/https://images.ctfassets.net/7vk8puwnesgc/1xxaCMlxguek1IOGongpIE/4aae8d7a1cc246cdf479174d47c00dbd/boxing.png', heading:'Walking'},
    //     {imageUrl : 'https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_1.0,f_auto,q_auto:good,w_600/https://images.ctfassets.net/7vk8puwnesgc/1xxaCMlxguek1IOGongpIE/4aae8d7a1cc246cdf479174d47c00dbd/boxing.png', heading:'Walking'},
    //     {imageUrl : 'https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_1.0,f_auto,q_auto:good,w_600/https://images.ctfassets.net/7vk8puwnesgc/39RfW5BtElEcHNCRlSo6Df/c864ce9b567e24c3842f4ec0c907295d/yoga.png', heading:'Walking'},
    //     {imageUrl : 'https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_1.0,f_auto,q_auto:good,w_600/https://images.ctfassets.net/7vk8puwnesgc/39RfW5BtElEcHNCRlSo6Df/c864ce9b567e24c3842f4ec0c907295d/yoga.png', heading:'Walking'},
    //     {imageUrl : 'https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_1.0,f_auto,q_auto:good,w_600/https://images.ctfassets.net/7vk8puwnesgc/39RfW5BtElEcHNCRlSo6Df/c864ce9b567e24c3842f4ec0c907295d/yoga.png', heading:'Walking'},
        
    // ]

    console.log("Carousel Data :",data)

  const flickityOptions = {
    groupCells: false,
    wrapAround: true
    // Add any other Flickity options here
  };

  return (
    <div className='carousel'>
      <p className='text-center title inter-semi-bold'>Preview thousands of classes on the Peloton App</p>
      <Flickity
        className={'carousel'} // default ''
        elementType={'div'} // default 'div'
        options={flickityOptions} // takes flickity options {}
        disableImagesLoaded={false} // default false
        reloadOnUpdate // default false
        static // default false
      >

        
       {
        data.map((element, index)=>{
            return <CarouselCell key={index} imageUrl={element.imageUrl} heading={element.heading} />
            
       
        })
       }

        {/* <div className="carousel-cell"></div>
        <div className="carousel-cell"></div>
        <div className="carousel-cell"></div>
        <div className="carousel-cell"></div>
        <div className="carousel-cell"></div>
        <div className="carousel-cell"></div>
        <div className="carousel-cell"></div>
        <div className="carousel-cell"></div>
        <div className="carousel-cell"></div>
        <div className="carousel-cell"></div> */}
      </Flickity>
    </div>
  );
}

export const CarouselSection = ApiState(_CarouselSection);