import './App.css';
import Navbar from './components/Navbar/Navbar'
import History from './components/History/History'
import {TransacProvider} from './Context/TransactionContext'
import AddTransaction from './components/History/Transaction/AddTransaction/AddTransaction'
import Summary from './components/Summary/Summary'
import ChartSection from './components/Charts/ChartSection'
import LandingPage from './components/LandingPage/LandingPage';
import Sidebar from './components/Sidebar/Sidebar';
import PricingSection from './components/Pricing/PricingSection';
import ContactForm from './components/ContactForm/ContactForm';

function App() {
  return (
    <TransacProvider>
      <div className="App">
        {/* <Sidebar/> */}
        <Navbar/>     
        <LandingPage/>
        {/* <PricingSection/> */}
        <ContactForm/>
        <div className="main-section-container">
          <div className="main-history-section">
            <History/>
            <AddTransaction/>
          </div>   
          <div className ="summary">
            <Summary/>
          </div>
        </div> 

        
      
      </div>

    </TransacProvider>
    
  );
}

export default App;
