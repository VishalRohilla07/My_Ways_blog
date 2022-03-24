import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import Home from './components/home/Home';
import Header from './components/Header';
import DetailView from './components/post/DetailView';
import UpdateView from './components/post/UpdateView';
import DetailedView from './components/post/DetailedView';
import { BrowserRouter , Routes ,Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Register from './components/home/register/Register';
import Login from './components/home/login/Login';

function App() {
  const [user,setLoginUser] = useState({
  })
  return (
    <BrowserRouter>
      <Header />
      <Box
        style={{
          marginTop: 150,
          marginLeft: 50,
          fontSize: 30,
          fontWeight: 'bold',
        }}
      >
        <Routes>
          <Route path='/'element={<Home/>} />
          <Route path='/details' element={<DetailView/>} />
          <Route path='/detailed/:id' element={<DetailedView/>} />
          <Route path='/update/:id' element={<UpdateView/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />

        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
