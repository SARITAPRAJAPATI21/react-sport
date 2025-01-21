
import './App.scss';
import { Route,Routes,HashRouter} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Join from './components/Join';
import Favq from './components/Favq';
import Login from './components/Login';
import Donation from './components/Donation';
import Footer from './components/Footer';



const App=()=> {
  return (
   <>
 <Navbar/>
 
 <HashRouter>
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/join' element={<Join/>}></Route>
    <Route path='/favq' element={<Favq/>}></Route>
    <Route path='/donation' element={<Donation/>}></Route>
  </Routes>
 </HashRouter>

 <Footer/>
 
      
   
 
   </>
  );
}

export default App;
