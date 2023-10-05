import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import Categories from './component/Categories';
import Irprime from './component/Irprime';
import Events from './component/Events';
import Bookstore from './component/Bookstore';
import Newsletter from './component/Newsletter';
import Video from './component/Video';
import Logo from './component/Logo';
import Nav from './component/Nav'
import Sublist from './component/Sublist';


function App() {
  return (
    <>
  
     <Logo />
     <hr />
     <Nav />
  
     <Sublist />
     <br />
     <br />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/irprime" element={<Irprime />} />
        <Route path="/events" element={<Events />} />
        <Route path="/bookstore" element={<Bookstore />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/video" element={<Video />} />

      </Routes>
    </>
  );
}


export default App;
