'use client';

interface HeaderProps {
  title: string | number;
}

export default function Header({ title }: HeaderProps) {
  return (
    <header>
      <h1 className="text-5xl font-semi-bold m-5 mb-10">{title}</h1>
    </header>
  );
}
