'use client';

// Context file is modified from our W7L1 in-class acitivity for colorContext

import {
  createContext,
  ReactNode,
  useContext,
  useState,
  Dispatch,
} from 'react';

interface RecipeStepsContextProviderProps {
  children: ReactNode;
}

export interface RecipeStep {
  stepText: string;
  stepID: number;
  pageID: number;
}

export interface RecipeSteps {
  recipeSteps: RecipeStep[];
}

// Initialized as a dictionary of recipesteps rather than an array, because after researching in my opinion I find it easier to add and modify nested dictionary structure better than nested array
interface RecipeStepsContextType {
  recipeSteps: { [pageID: number]: RecipeStep[] };
  setRecipeSteps: Dispatch<any>;
}
// Module is important in allowing different views of color
// Color and setcolor are now exposed
const RecipeStepsContext = createContext<RecipeStepsContextType>({
  recipeSteps: {},
  setRecipeSteps: () => {},
});

export const useRecipeStepsContext = () => useContext(RecipeStepsContext);

export default function RecipeContextProvider({
  children,
}: RecipeStepsContextProviderProps) {
  const [recipeSteps, setRecipeSteps] = useState([]);

  return (
    <RecipeStepsContext.Provider value={{ recipeSteps, setRecipeSteps }}>
      {children}
    </RecipeStepsContext.Provider>
  );
}
