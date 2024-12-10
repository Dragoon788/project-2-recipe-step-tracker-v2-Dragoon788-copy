'use client';
import { useRecipeContext } from '@/app/components/recipe/recipeContext';
import Recipe from '@/app/components/recipe/recipeContext';
import { useState } from 'react';
var counter: number = 0;

export default function addRecipe() {
  const { setRecipe, recipes } = useRecipeContext();
  // Must have separate input state to manage the visual of the input text box, which then gets submitted to setRecipe when submit is called on form
  // IDEA Inspired by our Week 6 lecture 2 in-class activity
  const [input, setInput] = useState('');

  // Function to remove a recipe by index
  const onAddRecipe = () => {
    const newRecipe = {
      recipeName: input,
      recipeID: counter,
    };
    // We have to destructure the existing recipes state because we can't straight up modify the state
    setRecipe((existingRecipes: Recipe[]) => [...existingRecipes, newRecipe]);
    counter = counter + 1;
  };

  return (
    <>
      {/* Modified code from our Week 6 Lecture 2 In-class Activity */}
      {/* We are making an input form and button that will control all the adding of recipes */}
      <form
        className="flex flex-col items-center m-4"
        onSubmit={(e) => {
          e.preventDefault();
          onAddRecipe();
          setInput('');
        }}
      >
        <label htmlFor="recipe-step" className="m-3">
          Recipe Name:
        </label>
        <input
          id="recipe-name"
          name="name"
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
