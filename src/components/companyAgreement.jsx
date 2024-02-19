import React, { useState, useRef} from 'react';
import {Navbar, Developer,Copyright, PrintButton} from './'
import styles from '../style'
import SendButton from './sendButton';
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useReactToPrint } from 'react-to-print';

const AgreementForm=()=>{

    const formRef = useRef();

    const [form, setForm] = useState({});
    const [isSubmitted,setSubmit] = useState(false);
    const [printPDF,setPrint] = useState(false);
  
    const toggleSubmit=()=>{
        setSubmit(true)
        toast('Response Submitted!');
    };


    const handleForm=(e)=>{
        setForm({
          ...form,
          [e.target.name]: e.target.value
        })
    }
    
    const printAgreement = useReactToPrint({
        content: () => formRef.current,
    })

    const handleSubmit = async (e) => {

        e.preventDefault();
        toggleSubmit();

        const response = await fetch('https://api.frankdispatchingservices.com/agreement-form',{
          method:'POST',
          body: JSON.stringify(form),
          headers: {
            'Content-Type': 'application/json'
          }
        })

      }

    const obligations = ['DISPATCHER agrees to handle paperwork, phone calls, and faxes from the BROKER or SHIPPER to tender commodities shipments to CARRIER for  transportation in interstate commerce by CARRIER between points and places within the scope of CARRIER’S operating authority.',
                            'DISPATCHER bears no financial or legal responsibility in the transaction between the SHIPPER or Broker and you the CARRIER.',
                            'Dispatcher will find ALL your loads so there are no mix ups.',
                            'DISPATCHER will:',
                            'Make 100 % effort to keep truck(s) loaded.',
                            'CARRIER will be contacted (by phone call/text/email) about EVERY load we find to offer, and the Driver will ACCEPT or REJECT the load.',
                            'Invoice the CARRIER at the time of service; also provide a copy of each Load Confirmation Sheet.',
                            'Payment is due to DISPATCHER at time of invoice.',]

    const requirements = [
                            'A complete W 9 Form. We have one you can fill out if you don’t have one.',
                            'A Copy of your motor Carrier Authority Form',
                            'A copy of your insurance Certificate',
    ]

    return (
        <div className='w-full times-new-roman'>

            <ToastContainer/>
            {!isSubmitted&&(
                <div>
                <div className='flex-col mt-16'>
                <p className='flex justify-center center-text'>
                    Frank Dispatching Services LLC
                </p>
                <p className='flex justify-center mb-8'>
                    Dispatcher To Carrier Agreement
                </p>
            </div>
            <div className='flex-col bg-gray-200 m-32 mt-0 rounded-back'>
                <form className='m-8 px-16 py-8' onSubmit={handleSubmit} method='POST'>
                    <p>This Agreement is made on this day of / to between” Frank Dispatching Services LLC hereafter referred to as Dispatcher and here in after</p>
                    

                    <input name='CompanyName' onChange={handleForm} type='text' className='mb-4 agreement-input w-full' placeholder='Company name..'></input>
                    
                    
                    <p className='mb-4'>Referred to as CARRIER. DISPATCHER is a transportation dispatcher handling the necessary paperwork between SHIPPERS and/or BROKERS and the CARRIER in order to secure” Freight” for said CARRIER.</p>
                    <p className='mb-4'>WHEREAS, CARRIER is a Motor CONTRACT Carrier subject to the jurisdiction of the ICC: NOW, THEREFORE, in consideration of the promises and covenants hereinafter contained it is mutually agreed by and between the parties hereto as follows:</p>
                    <p className='text-[32px] font-bold underline'>OBLIGATIONS OF DISPATCHER</p>
                    <ul className='list-disc ml-16 mt-8'>
                        {obligations.map((value, index)=>(
                            <li id={index} className='mt-2'>{value}</li>
                        ))}
                    </ul>
                    <p className='text-[24px] font-bold'>Frank Dispatching Services LLC</p>
                    <div className='flex'>
                        <div className='flex flex-col flex-[25%]'>
                            <p className='mt-4'>Country:</p>
                            <p className='mt-4'>Title:</p>
                            <p className='mt-4'>Name:</p>
                            <p className='mt-4'>Signature:</p>
                            <p className='mt-4'>Date:</p>
                            <p className='mt-4'>Payment Package:</p>
                        </div>
                        <div className='flex flex-col w-full flex-[75%]'>
                            <select className='mt-4 agreement-input' name='Country' onChange={handleForm}>
                                <option value='USA'>USA</option>
                                <option value='Canada'>Canada</option>
                            </select>
                            <input name='Title' onChange={handleForm} placeholder='Title..'className='mt-4 agreement-input'></input>
                            <input name='Name' onChange={handleForm} placeholder='Name..'className='mt-4 agreement-input'></input>
                            <input name='FullName' onChange={handleForm} placeholder='Type Full Name..'className='mt-4 agreement-input'></input>
                            <input name='Date' onChange={handleForm} type='Date' placeholder='DD-MM-YYYY'className='mt-5 agreement-input'></input>
                            <select name='PaymentPackage' onChange={handleForm} className='mt-5 agreement-input'>
                                <option value='$250'>$250</option>
                                <option value='5%'>5%</option>
                                <option value='5%'>7%</option>
                                <option value='5%'>10%</option>
                            </select>
                        </div>
                    </div>

                    <div className='mt-4'>
                        <p>We will also need the following from your company to start working for You:</p>
                        {requirements.map((value,index)=>(
                            <li key={index}>{value}</li>
                        ))}
                    </div>
                    
                    <p className='text-[24px] font-bold mt-4'>Carrier/ Company Profile Form</p>
                    <p className='mt-4'><b>Instructions:</b> Please Complete this form giving us all the information that pertains to you and your company. The better informed we are, the better we will be able to assist you. This form can be updated at any time by notifying us. This information is for our use only and will not be released to any third party without your express written permission.</p>
                    
                    <p className='mt-8 font-bold text-center text-[22px]'>Part 1: Carrier Profile Information Section</p>
                    <div className='flex'>
                        <div className='flex flex-col flex-[25%]'>
                            <p className='mt-4'>Company:</p>
                            <p className='mt-4'>D/B/A (If any):</p>
                            <p className='mt-4'>Email Address:</p>
                            <p className='mt-4'>Physical Address:</p>
                            <p className='mt-4'>CITY:</p>
                            <p className='mt-4'>STATE:</p>
                            <p className='mt-4'>ZIP:</p>
                            <p className='mt-4'>CELL:</p>
                            <p className='mt-4'>Emergency Contact:</p>
                            <p className='mt-4'>Phone:</p>
                            <p className='mt-4'>WEBSITE (if any)</p>
                            <p className='mt-4'>DOT#:</p>
                            <p className='mt-4'>MC#:</p>
                            <p className='mt-4'>SSN/EIN#:</p>
                            <p className='mt-4'>TWIC CERTIFIED:</p>
                            <p className='mt-4'>HAZMAT CERTIFIED:</p>
                        </div>
                        <div className='flex flex-col w-full flex-[75%]'>
                            <input name='CompanyName01' onChange={handleForm} placeholder='Company name..'className='mt-4 agreement-input'></input>
                            <input name='DBA' onChange={handleForm} placeholder='D/B/A (if any)'className='mt-4 agreement-input'></input>
                            <input name='Email' onChange={handleForm} placeholder='Email Address'className='mt-4 agreement-input'></input>
                            <input name='PhysicalAddress' onChange={handleForm} placeholder='Physicl Address'className='mt-4 agreement-input'></input>
                            <input name='City' onChange={handleForm} placeholder='CITY'className='mt-4 agreement-input'></input>
                            <input name='State' onChange={handleForm} placeholder='STATE..'className='mt-4 agreement-input'></input>
                            <input name='ZIP' onChange={handleForm} placeholder='ZIP'className='mt-4 agreement-input'></input>
                            <input name='Cell' onChange={handleForm} placeholder='CELL'className='mt-4 agreement-input'></input>
                            <input name='EmergencyContact' onChange={handleForm} placeholder='Emergency Contact'className='mt-4 agreement-input'></input>
                            <input name='Phone' onChange={handleForm} placeholder='Phone..'className='mt-4 agreement-input'></input>
                            <input name='Website' onChange={handleForm} placeholder='WEBSITE (if any)'className='mt-4 agreement-input'></input>
                            <input name='DOT' onChange={handleForm} placeholder='DOT#..'className='mt-4 agreement-input'></input>
                            <input name='MC' onChange={handleForm} placeholder='MC#..'className='mt-4 agreement-input'></input>
                            <input name='SSN_EIN' onChange={handleForm} placeholder='SSN/EIN#..'className='mt-4 agreement-input'></input>
                            <input name='TWIC_CERTIFIED' onChange={handleForm} placeholder='TWIC CERTIFIED..'className='mt-4 agreement-input'></input>
                            <input name='HAZMAT_CERTIFIED' onChange={handleForm} placeholder='HAZMAT CERTIFIED..'className='mt-4 agreement-input'></input>
                        </div>
                    </div>
                    <p className='mt-8 font-bold text-center text-[22px]'>Part 2: Equipment Section</p>
                    <div className='flex'>
                        <div className='flex flex-col flex-[25%]'>
                            <p className='mt-4'>For more than one truck use the multiple truck 48’ VAN/Reefer:</p>
                            <p className='mt-4'>53’ VAN/Reefer:</p>
                            <p className='mt-4'>FLATBED/STEPDECK/HOTSHOT Trailer Length:</p>
                            <p className='mt-4'>AIR RIDE:</p>
                            <p className='mt-4'>Truck/ Trailer Number:</p>
                        </div>
                        <div className='flex flex-col w-full flex-[75%]'>
                            <input name='Multiple_Truck' onChange={handleForm} placeholder="Multiple truck 48'"className='mt-4 agreement-input'></input>
                            <input name='VAN_Reefer' onChange={handleForm} placeholder="53' VAN/Reefer.." className='mt-12 agreement-input'></input>
                            <input name='Trailer_Length' onChange={handleForm} placeholder="Trailer Length" className='mt-4 agreement-input'></input>
                            <input name='AIR_RIDE' onChange={handleForm} placeholder='AIR RIDE..' className='mt-8 agreement-input'></input>
                            <input name='Truck_Trailer_Number' onChange={handleForm} placeholder='Truck/Trailer Number..' className='mt-4 agreement-input'></input>
                        </div>
                    </div>
                    <p className='mt-4'>*** ALL FLATBEDS MUST HALL FULL SECUREMENT EQUIPMENT TO INCLUDE TARPS***</p>
                    <div className='flex'>
                        <div className='flex flex-col flex-[25%]'>
                            <p className='mt-4'>Max Load Weight:</p>
                        </div>
                        <div className='flex flex-col w-full flex-[75%]'>
                            <input name='Max_Load' onChange={handleForm} placeholder="Max Load Weight.."className='mt-4 agreement-input'></input>
                        </div>
                    </div>

                    <p className='mt-8 font-bold text-center text-[22px]'>PART 3: Factoring Information</p>
                    
                    <p className='mt-4'><b>COMMENTS: </b>If you use a factoring service, please provide us with the following information. This will ensure that we only use brokers that are approved by your factoring company.</p>
                    <p className='mt-4'>FACTORING COMPANY Name: (N/A will have one by the end of this week)</p>
                    
                    <div className='flex'>
                        <div className='flex flex-col flex-[25%]'>
                            <p className='mt-4'>CONTACT:</p>
                            <p className='mt-4'>PHONE:</p>
                            <p className='mt-4'>FAX:</p>
                            <p className='mt-4'>WEBSITE:</p>
                            <p className='mt-4'>US BILLING ADDRESS:</p>
                            <p className='mt-4'>US CITY:</p>
                            <p className='mt-4'>US STATE:</p>
                            <p className='mt-4'>US ZIP Code:</p>
                            <p className='mt-4'>WEB PORTAL USERNAME:</p>
                            <p className='mt-4'>PASSWORD:</p>
                        </div>
                        <div className='flex flex-col w-full flex-[75%]'>
                            <input name='Contact' onChange={handleForm} placeholder="CONTACT.."className='mt-4 agreement-input'></input>
                            <input name='Phone01' onChange={handleForm} placeholder="PHONE.."className='mt-4 agreement-input'></input>
                            <input name='Fax01' onChange={handleForm} placeholder="FAX.."className='mt-4 agreement-input'></input>
                            <input name='Website01' onChange={handleForm} placeholder="WEBSITE.."className='mt-4 agreement-input'></input>
                            <input name='US_Billing_Address' onChange={handleForm} placeholder="US BILLING ADDRESS.."className='mt-4 agreement-input'></input>
                            <input name='US_City' onChange={handleForm} placeholder="US CITY.."className='mt-4 agreement-input'></input>
                            <input name='US_State' onChange={handleForm} placeholder="US STATE.."className='mt-4 agreement-input'></input>
                            <input name='US_ZIP' onChange={handleForm} placeholder="US ZIP Code.."className='mt-4 agreement-input'></input>
                            <input name='Web_Username' onChange={handleForm} placeholder="WEB PORTAL USERNAME.."className='mt-4 agreement-input'></input>
                            <input name='Web_Password' onChange={handleForm} placeholder="PASSWORD.."className='mt-4 agreement-input'></input>
                        </div>
                    </div>
                    
                    <div className='flex justify-center mt-8'>
                        <button type="submit"><SendButton/></button>
                    </div>
                </form>
            </div>
            </div>)}
        
        {
            isSubmitted && !printPDF && (
                <div className='flex'>
                    <div className='flex flex-col w-full'>
                        <p className='flex text-[32px] text-center justify-center mt-[175px] '>THANK YOU</p>
                        <p className='flex text-[18px] text-center justify-center mt-[20px] mb-32'>Your response is submitted succesfully.<br/>We will get back to you soon.</p>
                    </div>
                </div>
            )
        }
        {/*Print Section Below*/}
        
        {
            isSubmitted && printPDF &&(
                <div ref={formRef}>
                        <div className='flex-col mt-16'>
                    <p className='flex justify-center center-text'>
                        Frank Dispatching Services LLC
                    </p>
                    <p className='flex justify-center mb-8'>
                        Dispatcher To Carrier Agreement
                    </p>
                </div>
                <div className='flex-col bg-gray-200 m-32 mt-0 rounded-back'>
                    <form className='m-8 px-16 py-8' onSubmit={handleSubmit} method='POST'>
                        <p>This Agreement is made on this day of / to between” Frank Dispatching Services LLC hereafter referred to as Dispatcher and here in after</p>
                        
                        {/*1*/ }
                        <p className='mb-4 agreement-input w-full'>{form.CompanyName}</p>
                        
                        
                        <p className='mb-4'>Referred to as CARRIER. DISPATCHER is a transportation dispatcher handling the necessary paperwork between SHIPPERS and/or BROKERS and the CARRIER in order to secure” Freight” for said CARRIER.</p>
                        <p className='mb-4'>WHEREAS, CARRIER is a Motor CONTRACT Carrier subject to the jurisdiction of the ICC: NOW, THEREFORE, in consideration of the promises and covenants hereinafter contained it is mutually agreed by and between the parties hereto as follows:</p>
                        <p className='text-[32px] font-bold underline'>OBLIGATIONS OF DISPATCHER</p>
                        <ul className='list-disc ml-16 mt-8'>
                            {obligations.map((value, index)=>(
                                <li id={index} className='mt-2'>{value}</li>
                            ))}
                        </ul>
                        <p className='text-[24px] font-bold'>Frank Dispatching Services LLC</p>
                        <div className='flex'>
                            <div className='flex flex-col flex-[25%]'>
                                <p className='mt-4'>Country:</p>
                                <p className='mt-4'>Title:</p>
                                <p className='mt-4'>Name:</p>
                                <p className='mt-4'>Signature:</p>
                                <p className='mt-4'>Date:</p>
                                <p className='mt-4'>Payment Package:</p>
                            </div>
                            <div className='flex flex-col w-full flex-[75%]'>
                                {/** Country */}
                                <p className='mt-4 agreement-input'>
                                    {form.Country}
                                </p>
                                <p className='mt-4 agreement-input'>{form.Title}</p>
                                <p className='mt-4 agreement-input'>{form.Name}</p>
                                <p className='mt-4 agreement-input'>{form.FullName}</p>
                                <p className='mt-5 agreement-input'>{form.Date}</p>
                                <p className='mt-5 agreement-input'>
                                    {form.PaymentPackage}
                                </p>
                            </div>
                        </div>

                        <div className='mt-4'>
                            <p>We will also need the following from your company to start working for You:</p>
                            {requirements.map((value,index)=>(
                                <li key={index}>{value}</li>
                            ))}
                        </div>
                        
                        <p className='text-[24px] font-bold mt-4'>Carrier/ Company Profile Form</p>
                        <p className='mt-4'><b>Instructions:</b> Please Complete this form giving us all the information that pertains to you and your company. The better informed we are, the better we will be able to assist you. This form can be updated at any time by notifying us. This information is for our use only and will not be released to any third party without your express written permission.</p>
                        
                        <p className='mt-8 font-bold text-center text-[22px]'>Part 1: Carrier Profile Information Section</p>
                        <div className='flex'>
                            <div className='flex flex-col flex-[25%]'>
                                <p className='mt-4'>Company:</p>
                                <p className='mt-4'>D/B/A (If any):</p>
                                <p className='mt-4'>Email Address:</p>
                                <p className='mt-4'>Physical Address:</p>
                                <p className='mt-4'>CITY:</p>
                                <p className='mt-4'>STATE:</p>
                                <p className='mt-4'>ZIP:</p>
                                <p className='mt-4'>CELL:</p>
                                <p className='mt-4'>Emergency Contact:</p>
                                <p className='mt-4'>Phone:</p>
                                <p className='mt-4'>WEBSITE (if any)</p>
                                <p className='mt-4'>DOT#:</p>
                                <p className='mt-4'>MC#:</p>
                                <p className='mt-4'>SSN/EIN#:</p>
                                <p className='mt-4'>TWIC CERTIFIED:</p>
                                <p className='mt-4'>HAZMAT CERTIFIED:</p>
                            </div>
                            {/**Here We go Agian */}
                            <div className='flex flex-col w-full flex-[75%]'>
                                <p className='mt-4 agreement-input'>{form.CompanyName01}</p>
                                <p className='mt-4 agreement-input'>{form.DBA}</p>
                                <p className='mt-4 agreement-input'>{form.Email}</p>
                                <p className='mt-4 agreement-input'>{form.PhysicalAddress}</p>
                                <p className='mt-4 agreement-input'>{form.City}</p>
                                <p className='mt-4 agreement-input'>{form.State}</p>
                                <p className='mt-4 agreement-input'>{form.ZIP}</p>
                                <p className='mt-4 agreement-input'>{form.Cell}</p>
                                <p className='mt-4 agreement-input'>{form.EmergencyContact}</p>
                                <p className='mt-4 agreement-input'>{form.Phone}</p>
                                <p className='mt-4 agreement-input'>{form.Website}</p>
                                <p className='mt-4 agreement-input'>{form.DOT}</p>
                                <p className='mt-4 agreement-input'>{form.MC}</p>
                                <p className='mt-4 agreement-input'>{form.SSN_EIN}</p>
                                <p className='mt-4 agreement-input'>{form.TWIC_CERTIFIED}</p>
                                <p className='mt-4 agreement-input'>{form.HAZMAT_CERTIFIED}</p>
                            </div>
                        </div>
                        <p className='mt-8 font-bold text-center text-[22px]'>Part 2: Equipment Section</p>
                        <div className='flex'>
                            <div className='flex flex-col flex-[25%]'>
                                <p className='mt-4'>For more than one truck use the multiple truck 48’ VAN/Reefer:</p>
                                <p className='mt-4'>53’ VAN/Reefer:</p>
                                <p className='mt-4'>FLATBED/STEPDECK/HOTSHOT Trailer Length:</p>
                                <p className='mt-4'>AIR RIDE:</p>
                                <p className='mt-4'>Truck/ Trailer Number:</p>
                            </div>
                            {/**Some more */}
                            <div className='flex flex-col w-full flex-[75%]'>
                                <p className='mt-4 agreement-input'>{form.Multiple_Truck}</p>
                                <p className='mt-12 agreement-input'>{form.VAN_Reefer}</p>
                                <p className='mt-4 agreement-input'>{form.Trailer_Length}</p>
                                <p className='mt-8 agreement-input'>{form.AIR_RIDE}</p>
                                <p className='mt-4 agreement-input'>{form.Truck_Trailer_Number}</p>
                            </div>
                        </div>
                        <p className='mt-4'>*** ALL FLATBEDS MUST HALL FULL SECUREMENT EQUIPMENT TO INCLUDE TARPS***</p>
                        <div className='flex'>
                            <div className='flex flex-col flex-[25%]'>
                                <p className='mt-4'>Max Load Weight:</p>
                            </div>
                            <div className='flex flex-col w-full flex-[75%]'>
                                <p className='mt-4 agreement-input'>{form.Max_Load}</p>
                            </div>
                        </div>

                        <p className='mt-8 font-bold text-center text-[22px]'>PART 3: Factoring Information</p>
                        
                        <p className='mt-4'><b>COMMENTS: </b>If you use a factoring service, please provide us with the following information. This will ensure that we only use brokers that are approved by your factoring company.</p>
                        <p className='mt-4'>FACTORING COMPANY Name: (N/A will have one by the end of this week)</p>
                        
                        <div className='flex'>
                            <div className='flex flex-col flex-[25%]'>
                                <p className='mt-4'>CONTACT:</p>
                                <p className='mt-4'>PHONE:</p>
                                <p className='mt-4'>FAX:</p>
                                <p className='mt-4'>WEBSITE:</p>
                                <p className='mt-4'>US BILLING ADDRESS:</p>
                                <p className='mt-4'>US CITY:</p>
                                <p className='mt-4'>US STATE:</p>
                                <p className='mt-4'>US ZIP Code:</p>
                                <p className='mt-4'>WEB PORTAL USERNAME:</p>
                                <p className='mt-4'>PASSWORD:</p>
                            </div>
                            <div className='flex flex-col w-full flex-[75%]'>
                                <p className='mt-4 agreement-input'>{form.Contact}</p>
                                <p className='mt-4 agreement-input'>{form.Phone01}</p>
                                <p className='mt-4 agreement-input'>{form.Fax01}</p>
                                <p className='mt-4 agreement-input'>{form.Website01}</p>
                                <p className='mt-4 agreement-input'>{form.US_Billing_Address}</p>
                                <p className='mt-4 agreement-input'>{form.US_City}</p>
                                <p className='mt-4 agreement-input'>{form.US_State}</p>
                                <p className='mt-4 agreement-input'>{form.US_ZIP}</p>
                                <p className='mt-4 agreement-input'>{form.Web_Username}</p>
                                <p className='mt-4 agreement-input'>{form.Web_Password}</p>
                            </div>
                        </div>

                    </form>
                </div>
                </div>
            )

        }
        
        </div>
    )
}




const CompanyAgreement = () => {
  return (
    <div className='w-full'>
        <div className={`${styles.paddingX} ${styles.flexCenter} bg-black`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
          <hr/>
        </div>
      </div>
      <AgreementForm/>
      <Copyright/>
      <Developer/>
    </div>
  )
}

export default CompanyAgreement
