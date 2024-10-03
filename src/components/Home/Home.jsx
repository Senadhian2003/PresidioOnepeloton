import React from 'react'
import Navbar from '../Navbar/Navbar'
import LandingButton from './Buttons/LandingButton'
import { IoIosArrowDown } from "react-icons/io";
import EquipmentCard from './EquipmentSection/EquipmentCard/EquipmentCard';
import EquipmentSection from './EquipmentSection/EquipmentSection';
import CarouselSection from './Carousel/CarouselSection';
import './Home.css'
import ShopEquipmentSection from './ShopEquipments/ShopEquipmentSection';
import BlogSection from './Blog/BlogSection';
import SubscriptionSection from './Subscription/SubscriptionSection';

function Home() {
  return (
    <div className='home'>

      <div className="landing-page">
        <div className="transparent-layer" ></div>
        <Navbar></Navbar>

        <div className="landing-content  container ">

          <div className="content">
            <p className='inter-medium welcome-text' >Peloton Tread & Tread+</p>
            <p className='inter-extra-bold welcome-quote'>Walk it out with our wide
              <br />
              range of walking classes</p>
            <div className="ml-auto mr-auto d-flex justify-content-center">
            

              <LandingButton backgroundColor='#CDFF38' textColor='black' hoverBackgroundColor='white' hoverTextColor='black' content='Shop Tread' border='none' ></LandingButton>
              <LandingButton backgroundColor='transparent' textColor='white' hoverBackgroundColor='white' hoverTextColor='black' content='Shop Tread+' border='2px solid white'></LandingButton>

            </div>


          </div>

        </div>

        <div className='text-center '>
          <svg
            height="42"
            viewBox="0 0 22 42"
            fill="none"
            aria-labelledby="fwc2nkbnxqmienxvh15cp4kb"
            class="rotated-arrow bouncing"
            focusable="false"
            preserveAspectRatio="xMidYMid meet"
          >
            <title id="fwc2nkbnxqmienxvh15cp4kb">Arrow</title>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="m2.323 20.952 19.56 19.607-.885.882L.558 20.952 20.902.56l.885.882L2.323 20.952Z"
              fill="white"
            ></path>
          </svg>
        </div>


      </div>

      {/* Equpment Section */}

      <EquipmentSection></EquipmentSection>


      {/* Carousel Section */}
      <CarouselSection />

      {/* Shop Equipment Section */}
      <ShopEquipmentSection></ShopEquipmentSection>

      {/* Blog Section */}

      <BlogSection/>

      {/* Subscription Section */}

      <SubscriptionSection/>

    </div>
  )
}

export default Home