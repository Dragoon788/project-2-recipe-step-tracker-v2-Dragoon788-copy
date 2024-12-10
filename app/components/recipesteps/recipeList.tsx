'use client';
import RecipeStep from '@/app/components/recipesteps/recipeStep';
import { useRecipeStepsContext } from '@/app/components/recipesteps/recipeStepContext';

interface RecipeListProps {
  pageID: number;
}

// Because we are working with a dictionary structure instead of an array, we have to iterate through our list using a "Object" classifier (which in turn will turn it into an array)
export default function recipeStepList({ pageID }: RecipeListProps) {
  const { recipeSteps } = useRecipeStepsContext();
  // Find the recipeStep context state in dictionary for the recipe page we are on
  const recipe = Object.entries(recipeSteps).find(
    (keyValuePair) => parseInt(keyValuePair[0]) === pageID
  );

  if (!recipe) {
    return;
  }

  const [, steps] = recipe; // Destructure to get the steps for the matching recipe

  // Loop through and display each recipe step using our component
  return (
    <ol>
      {Object.entries(steps).map(([k, v]) => (
        <RecipeStep key={k} step={v} />
      ))}
    </ol>
  );
}
