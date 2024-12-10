'use client';
import { useRecipeContext } from '@/app/components/recipe/recipeContext';
import Recipe from '@/app/components/recipe/recipeContext';

interface removeRecipeProps {
  index: number;
}

export default function removeRecipe({ index }: removeRecipeProps) {
  const { setRecipe } = useRecipeContext();

  // Function to remove a recipe by index; called when button is clicked
  // Destructure the existing recipes from state, and filter everything except the recipe with index prop
  const onRemoveRecipe = () => {
    setRecipe((existingRecipes: { [id: number]: Recipe }) =>
      existingRecipes.filter((recipe) => recipe.recipeID !== index)
    );
  };

  return (
    <>
      {/* Button representing the removal icon */}
      <button
        onClick={onRemoveRecipe}
        className="mr-5 inline-block hover:opacity-50"
      >
        <img
          src="minus_circle_remove_icon.png"
          alt="my image"
          className="w-8 h-8"
        />
      </button>
    </>
  );
}
