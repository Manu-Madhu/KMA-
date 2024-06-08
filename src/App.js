import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Home from './pages/home/Home'
import Form from './pages/form/Form';
import TeamsAndConditions from './pages/extra/TeamsAndConditions';
import Contact from './pages/extra/Contact';
import PrivacyAndPolicy from './pages/extra/PrivacyAndPolicy';
import RefundPolicy from './pages/extra/RefundPolicy';
import ShopDelivery from './pages/extra/ShopDelivery';
import Success from './components/status/Success';
import Failure from './components/status/Failure';
import Admin from './pages/admin/Admin';
import Table from './components/admin/Table';
import 'react-tooltip/dist/react-tooltip.css'


function App() {
  return (
    // bg-gradient-to-r from-[#9FA5D5]/50 to-[#E8F5C8]/50
    <div className="">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/registration' element={<Form />} />
          <Route path='/TeamsAndConditions' element={<TeamsAndConditions />} />
          <Route path='/ShopDelivery' element={<ShopDelivery />} />
          <Route path='/RefundPolicy' element={<RefundPolicy />} />
          <Route path='/PrivacyAndPolicy' element={<PrivacyAndPolicy />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/success' element={<Success />} />
          <Route ath='/failure' element={<Failure />} />
          <Route path='/kma' element={<Admin />} >
            <Route exact path='admin/Kma_Admin-1234$' element={<Table/>}/>
          </Route >
        </Routes>
      </Router>
    </div>
  );
}

export default App;
