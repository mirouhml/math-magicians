import React from 'react';
import {
  BrowserRouter as Router,
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
            <Link to="/math-magicians">Home</Link>
          </li>
          <li>
            <Link to="/math-magicians/quotes">Quote</Link>
          </li>
          <li>
            <Link to="/math-magicians/calculator">Calculator</Link>
          </li>
        </ul>
      </div>
      <hr />
      <Routes>
        <Route path="/math-magicians" element={<Home />} />
        <Route path="/math-magicians/calculator" element={<CalculatorPage />} />
        <Route path="/math-magicians/quotes" element={<QuotesPage />} />
      </Routes>
    </div>
  </Router>
);

export default Header;
