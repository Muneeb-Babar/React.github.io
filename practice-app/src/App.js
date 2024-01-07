
import './App.css';
import Questions from './screens/Questions';

function App() {

  return (
    <div className="App">
      <header className="App-header">
      <div  style={{width:'100%'}}><h1 style={{backgroundColor:'skyblue'}}>Quiz App</h1>
      <Questions/>
      </div>
      </header>
    </div>
  );
}

export default App;
