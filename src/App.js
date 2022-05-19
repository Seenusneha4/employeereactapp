import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Addemployee from './Components/Addemployee';
import Searchemployee from './Components/Searchemployee';
import Header from './Components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Viewemployee from './Components/Viewemployee';

function App() {
  return (
   <div>
     <BrowserRouter>
     <Routes>
     <Route path="/" exact element={<Addemployee/>}/>
     <Route path="/search" exact element={<Searchemployee/>}/>
     <Route path="/view" exact element={<Viewemployee/>}/>



     </Routes>
     </BrowserRouter>
   </div>
  );
}

export default App;
