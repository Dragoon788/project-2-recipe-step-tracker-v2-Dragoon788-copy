'use client';
import Link from 'next/link';

interface editRecipeProps {
  index: number;
}

// Edit recipe just links to new page that is dependent on the index
export default function editRecipe({ index }: editRecipeProps) {
  return (
    <Link
      href={`/recipes/recipe-${index}`}
      className="inline-block hover:opacity-50"
    >
      <img src="pencil.png" alt="my image" className="w-8 h-8" />
    </Link>
  );
}
