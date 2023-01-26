import React from 'react';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Quotes from './components/Quotes';

class App extends React.PureComponent {
  render() {
    return (
      <>
        <header>
          <h1>Math Magicians</h1>
          <nav>
            <ul>
              <li>
                <Link to="/Home"> Home </Link>
              </li>
              <li>
                <Link to="/calculate"> Home </Link>
              </li>
              <li>
                <Link to="/quotes"> Quotes </Link>
              </li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/calculate" element={<Calculator />} />
          <Route path="/quotes" element={<Quotes />} />
        </Routes>
      </>
    );
  }
}
export default App;
