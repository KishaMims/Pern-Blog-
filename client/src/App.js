import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/index';
import About from './pages/about';
import Blogs from './pages/blogs';
import SignUp from './pages/signup';
import Contact from './pages/contact';
import Create from './pages/createblog';

function App() {
  return (
   <Router>
     <Navbar/>
     <Routes>
       <Route exact path='/' element={<Home />}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/contact' element={<Contact/>}/>
      <Route path='/blogs' element={<Blogs/>}/>
      <Route path='/sign-up' element={<SignUp/>}/>
      <Route path='/create-new-blog-post' element={<Create/>}/>
     </Routes>
   </Router>
  );
}

export default App;
