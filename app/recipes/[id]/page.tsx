'use client';
import React from 'react';
import { useRecipeContext } from '@/app/components/recipe/recipeContext';
import RecipeList from '@/app/components/recipesteps/recipeList';
import AddRecipeStep from '@/app/components/recipesteps/addRecipeStep';
import Header from '@/app/components/header';

const Page = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const { recipes } = useRecipeContext();
  const realID = parseInt(params.id.replace('recipe-', ''));

  // Find the recipe that matches the pageID
  const recipe = recipes.find((recipe) => recipe.recipeID === realID);

  if (!recipe) {
    return <p>No recipe found for ID {realID}</p>;
  }

  return (
    <>
      <Header title={recipe.recipeName} />
      <AddRecipeStep pageID={realID} />
      <RecipeList pageID={realID} />
    </>
  );
};

export default Page;
