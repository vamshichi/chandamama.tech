"use client"

import { useState } from "react";

// Define the type for the `onCategoryChange` prop
interface CategoryNavigationProps {
  onCategoryChange: (category: string) => void;
}

const categories: string[] = ["All", "Technology", "Business", "Gadgets"];

const CategoryNavigation: React.FC<CategoryNavigationProps> = ({ onCategoryChange }) => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    onCategoryChange(category); // Callback to parent component
  };

  return (
    <div className="flex space-x-4 border-b border-gray-200">
      {categories.map((category) => (
        <button
          key={category}
          className={`px-4 py-2 ${activeCategory === category ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-500"}`}
          onClick={() => handleCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryNavigation;
