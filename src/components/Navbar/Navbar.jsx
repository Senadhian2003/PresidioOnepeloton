import React, { useEffect } from 'react'
import './Navbar.css'
import { MdOutlineLocationOn } from "react-icons/md";
import { LuUser2 } from "react-icons/lu";
import { IoCartOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

import location from '../../assets/location.svg'

function Navbar() {

    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.querySelector(".navbar-onepeloton");
            const scrollTop = window.scrollY; // Get the current scroll position
            const maxScroll = 800; // Set the scroll distance where opacity will reach 1
        
            // Calculate the new opacity (from 0 to 1)
            let newOpacity = Math.min(scrollTop / maxScroll, 1);
        
            // Set the new background color with calculated opacity
            navbar.style.backgroundColor = `rgba(0, 0, 0, ${newOpacity})`;
        };
    
        window.addEventListener('scroll', handleScroll);
    
        // Cleanup event listener on component unmount
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);



  return (
    <div className='navbar-onepeloton'>
        
        <p className='nav-header-text' >PELOTON</p>

        <ul className='nav-elements-content'>

        <li>
            Classes
            <span className='down-arrow'>  <IoIosArrowDown size={'14px'} /></span>
          
        </li>

        <li>
            Bikes
               <span className='down-arrow'>  <IoIosArrowDown size={'14px'} /></span>
        </li>

        <li>
            Treads   <span className='down-arrow'>  <IoIosArrowDown size={'14px'} /></span>
        </li>

        <li>
            Row   <span className='down-arrow'>  <IoIosArrowDown size={'14px'} /></span>
        </li>

        <li>
            App   <span className='down-arrow'>  <IoIosArrowDown size={'14px'} /></span>
        </li>

        <li>
            Accessories   <span className='down-arrow'>  <IoIosArrowDown size={'14px'} /></span>
        </li>
        <li>
            Apparel   <span className='down-arrow'>  <IoIosArrowDown size={'14px'} /></span>
        </li>


        </ul>

        <ul className='nav-icon'>

<li>
{/* <MdOutlineLocationOn size='30px' color='white'/> */}
<svg height="32" viewBox="0 0 32 32" fill="none" aria-labelledby="hy9v4urwukv7jm9deea3pfhq" class="AsyncIcon__StyledIcon-design-system__sc-9oyiwf-0 bvUoNw" focusable="false" preserveAspectRatio="xMidYMid meet"><title id="hy9v4urwukv7jm9deea3pfhq">Location</title><g clip-path="url(#location_svg__a)" stroke="#FFFFFF" stroke-width="2"><path clip-rule="evenodd" d="M16.5 5c2.352 0 4.483.91 6.026 2.389C24.052 8.85 25 10.87 25 13.104c0 3.08-2.941 7.23-8.5 12.521C10.94 20.333 8 16.183 8 13.105c0-2.234.948-4.254 2.474-5.716C12.017 5.91 14.148 5 16.5 5Z"></path><path d="M16.5 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path></g><defs><clipPath id="location_svg__a"><path fill="#FFFFFF" transform="translate(7 4)" d="M0 0h19v23H0z"></path></clipPath></defs></svg></li>

<li>
{/* <LuUser2 size='30px' color='white'/> */}
<svg height="32" viewBox="0 0 32 32" fill="none" aria-labelledby="baqmvja283wavjzzdmqsufhp" class="AsyncIcon__StyledIcon-design-system__sc-9oyiwf-0 bvUoNw" focusable="false" preserveAspectRatio="xMidYMid meet"><title id="baqmvja283wavjzzdmqsufhp">Account</title><circle cx="16" cy="12" r="5" stroke="#FFFFFF" stroke-width="2"></circle><path d="M27 27c0-4.97-4.925-9-11-9S5 22.03 5 27" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"></path></svg></li>

<li>
{/* <IoCartOutline  size='30px' color='white'/> */}
<svg height="32" viewBox="0 0 32 32" fill="none" aria-labelledby="m1q663bwlac1u4cyapjdyjq6" class="AsyncIcon__StyledIcon-design-system__sc-9oyiwf-0 bvUoNw" focusable="false" preserveAspectRatio="xMidYMid meet"><title id="m1q663bwlac1u4cyapjdyjq6">Cart-l10n</title><path d="M11.736 8.047H27.41a.3.3 0 0 1 .292.371l-2.676 10.99a.3.3 0 0 1-.291.23h-13.76a.3.3 0 0 1-.287-.21L6.52 6.21A.3.3 0 0 0 6.233 6H4" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"></path><circle cx="22.75" cy="25.043" r="1.75" fill="#FFFFFF"></circle><circle cx="12.75" cy="25.043" r="1.75" fill="#FFFFFF"></circle></svg>
</li>


</ul>


    </div>
  )
}

export default Navbar