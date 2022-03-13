import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import Signup from './Pages/Signup'
import Signin from './Pages/Signin'
import Blog from './Pages/Blog'
import Article from './Pages/Article'
import Test from './Pages/Test'
import ShowCase from './Pages/Blog/ShowCase.jsx'
function App() {
  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/register' element={<Signup />} />
      <Route path='/login' element={<Signin />} />
      <Route path='/articles' element={<Blog />} />
      <Route path='/article' element={<Article />} />
      <Route path='/test' element={<Test />} />
      <Route path='/showcase' element={<ShowCase />} />
    </Routes>
  </BrowserRouter>
}

export default App