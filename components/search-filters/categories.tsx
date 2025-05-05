/* eslint-disable @typescript-eslint/no-explicit-any */
import { Category } from "@/payload-types";
import { CategoryDropdown } from "./category-dropdown";

interface CategoriesProps {
  data: any;
}

export const Categories = ({ data }: CategoriesProps) => {
  const categories = Array.isArray(data) ? data : [];
  return (
    <div className="relative w-full">
      <div className="flex flex-nowrap items-center">
        {categories.map((category: Category) => (
          <div key={category.id}>
            <CategoryDropdown
              category={category}
              isActive={false}
              isNavigationHovered={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
