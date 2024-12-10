// Taken from Week 7 Lecture 1 In-class Activity for Recipestep

import { useState } from 'react';
import RemoveRecipeStep from '@/app/components/recipesteps/removeRecipeStep';
import RecipeStepDef from '@/app/components/recipesteps/recipeStepContext';
import EditRecipeStep from '@/app/components/recipesteps/editRecipeStep';

interface RecipeStepProps {
  step: RecipeStepDef;
}

export default function RecipeStep({ step }: RecipeStepProps) {
  // console.log(step);

  // Recipe step just comprises of a remove and edit buttons
  return (
    <li>
      <EditRecipeStep step={step} />
      <RemoveRecipeStep pageID={step.pageID} stepID={step.stepID} />
    </li>
  );
}
