import React from 'react';
import Navbar from './components/Navbar';
import MainPage from './pages/MainPage';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
      <Navbar />
      <MainPage />
    </>
  );
}

export default App;
