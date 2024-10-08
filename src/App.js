import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import ProtectedRoute from './components/HigherOrderComponents/ProtectedRoute';
import Checkout from './components/Training/Checkout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Login from './components/Authentication/Login';


function App() {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: 1 } },
  });
  
  return (
    <QueryClientProvider client={queryClient}>
    <div className="App">
     <BrowserRouter>
     
     <Routes>
     <Route path="/" element={<Home />} />

      <Route path='/checkout' element={<ProtectedRoute><Checkout/></ProtectedRoute>}/>

      <Route path="/login" element={<Login />} />
     </Routes>
     
     
     </BrowserRouter>
    </div>
    </QueryClientProvider>
  );
}

export default App;
