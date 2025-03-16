import './App.css'
import Landing from './Components/Landing'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Historial from './Pages/Historial'
import Blog from './Pages/Blog'
import PageNotFound from './Components/PageNotFound'
import BlogPost from './Blog/BlogPost'
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="*" element={<PageNotFound/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path='/historial' element={<Historial/>} />
        <Route path='/blog/:post' element={<BlogPost/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
