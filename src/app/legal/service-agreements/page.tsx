import React from 'react'

const Page = () => {
    return (
        <div className='min-h-[100vh] bg-[#F6F6F8] py-[10px]'>
            <div className='container'>
                <div className='pb-[23px]'>
                    <h1 className='text-center uppercase font-[600]!'>Service Level Agreements (SLA)
                    </h1>
                    <span className='w-[100%] my-[15px] mx-auto block max-w-[145px] md:max-w-[235px] h-[1px] bg-[#24C16F]' />
                </div>
                <div className='text-[14px] px-4 leading-[22px]'>
                    <p className='mb-[24px]'>This is a Service Level Agreement (SLA) between Innocode Ventures (“Innocode”) and the User. This document identifies the services required and the expected level of services during the subscription period. This SLA describes Innocode&apos;s commitment to providing excellent customer satisfaction to each and every one of its customers.</p>
                    <p className='mb-[24px]'>Innocode understands the importance of your software or availability of overall service including the availability of server/website and Innocode will take every measure that it can in order to provide an excellent level of service and maximum performance and uptime comparable with the best in the industry.</p>
                    <p className='mb-[24px]'>This SLA is incorporated by reference into any agreement you may have with Innocode. Innocode may modify or amend this SLA at any time by posting a revised version at www.enDetect.com. By using the Services, you agree to the most recent version of this SLA.</p>
                    <p className='mb-[24px]'><strong>Installation:</strong></p>
                    <p className='mb-[24px]'>The licensed software is made available to you, with proper documentation. The software is required to be installed on the computers of your workforce at the customer’s end, which includes any other third-party software, frameworks, and runtime installs that are covered as per your chosen plan. Though, remote installation services are available at additional cost.</p>
                    <p className='mb-[24px]'>If you have a question about supported software and hardware requirements or any requirements for remote installation, contact our customer support.</p>
                    <p className='mb-[24px]'><strong>Support:</strong></p>
                   <p className='mb-[24px]'>Innocode team requires administrative access to your server(s) in order to provide services to you, as well as access to hardware maintenance and technical support personnel at the data center or on your premises should be granted. If proper information is not made available or updated to us, we can not be held responsible for any issues in your software or server whatsoever.</p>
                    <p className='mb-[24px]'>Innocode will make available all of our technical resources to support your EnDetect software agent and Web Control Panel. However, it is your responsibility to make every attempt to resolve basic issues (i.e. system configuration, setting miss-configures firewall or antivirus on your employee’s computer, providing basic software and hardware requirements to run software agents etc.).</p>
                    <p className='mb-[24px]'>Innocode retains the right to determine how much support we will provide. If a customer abuses our support policies, causing a degraded level of support for other customers due to the frequency and nature of their own requests, Proactive Software Management may be required to give additional fees.</p>
                    <p className='mb-[24px]'><strong>Not Covered Issues:</strong></p>
                    <p className='mb-[24px]'>Innocode will not provide technical support or troubleshooting for other than EnDetect Agent related issues. There can be several issues that could cause the software to function properly, miss-configured Antivirus, miss-configured firewalls, miss-configure OS settings, or clash with other security software. In this case, we try to find out the issue and guide your tech team to solve it.</p>
                    <p  className='mb-[24px]'><strong>Response Time vs. Resolution Time:</strong></p>
                    <p className='mb-[24px]' >Although Innocode guarantees a response time as indicated on each plan (normally under 24 hours), we cannot give a guaranteed resolution time for critical events or downtimes because of many unknown and uncontrollable situations that might arise. Further, Innocode cannot be held responsible for any downtime at your end, in case of EnDetect Pro version configured at your end.</p>
                    <p className='mb-[24px]' >Critical issues :&nbsp; Response Time 4/8 hours, Resolution time : 24-48 hours (System down, production impaired, Web console down)&nbsp;<br/><span className="text-[15px] font-[400]">Major issues :&nbsp; &nbsp; Response Time 24 hours, Resolution time : 48-72 hours (Web Console issue)&nbsp;<br/></span><span className="text-[15px] font-[400]">Minor issues :&nbsp; &nbsp; Response Time 24 hours, Resolution time : 5-7 business days (Report error / minor enhancements)&nbsp;<br/></span><span className="text-[15px] font-[400]">General&nbsp; :&nbsp; &nbsp; Response Time 48 hours, Resolution time : 7 business days (Information seeking, training on product use)&nbsp;</span><span className="text-[15px] font-[500]"><br/></span></p>
                    <p className='mb-[24px]' >In other cases, Innocode will credit you 5% of your monthly fee, per failed response, on that service’s monthly billing cycle, not to exceed your 50% of total monthly service fee. The response time guarantee applies to the first reply to your opened ticket only and does not apply to every reply after that.</p>
                    <p className='mb-[24px]' ><strong>NOTE</strong>: That opening new tickets and/or replying to an open ticket asking “what is the status” or “Any updates” only delays the process and therefore could move your ticket to the bottom of the list, and would not be covered under our resolution time guarantee.</p>
                    <p className='mb-[24px]' >Raise your support ticket at support@endetect.com </p>
                    <p className='mb-[24px]' ><strong>SLA Claims</strong></p>
                    <p className='mb-[24px]' >If an account is in arrears and/or have one or more late pays in the previous 12 month period, you will not be eligible for any SLA claims.</p>
                    <p className='mb-[24px]' ><strong>Credits</strong></p>
                    <p className='mb-[24px]' >Credit requests must be made via the Innocode helpdesk, by opening a ticket, within 7 days of the incident, or credit will be forfeited. To receive a credit you must request a credit, and provide valid details on why credit should be issued. The total amount credited to a Client for Innocode not meeting SLA service levels will not exceed the service fees paid by Client for such services for the period in question. Each “valid” requested credit will be applied to a Clients invoice within 30 days after Innocode’s receipt of such request.</p>
                    <p className='mb-[24px]' ><strong>NOTE:</strong> That our response/resolution time guarantees apply to support related issues only – non-support related issues (such as sales or billing) will not be covered, as non-support personnel normally work traditional hours, and not 24/7 such as our support staff.</p>
                    <p className='mb-[24px]' ><strong>System Downtime:</strong></p>
                    <p className='mb-[24px]' >Innocode is not responsible for system down caused by hardware failures, connectivity issues, third parties or the client. We at best provide 99% uptime of our servers (in case of EnDetect is hosted with us), in case of any downtime exceeding the guaranteed uptime, please open a ticket with the helpdesk.</p>
                    <p className='mb-[24px]' ><strong>Backups:</strong></p>
                    <p className='mb-[24px]' >We maintain frequent backups of data in case Innocode solution is hosted on our cloud and other backup services at extra cost. In case of solutions, hosted at client&apos;s end, it will be the client&apos;s responsibility to take backup services with their providers.</p>
                </div>
            </div>
        </div>
    )
}

export default Page