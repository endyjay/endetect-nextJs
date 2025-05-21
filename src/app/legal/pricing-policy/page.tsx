import React from 'react'

const Page = () => {
  return (
    <div className=' pricing-policy min-h-[100vh] bg-[#F6F6F8] py-[10px]'>
      <div className='container'>
        <div className='pb-[23px]'>
          <h1 className='text-center uppercase font-[600]!'>Pricing Policy</h1>
          <span className='w-[100%] my-[15px] mx-auto block max-w-[145px] md:max-w-[235px] h-[1px] bg-[#24C16F]' />
        </div>
        <div className="text-[14px] leading-[22px]">
          <p>
            <span style={{ fontWeight: 400 }}>At Innocode, we are committed to offering </span>
            <b>transparent, competitive, and value-driven pricing</b>
            <span style={{ fontWeight: 400 }}> for businesses of all sizes. Our pricing model is designed to provide flexibility and scalability to meet the monitoring and productivity tracking needs of your organization. Please review our pricing policy below before making a purchase.</span>
          </p>
          
          <h6><b>1. Pricing Structure</b></h6>
          <ul>
            <li style={{ fontWeight: 400 }} aria-level={1}>
              <span style={{ fontWeight: 400 }}>Innocode's EnDetect operates on a </span>
              <b>subscription-based pricing model</b>
              <span style={{ fontWeight: 400 }}>, where charges are applied on a per-employee basis.</span>
            </li>
            <li style={{ fontWeight: 400 }} aria-level={1}>
              <span style={{ fontWeight: 400 }}>We offer </span>
              <b>annual subscription plans</b>
              <span style={{ fontWeight: 400 }}>, with discounts available for long-term commitments and bulk license purchases.</span>
            </li>
            <li style={{ fontWeight: 400 }} aria-level={1}>
              <span style={{ fontWeight: 400 }}>Pricing varies depending on the selected plan (</span>
              <b>Premium, Pro, or Enterprise</b>
              <span style={{ fontWeight: 400 }}>), with each plan offering different features and levels of access.</span>
            </li>
          </ul>

          <h6><b>2. Payment Terms</b></h6>
          <ul>
            <li style={{ fontWeight: 400 }} aria-level={1}>
              <span style={{ fontWeight: 400 }}>All payments for EnDetect subscriptions are </span>
              <b>billed in 100% advance</b>
            </li>
            <li style={{ fontWeight: 400 }} aria-level={1}>
              <span style={{ fontWeight: 400 }}>Payments must be made via the accepted payment methods listed at checkout, including </span>
              <b>UPI</b>
              <span style={{ fontWeight: 400 }}>, </span>
              <b>credit/debit cards, bank transfers, and digital payment options</b>
              <span style={{ fontWeight: 400 }}>.</span>
            </li>
            <li style={{ fontWeight: 400 }} aria-level={1}>
              <span style={{ fontWeight: 400 }}>For </span>
              <b>Enterprise clients</b>
              <span style={{ fontWeight: 400 }}>, we offer </span>
              <b>custom pricing and invoicing</b>
              <span style={{ fontWeight: 400 }}> based on the number of licenses and additional requirements.</span>
            </li>
          </ul>

          <h6><b>3. Auto-Renewal Policy</b></h6>
          <ul>
            <li style={{ fontWeight: 400 }} aria-level={1}>
              <span style={{ fontWeight: 400 }}>All EnDetect subscriptions are set to </span>
              <b>auto-renew</b>
              <span style={{ fontWeight: 400 }}> at the end of each billing cycle to ensure uninterrupted service.</span>
            </li>
            <li style={{ fontWeight: 400 }} aria-level={1}>
              <span style={{ fontWeight: 400 }}>You can </span>
              <b>disable auto-renewal</b>
              <span style={{ fontWeight: 400 }}> anytime by accessing your account settings. If auto-renewal is not turned off before the renewal date, the system will process the next payment, and the subscription will continue for the next billing cycle.</span>
            </li>
          </ul>

          <h6><b>4. Discounts & Offers</b></h6>
          <ul>
            <li style={{ fontWeight: 400 }} aria-level={1}>
              <span style={{ fontWeight: 400 }}>EnDetect may offer </span>
              <b>discounts and promotional pricing</b>
              <span style={{ fontWeight: 400 }}> on select plans, which will be applicable only during the promotional period.</span>
            </li>
            <li style={{ fontWeight: 400 }} aria-level={1}>
              <span style={{ fontWeight: 400 }}>Bulk license purchases (above 100 users) may be eligible for </span>
              <b>custom discounts</b>
              <span style={{ fontWeight: 400 }}>—please contact us for a quote.</span>
            </li>
          </ul>

          <h6><b>5. Pricing Revisions</b></h6>
          <ul>
            <li style={{ fontWeight: 400 }} aria-level={1}>
              <span style={{ fontWeight: 400 }}>EnDetect reserves the right to revise its pricing structure at any time. Any </span>
              <b>changes in pricing will be communicated in advance</b>
              <span style={{ fontWeight: 400 }}> to existing customers, ensuring transparency and allowing them to make necessary adjustments.</span>
            </li>
            <li style={{ fontWeight: 400 }} aria-level={1}>
              <span style={{ fontWeight: 400 }}>If prices are revised, existing users will continue their current pricing until their subscription period ends. We will not apply new pricing to our existing clients.</span>
            </li>
          </ul>

          <h6><b>6. Taxes & Additional Fees</b></h6>
          <ul>
            <li style={{ fontWeight: 400 }} aria-level={1}>
              <span style={{ fontWeight: 400 }}>Prices listed on our website are </span>
              <b>exclusive of applicable taxes</b>
              <span style={{ fontWeight: 400 }}> unless stated otherwise. Any applicable </span>
              <b>GST or VAT</b>
              <span style={{ fontWeight: 400 }}> will be added during checkout as per local regulations.</span>
            </li>
            <li style={{ fontWeight: 400 }} aria-level={1}>
              <span style={{ fontWeight: 400 }}>Certain payment methods may carry additional transaction fees, which will be displayed at the time of payment.</span>
            </li>
          </ul>

          <h6><b>7. Contact & Support</b></h6>
          <p>
            <span style={{ fontWeight: 400 }}>For any questions or concerns regarding our pricing, billing, or invoices, please reach out to our support team:</span>
            <br />
            <span style={{ fontWeight: 400 }}>📧 </span>
            <b>support@endetect.com</b>
            <br />
            <span style={{ fontWeight: 400 }}>📞 </span>
            <b>9711286969</b>
          </p>
          <p>
            <span style={{ fontWeight: 400 }}>We strive to provide </span>
            <b>cost-effective</b>
            <span style={{ fontWeight: 400 }}> and </span>
            <b>flexible</b>
            <span style={{ fontWeight: 400 }}> pricing to help businesses improve productivity while maintaining affordability.</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Page