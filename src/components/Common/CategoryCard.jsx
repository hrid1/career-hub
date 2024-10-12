const CategoryCard = ({ category }) => {
  const { logo, category_name, availability } = category;
  return (
    <div className="w-48 md:w-72 h-60 bg-gray-100 rounded-lg p-4 md:p-6 space-y-4">
      <img className="w-12 md:w-20 md:h-20" src={logo} alt="" />
      <h4 className=" text-xl md:text-2xl font-semibold text-black">
        {category_name}
      </h4>
      <p className="text-gray-500">
        {" "}
        <span>{availability}</span> jobs
      </p>
    </div>
  );
};

export default CategoryCard;
