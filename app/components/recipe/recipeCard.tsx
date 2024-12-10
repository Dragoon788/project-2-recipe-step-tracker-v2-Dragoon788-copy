'use client';
import RemoveRecipe from '@/app/components/recipe/removeRecipe';
import EditRecipe from '@/app/components/recipe/editRecipe';

interface recipeCardProps {
  recipeName: string;
  recipeID: number;
}

// LAYOUT BELOW IS TAKEN FROM TAILWIND TUTORIAL ON MAKING A CARD
// LINKED IN THE README
export default function recipeCard({ recipeName, recipeID }: recipeCardProps) {
  return (
    <>
      <div className="max-w-xs rounded overflow-hidden shadow-lg m-5">
        {/* JUST DISPLAY THE SINIGANG IMAGE AS BASE IMAGE IN CARD */}
        <img
          className="w-full"
          src="sinigang.png"
          alt={`Image of ${recipeName}`}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{recipeName}</div>
          <p className="text-gray-700 text-base">
            "Sinigang is a dish hailing from the beautiful country of the
            Philippines"
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <RemoveRecipe index={recipeID} />
          <EditRecipe index={recipeID} />
        </div>
      </div>
    </>
  );
}
