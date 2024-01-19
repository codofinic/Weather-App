import { cityNames } from './components/cityNames';
import './App.css';
import AutoComplete from './components/AutoComplete';
function App() {
  return (
    <div className="App">
     <AutoComplete options={cityNames}/>
    </div>
  );
}

export default App;
