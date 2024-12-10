'use client';
import RecipeCard from '@/app/components/recipe/recipeCard';
import { useRecipeContext } from '@/app/components/recipe/recipeContext';

export default function recipeCarousel() {
  const { recipes } = useRecipeContext();
  // loop through entire recipes array context and create a recipecard for each individual
  // Also use flexbox to help organize layout and make it responsive design
  return (
    <div className="flex flex-wrap justify-start gap-5 p-5">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.recipeID}
          recipeName={recipe.recipeName}
          recipeID={recipe.recipeID}
        />
      ))}
    </div>
  );
}
