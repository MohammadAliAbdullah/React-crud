import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './component/about/About';
// import Contact from './component/contact/Contact';
import Shop from './component/shop/Shop';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router } from '../node_modules/react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Contact from './component/contact/Contact';

const myroute = (
  <Router>
    <div className="container">
      <nav className="navbar navbar-expand-sm justify-content-end">
        <Link className="nav-link" to="/">Logo</Link>
        <a className="ml-auto ml-5"></a>
        <div className="collapse navbar-collapse flex-grow-0">
          <ul className="navbar-nav">
            <li><Link className="nav-link active" to="/">Home</Link></li>
            <li><Link className="nav-link" to="/about">About</Link></li>
            <li><Link className="nav-link" to="/contact">Contact</Link></li>
            <li><Link className="nav-link" to="/shop">Shop</Link></li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div >
      </nav>
    </div>

    <Route exact path="/" component={App} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    <Route path="/shop" component={Shop} />
  </Router>
)

ReactDOM.render(
  // <serviceWorker>
  //   <App/>
  // </serviceWorker>,
  myroute, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
