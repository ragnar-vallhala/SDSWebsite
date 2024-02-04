const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const mongoContact = require('mongoose')
const mongoAgreement = require('mongoose')

main().catch(err=>console.log(err));
async function main(){
    console.log('Connected to Database');
    await mongoContact.connect("mongodb+srv://ashutoshvishwakarma208:sds2023%40secure@cluster0.gltlzkh.mongodb.net/ContactForms?retryWrites=true&w=majority")
    await mongoAgreement.createConnection("mongodb+srv://ashutoshvishwakarma208:sds2023%40secure@cluster0.gltlzkh.mongodb.net/AgreementForms?retryWrites=true&w=majority")
}

const contactSchema = new mongoContact.Schema({
    Name: String,
    Email: String,
    Message: String
})
const ContactForm = mongoContact.model('ContactForm', contactSchema);

const AgreementSchema = new mongoAgreement.Schema({
    CompanyName:String,
    Country:String,
    Name: String,
    Title:String,
    FullName:String,
    Date:String,
    PaymentPackage:String,
    DBA:String,
    Email:String,
    PhysicalAddress:String,
    CompanyName01:String,
    City:String,
    State:String,
    ZIP:String,
    Cell:String,
    EmergencyContact:String,
    Phone:String,
    Website:String,
    DOT:String,
    MC:String,
    SSN_EIN:String,
    TWIC_CERTIFIED:String,
    HAZMAT_CERTIFIED:String,
    Multiple_Truck:String,
    VAN_Reefer:String,
    Trailer_Length:String,
    AIR_RIDE:String,
    Truck_Trailer_Number:String,
    Max_Load:String,
    Conatct:String,
    Phone01:String,
    Fax01:String,
    Website01:String,
    US_Billing_Addresss:String,
    US_City:String,
    US_State:String,
    US_ZIP:String,
    Web_Username:String,
    Web_Password:String,
})

const AgreementForm = mongoAgreement.model('AgeementForm', AgreementSchema);

const server = express();

server.use(cors());
server.use(bodyParser.json());


server.post('/contact-form', async (req,res)=>{
    let contactForm = new ContactForm();
    contactForm.Name = req.body.Name;
    contactForm.Email = req.body.Email;
    contactForm.Message = req.body.Message;
    const doc = await contactForm.save()
    console.log(doc);
    res.send(contactForm);
})

server.post('/agreement-form', async (req,res)=>{
    let agreementForm = new AgreementForm();
    agreementForm.Name=req.body.Name;
    agreementForm.Country=req.body.Country;
    agreementForm.CompanyName=req.body.CompanyName;
    agreementForm.Title=req.body.Title;
    agreementForm.FullName=req.body.FullName;
    agreementForm.Date=req.body.Date;
    agreementForm.PaymentPackage=req.body.PaymentPackage;
    agreementForm.DBA=req.body.DBA;
    agreementForm.Email=req.body.Email;
    agreementForm.PhysicalAddress=req.body.PhysicalAddress;
    agreementForm.CompanyName01=req.body.CompanyName01;
    agreementForm.City=req.body.City;
    agreementForm.State=req.body.State;
    agreementForm.ZIP=req.body.ZIP;
    agreementForm.Cell=req.body.Cell;
    agreementForm.EmergencyContact=req.body.EmergencyContact;
    agreementForm.Phone=req.body.Phone;
    agreementForm.Website=req.body.Website;
    agreementForm.DOT=req.body.DOT;
    agreementForm.MC=req.body.MC;
    agreementForm.SSN_EIN=req.body.SSN_EIN;
    agreementForm.TWIC_CERTIFIED=req.body.TWIC_CERTIFIED;
    agreementForm.HAZMAT_CERTIFIED=req.body.HAZMAT_CERTIFIED;
    agreementForm.Multiple_Truck=req.body.Multiple_Truck;
    agreementForm.VAN_Reefer=req.body.VAN_Reefer;
    agreementForm.Trailer_Length=req.body.Trailer_Length;
    agreementForm.AIR_RIDE=req.body.AIR_RIDE;
    agreementForm.Truck_Trailer_Number=req.body.Truck_Trailer_Number;
    agreementForm.Max_Load=req.body.Max_Load;
    agreementForm.Conatct=req.body.Conatct;
    agreementForm.Phone01=req.body.Phone01;
    agreementForm.Fax01=req.body.Fax01;
    agreementForm.Website01=req.body.Website01;
    agreementForm.US_Billing_Addresss=req.body.US_Billing_Addresss;
    agreementForm.US_City=req.body.US_City;
    agreementForm.US_State=req.body.US_State;
    agreementForm.US_ZIP=req.body.US_ZIP;
    agreementForm.Web_Username=req.body.Web_Username;
    agreementForm.Web_Password=req.body.Web_Password;
    const doc = agreementForm.save();
    res.send(doc);
})

server.listen(8080,()=>{
    console.log('Server Started')
})