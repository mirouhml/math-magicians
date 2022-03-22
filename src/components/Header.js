import React from 'react';
import {
  HashRouter as Router,
  Route,
  Routes,
  Link,
} from 'react-router-dom';
import Home from './HomePage';
import QuotesPage from './QuotesPage';
import CalculatorPage from './CalculatorPage';

const toggleBackground = (e) => {
  e.target.parentNode.parentNode.childNodes.forEach((child) => {
    if (child.classList.contains('active-background')) {
      const child2 = child;
      child2.className = '';
    }
  });
  e.target.parentNode.className = 'active-background';
};

const Header = () => (
  <Router>
    <div className="main">
      <div className="header">
        <h1>Math Magicians</h1>
        <ul>
          <li className="active-background">
            <Link to="/" id="home" onClick={toggleBackground}>Home</Link>
          </li>
          <li>
            <Link to="/calculator" id="calculator" onClick={toggleBackground}>Calculator</Link>
          </li>
          <li>
            <Link to="/quotes" id="quotes" onClick={toggleBackground}>Quotes</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<CalculatorPage />} />
        <Route path="/quotes" element={<QuotesPage />} />
      </Routes>
    </div>
  </Router>
);

export default Header;
