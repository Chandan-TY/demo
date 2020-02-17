import React, { Component } from "react";
import RecipeDetail from "./components/recipe-detail/RecipeDetail";
import RecipeList from "./components/recipe-list/RecipeList";

export default class RecipeApp extends Component {
  state = {
    recipes: [
      {
        id: 1,
        name: "jamun",
        ingredients: ["water", "sugar"]
      },
      {
        id: 2,
        name: "chapathi",
        ingredients: ["water", "salt"]
      },
      {
        id: 3,
        name: "dosa",
        ingredients: ["water", "dal"]
      }
    ],
    showDetail: false,
    selectedRecipe: null
  };
  getRecipe = recipe => {
    console.log(recipe);

    this.setState({
      selectedRecipe: recipe,
      showDetail: true
    });
  };
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-success">
          <span className="navbar-brand navbar-light mb-0 h1">Recipe App</span>
        </nav>
        <hr></hr>
        <div className="row container">
          <div className="col-md-4">
            <RecipeList
              sendRecipe={this.getRecipe}
              recipes={this.state.recipes}
            />
          </div>
          <div className="col-md-4">
            {this.state.showDetail ? (
              <RecipeDetail detailRecipe={this.state.selectedRecipe} />
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}
