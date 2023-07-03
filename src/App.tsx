import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { ChakraProvider } from '@chakra-ui/react'
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
      
   
  );
}

export default App;
