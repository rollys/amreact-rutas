import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import TopicList from "./pages/topic-list";
import NotFound from "./pages/not-found";
import NavBar from './components/nav-bar'
import TopicDetail from "./components/topic-detail";


function App() {
  return (
    <div className="">
      <h1>RUTAS</h1>
      <Router>
        <NavBar />
        <Switch>
          {/* <Route exact path="/" component={NotFound} /> */}
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route exact path="/topic-list" component={TopicList} />
          <Route path='/topic-list/:id' component={TopicDetail} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
