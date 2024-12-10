'use client';
import { useRecipeStepsContext } from '@/app/components/recipesteps/recipeStepContext';
import { useEffect, useState } from 'react';
import RecipeStep from '@/app/components/recipesteps/recipeStepContext';

interface editRecipeStepProps {
  step: RecipeStep;
}

// Very different from editRecipe because it's more similar to addRecipe,
// Creating a persistent edit mode in which the user can change the text in the step text box
// Need to keep track a local inputState and determining whether it is editing mode
export default function editRecipeStep({ step }: editRecipeStepProps) {
  const { recipeSteps, setRecipeSteps } = useRecipeStepsContext();
  const [isEditMode, setIsEditMode] = useState(true);
  const [inputValue, setInputValue] = useState(step.stepText);

  // When step changes (i.e. when it is removed), need to update the input value to reflect that
  // Came out of a situation where removal was displaying correctly in the input text box
  useEffect(() => {
    const updatedStep = recipeSteps[step.pageID]?.find(
      (s) => s.stepID === step.stepID
    );
    if (updatedStep) {
      setInputValue(updatedStep.stepText);
    }
  }, [step]);

  // Function to keep the state up to date with the input value (since there is no submit button)
  // Different form our onAddRecipe in addRecipe.tsx because we need to just modify a specific value in our dictionary of arrays
  // Forced to copy and destructure the current existing recipeSteps and modify the copied recipeStepss
  const onInputChange = (e) => {
    setInputValue(e.target.value);
    const updatedSteps = [...(recipeSteps[step.pageID] || [])];
    if (updatedSteps[step.stepID] !== undefined) {
      updatedSteps[step.stepID].stepText = e.target.value; // Update the specific step
    }
    setRecipeSteps((existingRecipeSteps) => ({
      ...existingRecipeSteps,
      [step.pageID]: updatedSteps,
    }));
    console.log('Updated Steps:');
    console.log(updatedSteps);
    console.log(step.pageID);
    console.log(step.stepID);
  };

  return (
    <>
      <input
        type="text"
        value={inputValue}
        readOnly={!isEditMode}
        onChange={(e) => onInputChange(e)}
      />
    </>
  );
}
