
import PrincipalContainer from './components/principalContainer';
import  {SettingContext}  from 'context/settingsContext';

function App() {

  return (
    <>
      <SettingContext>
        <PrincipalContainer/>
      </SettingContext>      
    </>
  );
}

export default App;
