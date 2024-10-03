import React from 'react'
import './BlogSection.css'
import ActionButton from '../Buttons/ActionButton'

function BlogSection() {

  const data = [0, 1, 2]

  return (
    <div className='blog-section'>

      <div className="quiz-section text-center d-flex align-items-center justify-content-center">
        <div>
          <p className='text-center inter-bold text-white title' >Find your Peloton <br /> instructor</p>
          <ActionButton width='160px' content={'Take quiz'} backgroundColor={'white'} textColor={'black'} border={'none'} hoverBackgroundColor={'#8F9093'} hoverTextColor={'black'} />
        </div>
      </div>

      <div style={{ padding: '4%' }}>


        <div className="section-content" >
          <p className='text-center blog-section-title inter-semi-bold'>Peloton blog</p>
          <p className='text-center blog-section-heading inter-semi-bold'>Reach your goals with Peloton</p>

        </div>

        <div className="row" >

          {
            data.map((element, index) => {
              return <div className="col-lg-4">

                <div className="blog-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div className='blog-image'>
                    <div className="blog-image-inner">


                    </div>
                  </div>


                  <div className="blog-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                    <p className='inter-medium blog-section-title'>The starting line</p>
                    <hr style={{ width: '20%', textAlign: 'center', marginLeft: '0' }} />
                    <p className='blog-section-context'>How to get back into
                      <br />
                      working out</p>
                  </div>


                </div>


              </div>
            })
          }


        </div>


      </div>


    </div>
  )
}

export default BlogSection