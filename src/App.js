import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import Signup from './Pages/Signup'
import Signin from './Pages/Signin'
import Blog from './Pages/Blog'
import ShowCase from './Pages/Blog/ShowCase.jsx'
import Editor from './Components/Editor/Editor';
import SingleArticle from './Components/Blog/SingleArticle/SingleArticle'
import StudentDashboard from './Components/Dashboards/Student/Student';
import Messenger from './Components/Messenger/Messenger'
import ChatLogin from './Components/Auth/Chat/Login'
import ChatSignin from './Components/Auth/Chat/Signin'
import Workspace from './Components/Workspace/Tools/Tools';
import EditArticles from './Components/Blog/EditArticles'
import Validate from './Components/Auth/App/Validate'

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/register' element={<Signup />} />
      <Route path='/login' element={<Signin />} />
      <Route path='/articles' element={<Blog />} />
      <Route path='/showcase' element={<ShowCase />} />
      <Route path="/edit" element={<Editor />} />
      <Route path='/single' element={<SingleArticle />} />
      <Route path='/student' element={<StudentDashboard />} />
      <Route path='/messaging' element={<Messenger />} />
      <Route path='/chatl' element={< ChatLogin />} />
      <Route path='/chats' element={< ChatSignin />} />
      <Route path='/workspace' element={<Workspace />} />
      <Route path='/editarticle' element={<EditArticles />} />
      <Route path='/validate' element={<Validate />} />

    </Routes>
  </BrowserRouter>
}

export default App