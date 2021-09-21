import { useState, useRef } from 'react';
import useRandomJoke from './useRandomJoke';
import './App.css';

function App() {

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);


  const [firstName, setFirstName] = useState('Asher');
  const [lastName, setLastName] = useState('Harrison');

  const joke = useRandomJoke(firstName, lastName);

  const generateJoke = (e) => {
    e.preventDefault();
    setFirstName(firstNameRef.current.value);
    setLastName(lastNameRef.current.value);
  }

  
  return (
    <div className="App">
      <h1>Generador de Bromas!</h1>
      <form>
        <input 
          type="text"
          placeholder='inserta tu nombre' 
          className="form-control"
          ref={firstNameRef}
        />
        <input 
          type="text" 
          placeholder='inserta tu apellido' 
          className="form-control" 
          ref={lastNameRef}
        />
        <button onClick={generateJoke}>Agregar</button>
      </form>

      <div className="form-group">
        {joke}
      </div>
    </div>
  );
}

export default App;
