import { Route, Routes } from 'react-router-dom';
import Demo from './components/demo';
import Home from './components/home';
import Main from './components/main';
import Navbar from './components/navbar';
import Signin from './components/signin';
import Signup from './components/signup';
import Test from './components/test';
import Header from './components/header';
import Pricing from './components/pricing';


function App() {
  return (
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/demo' element={<Demo/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
  );
}

export default App;
