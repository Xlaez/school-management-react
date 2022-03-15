import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import Signup from './Pages/Signup'
import Signin from './Pages/Signin'
import Blog from './Pages/Blog'
import Article from './Pages/Article'
import Test from './Pages/Test'
import ShowCase from './Pages/Blog/ShowCase.jsx'
import Editor from './Components/Editor/Editor';
import SingleArticle from './Components/Blog/SingleArticle/SingleArticle'
import StudentDashboard from './Components/Dashboards/Student/Student';

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
      <Route path="/edit" element={<Editor />} />
      <Route path='/single' element={<SingleArticle />} />
      <Route path='/student' element={<StudentDashboard />} />

    </Routes>
  </BrowserRouter>
}

export default App