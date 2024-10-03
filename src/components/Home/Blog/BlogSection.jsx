import React from 'react'
import './BlogSection.css'
import ActionButton from '../Buttons/ActionButton'

function BlogSection() {
  return (
    <div className='blog-section'>
        
        <div className="quiz-section text-center d-flex align-items-center justify-content-center">
            <div>
                <p className='text-center inter-bold text-white title' >Find your Peloton <br /> instructor</p>
                <ActionButton width='160px' content={'Take quiz'} backgroundColor={'white'} textColor={'black'} border={'none'} hoverBackgroundColor={'#8F9093'} hoverTextColor={'black'}  />
            </div>
        </div>

    </div>
  )
}

export default BlogSection