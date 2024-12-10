'use client';

// Context file is modified from our Week 7 Lecture 1 in-class acitivity for colorContext

import {
  createContext,
  ReactNode,
  useContext,
  useState,
  Dispatch,
} from 'react';

interface RecipeContextProviderProps {
  children: ReactNode;
}

export interface Recipe {
  recipeName: string;
  recipeID: number;
}

interface RecipeContextType {
  recipes: Recipe[];
  setRecipe: Dispatch<any>;
}

const RecipeContext = createContext<RecipeContextType>({
  recipes: [],
  setRecipe: () => {},
});

export const useRecipeContext = () => useContext(RecipeContext);

export default function RecipeContextProvider({
  children,
}: RecipeContextProviderProps) {
  const [recipes, setRecipe] = useState<Recipe[]>([]);

  return (
    <RecipeContext.Provider value={{ recipes, setRecipe }}>
      {children}
    </RecipeContext.Provider>
  );
}
