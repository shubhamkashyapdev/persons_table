import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import "@fortawesome/fontawesome-free/css/all.css";
import "bootstrap/dist/css/bootstrap.min.css";
// components //
import PersonsTable from "./components/PersonsTable/PersonsTable";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

import Navbar from "./components/Navbar/Navbar";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/persons' component={PersonsTable} />
          <Route path='/' component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
