
import './App.css';
import PersonInfo from './components/PersonInfo';
import PersonSkills from './components/PersonSkills';

function App() {
  return (
    <div className="App">
      <div className="container">
        <PersonInfo/>
        <PersonSkills/>
      </div>
    </div>
  );
}

export default App;
