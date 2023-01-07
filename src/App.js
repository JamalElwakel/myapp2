
import './App.css';
import Nava from './component/Nava';
import Footer from './component/Footer';
import Home from './component/Home';
import { BrowserRouter as Allroutes, Routes, Route } from 'react-router-dom';
import Blog from './component/Blog';
import Contact from './component/Contact';
import Services from './component/Services';
import Category from './component/Categorypost';
import Addcatgory from './component/Addcatgory';
import Addpost from './component/Addpost';
import Dashbord from './component/Dashbord';
import Editcategory from './component/Editcategory';
import Editpost from './component/Editpost';
import Edituser from './component/Edituser';
import Mangecategory from './component/Mangecategory';
import Mangeuser from './component/Mangeuser';
import Post from './component/Post';
import Signin from './component/Signin';
import Singout from './component/Singout';
import About from './component/About';
import Notfound from './component/Notfound';

function App() {
  return (
   <>
   <Allroutes>
   <Nava/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/category' element={<Category/>}/>
      <Route path='/addcatgory' element={<Addcatgory/>}/>
      <Route path='/addpost' element={<Addpost/>}/>
      <Route path='/dashbord' element={<Dashbord/>}/>
      <Route path='/editcategory' element={<Editcategory/>}/>
      <Route path='/editpost' element={<Editpost/>}/>
      <Route path='/edituser' element={<Edituser/>}/>
      <Route path='/mangecategory' element={<Mangecategory/>}/>
      <Route path='/mangeuser' element={<Mangeuser/>}/>
      <Route path='/post' element={<Post/>}/>
      <Route path='/Signin' element={<Signin/>}/>
      <Route path='/Singout' element={<Singout/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='*' element={<Notfound/>}/>
    </Routes>
    <Footer/>
   </Allroutes>
   

   
   </>
  );
}

export default App;
