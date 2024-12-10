'use client';
import { useRecipeStepsContext } from '@/app/components/recipesteps/recipeStepContext';
import RecipeSteps from '@/app/components/recipesteps/recipeStepContext';

interface removeRecipeStepProps {
  pageID: number;
  stepID: number;
}
var counter: number = 0;

export default function removeRecipeStep({
  pageID,
  stepID,
}: removeRecipeStepProps) {
  const { recipeSteps, setRecipeSteps } = useRecipeStepsContext();

  // Function to remove a recipe by index
  // Similar to our removeRecipe component, but because we are working with dictioanry structure we have to
  const onRemoveRecipeStep = () => {
    const updatedSteps =
      recipeSteps[pageID]?.filter((step) => step.stepID !== stepID) || [];
    setRecipeSteps(
      (existingRecipeSteps: { [pageID: number]: RecipeSteps }) => ({
        ...existingRecipeSteps,
        [pageID]: updatedSteps,
      })
    );
    // console.log(updatedSteps);
    // console.log(stepID);
  };

  return (
    <>
      <button
        onClick={onRemoveRecipeStep}
        className="mr-5 inline-block hover:text-rose-500 hover:opacity-50"
      >
        {/* Wanted to include image, but wasn't sure why image wasn't display so just resorted to using the remove text */}
        {/* <img
          src="minus_circle_remove_icon.png"
          alt="my image"
          className="w-8 h-8"
        /> */}
        remove
      </button>
    </>
  );
}
