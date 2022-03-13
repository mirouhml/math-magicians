import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  React.useEffect(() => {
    const prevTitle = document.title;
    document.title = 'Math Magicians';

    return () => {
      document.title = prevTitle;
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Math Magicians
        </h1>
      </header>
    </div>
  );
}

export default App;
