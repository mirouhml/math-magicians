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

const Header = () => (
  <Router>
    <div className="main">
      <div className="header">
        <h1>Math Magicians</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/calculator">Calculator</Link>
          </li>
          <li>
            <Link to="/quotes">Quotes</Link>
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
