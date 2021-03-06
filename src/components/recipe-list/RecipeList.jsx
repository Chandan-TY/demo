import React from "react";

export default function RecipeList(props) {
  return (
    
      <div>
        {props.recipes.map(recipe => {
          return (
            <div
              className="card"
              key={recipe.id}
              onClick={() => props.sendRecipe(recipe)}
            >
              <div className="card-header">{recipe.id}</div>
              <div className="card-body">
                <blockquote className="blockquote mb-0">
                  <p>{recipe.id}</p>
                    <cite title="Source Title">{recipe.name}</cite>
                </blockquote>
              </div>
            </div>
          );
        })}
      </div>

  );
}
