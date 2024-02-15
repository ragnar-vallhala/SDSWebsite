
import { Routes, Route } from "react-router-dom";
import {Home, Aboutus, Services, NotFound, DayTime, NightTime, AutoTransport, Pricing, ContactUs, CompanyAgreement, Admin} from "./components";


const App = () => {
  
  
  return (
  
  <div>
    
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about-us" element={<Aboutus/>}></Route>
      <Route path="/services" element={<Services/>}></Route>
      <Route path="/night-time" element={<NightTime/>}></Route>
      <Route path="/day-time" element={<DayTime/>}></Route>
      <Route path="/auto-transport" element={<AutoTransport/>}></Route>
      <Route path="/pricing" element={<Pricing/>}></Route>
      <Route path="/contact" element={<ContactUs/>}></Route>
      <Route path='/agreement' element={<CompanyAgreement/>}></Route>
      <Route path='/admin' element={<Admin/>}></Route>
      <Route path="/*" element={<NotFound/>}></Route>
    </Routes>


  </div>
)};

export default App;
