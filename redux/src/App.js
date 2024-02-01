
import './App.css';
import Header from './components/Header';
import Router from './config/router';
import store from './Store';
import {Provider} from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <Router/>
    </div>
  </Provider>

  );
}

export default App;
