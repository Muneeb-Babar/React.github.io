import { PersistGate } from 'redux-persist/integration/react'
import './App.css';
import Router from './config/router';
import {store,persistor} from './Store';
import {Provider} from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <div className="App">
      <Router/>
    </div>
    </PersistGate>
  </Provider>

  );
}

export default App;
