import React from 'react';
import {Routes, Route} from "react-router-dom"
import MyLayout from './Layouts/MyLayout/MyLayout';
import HomePage from './components/HomePage/container/HomePage';
import About from './components/About/component/container/About';

function App() {
  return (
    <div>
      <MyLayout>
        <Routes>
          <Route path='/home' element={<HomePage/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </MyLayout>
    </div>
  );
}

export default App;
