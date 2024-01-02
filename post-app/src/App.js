
import './App.css';
import Dashboard from './views/Dashboard';
import ContactUs from './views/ContactUs';
import AboutUs from './views/AboutUs';
import { useState } from 'react';
import FbPost from './components/FbPost';



function App() {
  // const [screen,setScreen] = useState('dashboard')

  return (
    <div className="App">
{/* <div style={{marginTop:'50px'}}>
      <button onClick={()=>setScreen('dashboard')}>Dashboard</button>
      <button  onClick={()=>setScreen('contactUs')}>Contact Us</button>
      <button  onClick={()=>setScreen('aboutUs')}>About Us</button>
      </div>
      {screen === 'dashboard' && <Dashboard />}
      {screen === 'contactUs' && <ContactUs />}
      {screen === 'aboutUs' && <AboutUs />}  */}


      <FbPost/>


    </div>
  );
}

export default App;
