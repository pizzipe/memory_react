import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import './App.css';
import Home from './Home.js';
import About from './About.js';
import Navbar from './Navbar.js';


class App extends Component {
  render() {
    return (
		<div className="App">
		    <header className="App-header">
		        <BrowserRouter>
		            <div>
		                <Navbar />
		                <Route exact path="/" component={Home} />
		                <Route exact path="/about" component={About} />
		            </div>
		        </BrowserRouter>
		    </header>
		</div>
    );
  }
}

export default App;
