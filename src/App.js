import logo from './logo.svg';
import './App.css';
import SettingJokes from './components/SettingJokes';
import  SettingContext  from './context/settingsContext';

function App() {
  
  
  

  return (
    <div className="App">
      <SettingContext>
        <SettingJokes/>
      </SettingContext>      
    </div>
  );
}

export default App;
