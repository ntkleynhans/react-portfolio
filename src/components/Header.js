import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ children }) => {

  const style = {
    display: 'inline-block',
    margin: 10,
    marginBottom: 30
  };

  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">Portfolio</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-item nav-link" to="/">Home</Link>
              <Link className="nav-item nav-link" to="/jokes">Jokes</Link>
              <Link className="nav-item nav-link" to="/music-master">Music Master</Link>
              <Link className="nav-item nav-link" to="/odds-or-even">Odds or Evens</Link>
              <Link className="nav-item nav-link" to="/reaction">Reaction</Link>
            </div>
          </div>
        </nav>
      </div>
      { children }
    </div>
  )
}

/*
  <h3 style={style}><Link to="/">Home</Link></h3>
  <h3 style={style}><Link to="/jokes">Jokes</Link></h3>
  <h3 style={style}><Link to="/music-master">Music Master</Link></h3>
  <h3 style={style}><Link to="/odds-or-even">Odds or Evens</Link></h3>
  <h3 style={style}><Link to="/reaction">Reaction</Link></h3>
*/

export default Header;
