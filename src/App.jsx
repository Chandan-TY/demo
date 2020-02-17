import React from "react";
import RecipeApp from "./RecipeApp";


function App() {
  return <Router basename={'/simpleapp'}>
    <Route path='/' component={RecipeApp} />
  </Router>
}

export default App;
