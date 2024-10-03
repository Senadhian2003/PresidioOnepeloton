import React from 'react'
import './SubscriptionSection.css'
import ActionButton from '../Buttons/ActionButton'
function SubscriptionSection() {
  return (
    <div className='subscription'>

      <div className="container-fluid">

        <div className="row">

          <div className="col-lg-6 order-lg-1 order-md-2" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'start' }}>

            <div style={{ padding: '8%' }} >
              <p className='inter-medium sub-section-title'>Peloton App</p>
              <p className='inter-bold sub-section-heading'>Try free for 30 days</p>
              <p className=''>Take classes at home, in the gym, or on the go with no equipment needed.</p>
              <ActionButton content={'Try 30 days free'} backgroundColor={'black'} textColor={'white'} border={'none'} hoverBackgroundColor={''} hoverTextColor={''} width={'240px'} />
              <p className='sub-footer-text'>New paid memberships only. Terms apply.*</p>
            </div>

          </div>

          <div className="col-lg-6 order-lg-2 order-md-1">

            <div className="subscription-image">

            </div>

          </div>

        </div>


      </div>
      


    </div>
  )
}

export default SubscriptionSection