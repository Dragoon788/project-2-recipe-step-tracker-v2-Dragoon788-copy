'use client';
import { useRecipeStepsContext } from '@/app/components/recipesteps/recipeStepContext';
import { useState } from 'react';
var counter: number = 0;

interface RecipeListProps {
  pageID: number;
}

export default function recipeList({ pageID }: RecipeListProps) {
  const { recipeSteps, setRecipeSteps } = useRecipeStepsContext();
  // Like in Add_recipe, have a local input state that manages the input in the text box;
  // On submit have the input call the setRecipes and update the global context
  const [input, setInput] = useState('');

  // Function to remove a recipe by index
  // A little more complex than our previous add_recipe, because our recipestep context is an dictionary of arrays
  const onAddRecipeStep = () => {
    const newRecipe = {
      stepText: input,
      stepID: recipeSteps[pageID]?.length || 0,
      // redudant since we alread place in proper array, but will be helpful
      pageID: pageID,
    };
    setRecipeSteps((existingRecipeSteps) => ({
      ...existingRecipeSteps,
      [pageID]: [...(existingRecipeSteps[pageID] || []), newRecipe],
    }));
    console.log(recipeSteps);
    counter = counter + 1;
  };
  // Everything else is the same as add_recipe
  return (
    <>
      {/* Taken from code in our Week 6 Lecture 2 Activity */}
      <form
        className="flex flex-col items-left m-4"
        onSubmit={(e) => {
          e.preventDefault();
          onAddRecipeStep();
          setInput('');
        }}
      >
        <label htmlFor="recipe-step" className="m-3">
          Add Recipe Step:
        </label>
        <input
          id="recipe-step"
          name="step"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></input>
        <button
          className="m-5 inline-block bg-blue-700 rounded-full px-3 py-1 text-sm font-semibold text-white hover:opacity-50"
          id="add-btn"
          type="submit"
        >
          Add
        </button>
      </form>
    </>
  );
}
