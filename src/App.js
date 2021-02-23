import './App.css';
import Navbar from './components/Navbar/Navbar'
import History from './components/History/History'
import {TransacProvider} from './Context/TransactionContext'
import AddTransaction from './components/History/Transaction/AddTransaction/AddTransaction'
import Summary from './components/Summary/Summary'
import ChartSection from './components/Charts/ChartSection'
function App() {
  return (
    <TransacProvider>
      <div className="App">
        <Navbar/>
        <div className="main-section-container">
          <div className="main-history-section">
            <History/>
            <AddTransaction/>
          </div>   
          <div className ="summary">
            <Summary/>
          </div>
        {/* <LandingPage/> */}
          
         
        </div>

        
      
      </div>

    </TransacProvider>
    
  );
}

export default App;
