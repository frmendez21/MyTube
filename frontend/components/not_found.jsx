import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div>
    <h1 id="notfound">404 - Not Found!</h1>
    <Link to="/">
    <img className="form-logo" src={window.logo} />
    <figcaption id="notfound">Go Home</figcaption>
    </Link>
  </div>
);

export default NotFound;