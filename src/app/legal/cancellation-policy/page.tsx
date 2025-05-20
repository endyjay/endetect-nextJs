import React from 'react'

const Page = () => {
  return (
    <div className='pricing-policy min-h-[100vh] bg-[#F6F6F8] py-[10px]'>
      <div className='container'>
        <div className='pb-[23px]'>
          <h1 className='text-center uppercase font-[600]!'>Cancellation Policy</h1>
          <span className='w-[100%] my-[15px] mx-auto block max-w-[145px] md:max-w-[235px] h-[1px] bg-black' />
        </div>
        <div className="text-[14px] leading-[22px]">
          <p>
            <span style={{ fontWeight: 400 }}>
              At Innocode, we strive to provide the best employee monitoring and productivity tracking solutions for businesses. However, we understand that circumstances may arise where you may need to cancel your subscription. Please read our cancellation policy carefully before making any requests.
            </span>
          </p>
          
          <h6><b>1. Subscription Cancellation</b></h6>
          <ul>
            <li style={{ fontWeight: 400 }} aria-level={1}>
              <span style={{ fontWeight: 400 }}>You may cancel your subscription at any time by logging into your account and accessing the billing section or by contacting our support team at </span>
              <b>support@endetect.com</b>
              <span style={{ fontWeight: 400 }}>.</span>
            </li>
            <li style={{ fontWeight: 400 }} aria-level={1}>
              <span style={{ fontWeight: 400 }}>Cancellations must be made before the next billing cycle to avoid further charges. Once canceled, your subscription will remain active until the end of the current billing period.</span>
            </li>
            <li style={{ fontWeight: 400 }} aria-level={1}>
              <span style={{ fontWeight: 400 }}>We do not offer prorated refunds for partial months of service or unused features after cancellation.</span>
            </li>
          </ul>

          <h6><b>2. Auto-Renewal Policy</b></h6>
          <ul>
            <li style={{ fontWeight: 400 }} aria-level={1}>
              <span style={{ fontWeight: 400 }}>Subscriptions are set to automatically renew at the end of the billing period. If you wish to stop auto-renewal, you must cancel your subscription before the renewal date.</span>
            </li>
            <li style={{ fontWeight: 400 }} aria-level={1}>
              <span style={{ fontWeight: 400 }}>Failure to cancel before the renewal date will result in the charge for the next billing cycle, which is non-refundable.</span>
            </li>
          </ul>

          <h6><b>3. Account Termination and Data Retention</b></h6>
          <ul>
            <li style={{ fontWeight: 400 }} aria-level={1}>
              <span style={{ fontWeight: 400 }}>Once your subscription is canceled and the billing cycle ends, access to the EnDetect control panel will be revoked.</span>
            </li>
            <li style={{ fontWeight: 400 }} aria-level={1}>
              <span style={{ fontWeight: 400 }}>We retain user data for </span>
              <b>30 days</b>
              <span style={{ fontWeight: 400 }}> after cancellation, allowing you to reactivate your account if needed. After this period, all data will be permanently deleted and cannot be recovered.</span>
            </li>
          </ul>

          <p>
            <span style={{ fontWeight: 400 }}>
              EnDetect reserves the right to modify this cancellation policy at any time. Any changes will be updated on our website and notified to users as necessary.
            </span>
          </p>

          <p>
            <span style={{ fontWeight: 400 }}>For any further assistance regarding cancellations, please reach out to us at </span>
            <b>support@endetect.com</b>
            <span style={{ fontWeight: 400 }}> or call us at </span>
            <b>9711286969</b>
            <span style={{ fontWeight: 400 }}>.</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Page