import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom';
import Authorization from './pages/authorization';
import MainPage from './pages/main-page/main-page';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Dispatch } from './store/store';
import { toggleAuth } from './store/slices/authorization/authorization-slice';

function App() {
  const dispatch = Dispatch();
  const auth = useSelector(state => state.authorization.auth);
  useEffect(()=>{
    setInterval(()=>{
      if(!localStorage.getItem('access_token')) {
        dispatch(toggleAuth(false));
      }
    }, 500)
  })
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={auth ? <Navigate to='/main' />:<Authorization />}/>
        <Route path='/main' element={auth ? <MainPage /> : <Navigate to='/' />} />
      </Routes>

    </div>
  );
}

export default App;
