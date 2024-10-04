import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import ProtectedRoute from './components/HigherOrderComponents/ProtectedRoute';
import Training from './components/Training/Training';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     
     <Routes>
     <Route path="/" element={<Home />} />

      <Route path='/home' element={<ProtectedRoute><Training/></ProtectedRoute>}/>


     </Routes>
     
     
     </BrowserRouter>
    </div>
  );
}

export default App;
