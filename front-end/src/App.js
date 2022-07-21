import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Blog from './pages/Blog';
import Aboutus from './pages/Aboutus';
import Navbar from './components/Home/Navbar/Navbar';
import Info from './pages/Info';




function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/'  element={<Home />} />
        <Route path='/Profile' element={<Profile/>} />
        <Route path='/Blog' element={<Blog/>} />
        <Route path='/Aboutus' element={<Aboutus/>} />
        <Route path='/Info' element={<Info/>}/>
      </Routes>
    </Router>
  );
}

export default App;
