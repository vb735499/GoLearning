import { FC, useState, useEffect } from 'react';
import logo from './img/logo.svg';
import test from './api/test'
import './css/App.css';

const App:FC = () => {
  const [helloMsg, setHelloMsg] = useState<string>('');

  const handleGetHelleMsg = async () => {
    const result = await test._get();
    setHelloMsg(result);
  }

  useEffect(() => {
    handleGetHelleMsg();
  }, [helloMsg]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          {helloMsg}
        </a>
      </header>
    </div>
  );
}


export default App;
