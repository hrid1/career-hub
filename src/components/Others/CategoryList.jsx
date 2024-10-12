import React, { useEffect, useState } from "react";
import CategoryCard from "../Common/CategoryCard";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <section className="container mx-auto my-10 px-2 w-11/12">
      <div className="mx-auto text-center my-6">
        <h2 className="text-4xl font-bold text-gray-800">
          Job Category List {categories.length}
        </h2>
        <p className="text-gray-400 my-2.5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
          quaerat acc
        </p>
      </div>

      <div className="flex gap-4 justify-between items-center flex-wrap">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
        {/* <CategoryCard></CategoryCard> */}
      </div>
    </section>
  );
};

export default CategoryList;
