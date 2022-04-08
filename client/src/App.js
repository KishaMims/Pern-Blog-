import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Blogs from './pages/blogs';
import SignUp from './pages/signup';
import Contact from './pages/contact';
import Create from './pages/createblog';
import BlogDetails from './pages/blogdetails';
import UpdatePost from './pages/updatepost';
import Search from './pages/search';

function App() {
  return (
   <Router>
     <Navbar/>
     <Routes>
       <Route path='/home' element={<Home />}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/contact' element={<Contact/>}/>
      <Route path='/blogs' element={<Blogs/>}/>
      <Route path='/sign-up' element={<SignUp/>}/>
      <Route path='/search' element={<Search/>}/>
      <Route path='/create-new-blog-post' element={<Create/>}/>
      <Route path='/blogs/:id' element={<BlogDetails/>}/>
      <Route path='/blogs/:id/update' element={<UpdatePost/>}/>
     </Routes>
   </Router>
  );
}

export default App;
