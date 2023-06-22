import './App.css';
import FormButton from './components/form-button';
import FormInput from './components/form-input';

function App() {
  return (
    <div className="App">
      <div className='wrap'>
        <div className='auth'>
          <FormInput/>
          <FormButton text="Отправить"/>
        </div>
      </div>
    </div>
  );
}

export default App;
