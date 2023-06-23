import './App.css';
import {Routes, Route} from 'react-router-dom';
import Auth from './components/auth';
import Authorization from './pages/authorization';
import MainPage from './pages/main-page/main-page';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Authorization />}/>
        <Route path='/main' element={<MainPage />} />
      </Routes>

    </div>
  );
}

export default App;
