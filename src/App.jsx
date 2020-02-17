import React from "react";
import RecipeApp from "./RecipeApp";
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return <Router basename={'/simpleapp'}>
    <Route path='/' component={RecipeApp} />
  </Router>
}

export default App;
