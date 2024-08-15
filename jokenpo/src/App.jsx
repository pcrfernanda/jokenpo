import React, { useState } from 'react';

const App = () => {
  const [userChoice, setUserChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [result, setResult] = useState('');
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  const options = ['Pedra', 'Papel', 'Tesoura'];

  const playGame = (choice) => {
    setUserChoice(choice);
    const randomChoice = options[Math.floor(Math.random() * options.length)];
    setComputerChoice(randomChoice);
    determineWinner(choice, randomChoice);
  };

  const determineWinner = (user, computer) => {
    if (user === computer) {
      setResult('Empate');
    } else if (
      (user === 'Pedra' && computer === 'Tesoura') ||
      (user === 'Papel' && computer === 'Pedra') ||
      (user === 'Tesoura' && computer === 'Papel')
    ) {
      setResult('O Usuário Ganhou');
      setUserScore(userScore + 1); 
    } else {
      setResult('O Computador Ganhou');
      setComputerScore(computerScore + 1); 
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px'}}>
      <h1>Jokenpo</h1>
      <div>
        <h2>Escolha uma das opções:</h2>
        {options.map((option) => (
          <button 
            key={option} 
            onClick={() => playGame(option)}
            style={{
              borderRadius: '10px',
              margin: '50px',
              padding: '20px 30px',
              fontSize: '16px',
              cursor: 'pointer',
            }}
          >
            {option}
          </button>
        ))}
      </div>

      {userChoice && computerChoice && (
        <div>
          <h3>Escolha do Usuário: {userChoice}</h3>
          <h3>Escolha do computador: {computerChoice}</h3>
          <h2>{result}</h2>

        </div>
      )}
      <div style={{ marginTop: '100px' }}>

        <h2>Pontuação:</h2>
        <p>Usuário: {userScore}</p>
        <p>Computador: {computerScore}</p>

      </div>
    </div>
  );
};

export default App;
