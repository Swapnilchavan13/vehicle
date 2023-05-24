import './App.css';
import { AddScenario } from './Components/AddScenario';
import { Sidenavbar } from './Components/Sidenavbar';

function App() {
  return (
    <div className="App">
      <Sidenavbar />
      <div className='secondmaindiv'>
        <AddScenario />
      </div>
    </div>
  );
}

export default App;
