import React from 'react'
import './BlogSection.css'
import ActionButton from '../Buttons/ActionButton'

function BlogSection() {

  const data = [{
    title:'The starting line',
    content: 'How to get back into working out',
    imageUrl : 'https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_2.0,f_auto,q_auto:good,w_256/https://images.ctfassets.net/7vk8puwnesgc/7AG9vk63T88Xs69QwNGtbm/36d514723dd231a5e3ac2b83c3ff095a/Peloton-LosAngeles-2023-04-27-CedricDanny-Shot4-04519_800x490.jpg'
  },
  {
    title:'The Long game',
    content: '12 steps to build a fitness routine that sticks',
    imageUrl : 'https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_2.0,f_auto,q_auto:good,w_256/https://images.ctfassets.net/7vk8puwnesgc/3hKBg366U2U3KHyXm0p9fx/49dcbada93dd45ee1df5af89be2851b2/SHOT_3_02006_800x490__1_.jpg'  },
  {
    title:'The work',
    content: 'New to running? Here is how to get started',
    imageUrl : 'https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_2.0,f_auto,q_auto:good,w_256/https://images.ctfassets.net/7vk8puwnesgc/4trU163wF4CL4wmLkDMQNC/92d5dd9d561d369afd632e84339905dd/SHOT_23_08133_800x490.jpg'  },
  
]

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
              return <div key={index} className="col-lg-4">

                <div className="blog-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div className='blog-image'>
                    <div className="blog-image-inner" style={{backgroundImage : `url(${element.imageUrl})`}}>


                    </div>
                  </div>


                  <div className="blog-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                    <p className='inter-medium blog-section-title'>{element.title}</p>
                    <hr style={{ width: '20%', textAlign: 'center', marginLeft: '0' }} />
                    <p className='blog-section-context'>{element.content}</p>
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