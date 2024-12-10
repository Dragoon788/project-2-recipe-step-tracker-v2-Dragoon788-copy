'use client';
// import Image from 'next/image';
import Header from '@/app/components/header';
import AddRecipe from '@/app/components/recipe/addRecipe';
import RecipeCarousel from '@/app/components/recipe/recipeCarousel';

export default function Home() {
  return (
    <>
      <Header title="Your Recipe Book" />

      <AddRecipe />
      <RecipeCarousel />
    </>
  );
}
