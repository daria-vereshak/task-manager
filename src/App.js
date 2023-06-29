import './App.css';
import {Routes, Route} from 'react-router-dom';
import Authorization from './pages/authorization';
import MainPage from './pages/main-page/main-page';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Authorization />}/>
        <Route exact path='/main' element={<MainPage />} />
      </Routes>

    </div>
  );
}

export default App;
