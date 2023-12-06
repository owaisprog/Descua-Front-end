import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Category from './admin/category'
import Prompts from './admin/prompt';

import './App.css'
import Home from './Home';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/category' element={<Category/>} />
      <Route path='/prompts' element={<Prompts/>} />
      
    </Routes>
    </BrowserRouter>
  )
}

export default App

