import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import Users from './components/Users';

function App() {
  return (
    <Provider store={store}>
      <div className="container-fluid mt-5">
        <Users />
      </div>
    </Provider>
  );
}

export default App;
