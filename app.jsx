import React, { useState } from 'react';
import './App.css';

// evaluacion F
const Card = ({ animalName, animalDescription }) => (
  <div className="card">
    <h2>Información del Animal</h2>
    <p><strong>Nombre:</strong> {animalName}</p>
    <p><strong>Descripción:</strong> {animalDescription}</p>
  </div>
);

const App = () => {
  const [animalName, setAnimalName] = useState('');
  const [animalDescription, setAnimalDescription] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validaciones
    if (animalName.length < 3 || animalName.trimStart() !== animalName || animalDescription.length < 6) {
      setError('Por favor chequea que la información sea correcta');
      setSubmitted(false);
    } else {
      setError('');
      setSubmitted(true);
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="animalName">Nombre del Animal:</label>
          <input
            type="text"
            id="animalName"
            value={animalName}
            onChange={(e) => setAnimalName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="animalDescription">Descripción del Animal:</label>
          <input
            type="text"
            id="animalDescription"
            value={animalDescription}
            onChange={(e) => setAnimalDescription(e.target.value)}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {submitted && <Card animalName={animalName} animalDescription={animalDescription} />}
    </div>
  );
};

export default App;