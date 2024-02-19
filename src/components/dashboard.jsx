import React, { useState, useRef } from 'react'
import { FindButton, PrintButton } from './'
import { useReactToPrint } from 'react-to-print';


function Table({ theadData, tbodyData, entryCount }) {
    return (
        <table className='table mt-8'>
            <thead>
                <tr>
                    {theadData.map((heading, index) => {
                        return (index < entryCount) ? (<th key={heading} className='td px-2' >{heading}</th>) : ""
                    })}
                </tr>
            </thead>
            <tbody>
                {tbodyData.map((row, index) => {
                    return <tr key={index}>
                        {theadData.map((key, index) => {
                            return (index < entryCount) ? (<td key={row[0]} className='td px-2'>{row[key]}</td>) : ""
                        })}
                    </tr>;
                })}
            </tbody>
        </table>
    );
}


const ContactPage = () => {

    const [form, setForm] = useState({});

    const [contactData, getData] = useState([{ "Field": 'Data' }]);

    const getHeadings = (data) => {
        return Object.keys(data[0]);
    }

    const handleForm = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let searchField = form.field;
        let searchValue = form.value;
        let search = JSON.stringify({ [searchField]: searchValue });

        if (search == '{"":""}') {
            search = '';
        }

        const response = await fetch('https://api.frankdispatchingservices.com/admin-getContact', {
            method: 'POST',
            body: search,
            headers: {
                'Content-Type': 'application/json'
            }
        })

        let data = await response.json();
        getData(data);

    }



    return (
        <div className='flex flex-col w-full'>
            <div>
                <form className='flex w-full' onSubmit={handleSubmit} method='POST'>
                    <input name='field' onChange={handleForm} placeholder='field..' className='login-field mx-8'></input>
                    <input name='value' onChange={handleForm} placeholder='value..' className='login-field'></input>
                    <input name='cols' type='number' defaultValue='1' onChange={handleForm} placeholder='number of columns..' className='login-field mx-8'></input>
                    <button type='submit' className='mt-16 ml-4'><FindButton /></button>
                </form>
            </div>

            <div>
                {contactData && (<Table theadData={getHeadings(contactData)} tbodyData={contactData} entryCount={form.cols} />)}
                {console.log(form.cols)}
            </div>
        </div>
    )
}

const AgreementPage = () => {
    const [form, setForm] = useState({});

    const [contactData, getData] = useState([{ "Field": 'Data' }]);

    const getHeadings = (data) => {
        return Object.keys(data[0]);
    }

    const handleForm = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let searchField = form.field;
        let searchValue = form.value;
        let search = JSON.stringify({ [searchField]: searchValue });

        if (search == '{"":""}') {
            search = '';
        }

        const response = await fetch('https://api.frankdispatchingservices.com/admin-getAgreement', {
            method: 'POST',
            body: search,
            headers: {
                'Content-Type': 'application/json'
            }
        })

        let data = await response.json();
        getData(data);

    }



    return (
        <div className='flex flex-col w-full'>
            <div>
                <form className='flex w-full' onSubmit={handleSubmit} method='POST'>
                    <input name='field' onChange={handleForm} placeholder='field..' className='login-field mx-8'></input>
                    <input name='value' onChange={handleForm} placeholder='value..' className='login-field'></input>
                    <input name='cols' type='number' onChange={handleForm} defaultValue='1'  placeholder='number of columns..' className='login-field mx-8'></input>
                    <button type='submit' className='mt-16 ml-4'><FindButton /></button>
                </form>
            </div>

            <div>
                {contactData && (<Table theadData={getHeadings(contactData)} tbodyData={contactData} entryCount={form.cols} />)}
                {console.log(contactData)}
            </div>
        </div>
    )
}

const PrintPage = () => {

    const [formID, setForm] = useState({});

    const formRef = useRef();

    const [form, getData] = useState({ "Field": 'Data' });

    const printAgreement = useReactToPrint({
        content: () => formRef.current,
    })

    const handleForm = (e) => {
        setForm({
            ...formID,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {

        e.preventDefault();
        let id = formID.id;
        const response = await fetch('https://api.frankdispatchingservices.com/admin-getAgreement', {
            method: 'POST',
            body: JSON.stringify({ _id: id }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        let data = await response.json();
        if (data.length != 0) {
            getData(data[0]);
        }
        else {
            getData({ '': '' })
        }

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


    return (<div className='flex flex-col w-full'>
        <div>
            <form className='flex' onSubmit={handleSubmit} method='POST'>
                <input name='id' onChange={handleForm} placeholder='id..' className='login-field mx-8'></input>
                <button type='submit' className='mt-16 ml-4'><FindButton /></button>
                <button onClick={printAgreement} className='mt-16 ml-4'><PrintButton /></button>
            </form>

        </div>
        {(<div className='flex'>

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

                        {/*1*/}
                        <p className='mb-4 agreement-input w-full'>{form.CompanyName}</p>


                        <p className='mb-4'>Referred to as CARRIER. DISPATCHER is a transportation dispatcher handling the necessary paperwork between SHIPPERS and/or BROKERS and the CARRIER in order to secure” Freight” for said CARRIER.</p>
                        <p className='mb-4'>WHEREAS, CARRIER is a Motor CONTRACT Carrier subject to the jurisdiction of the ICC: NOW, THEREFORE, in consideration of the promises and covenants hereinafter contained it is mutually agreed by and between the parties hereto as follows:</p>
                        <p className='text-[32px] font-bold underline'>OBLIGATIONS OF DISPATCHER</p>
                        <ul className='list-disc ml-16 mt-8'>
                            {obligations.map((value, index) => (
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
                            {requirements.map((value, index) => (
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

        </div>)}
    </div>)
}


const Dashboard = () => {
    /**section 0 means we are in contact form
     * and section  1 is the agreement form
     */

    const [section, setSection] = useState(0);

    const EnableContact = async () => {
        setSection(0);
    }

    const EnableAgreement = () => {
        setSection(1);
    }

    const EnablePrint = () => {
        setSection(2);
    }

    return (
        <div className='bg-gray-100' style = {{height:"70.5vh"}}>
            <p className='center-text'>DASHBOARD</p>
            <div className='flex w-full'>
                <div className='flex flex-col w-[30%]'>
                    <button onClick={EnableContact}><p className={`dashboard-tab ${section == 0 ? `bg-gray-300` : ``}`}>Contact Forms</p></button>
                    <button onClick={EnableAgreement}><p className={`dashboard-tab ${section == 1 ? `bg-gray-300` : ``}`}>Agreements Forms</p></button>
                    <button onClick={EnablePrint}><p className={`dashboard-tab ${section == 2 ? `bg-gray-300` : ``}`}>Print Agreement</p></button>
                </div>
                <div className='w-[90%]'>
                    {(section == 0) && (
                        <div>
                            <ContactPage />
                        </div>
                    )}
                    {(section == 1) && (
                        <div>
                            <AgreementPage />
                        </div>
                    )}
                    {(section == 2) && (
                        <div>
                            <PrintPage />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Dashboard
