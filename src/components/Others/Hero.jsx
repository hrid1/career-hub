import React from "react";
import image from "../../assets/images/user.png";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="w-11/12 mx-auto ">
      <section className="dark:bg-gray-100 dark:text-gray-800">
        <div className="container flex flex-col-reverse justify-center px-4 mx-auto sm:py-12 md:py-16 md:flex-row md:justify-between">
          <div className="flex flex-col justify-center px-4 text-center rounded-sm md:max-w-md xl:max-w-lg md:text-left ">
            <h1 className="text-[42px] md:text-5xl lg:text-6xl  font-bold leading-[1.2] mt-6 md:mt-0">
              One Step Closer To Your
              <br />
              <span className="text-primary">Dream Job</span>
            </h1>
            <p className="my-6 md:text-lg ">
              Dictum aliquam porta in condimentum ac integer Dictum aliquam
              porta in condimentum ac integer
              <br className="hidden md:inline lg:hidden" />
              turpis pulvinar, est scelerisque ligula sem
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 md:justify-start">
              <Link
                to={"/"}
                className="px-8 py-3 text-lg font-semibold rounded bg-primary dark:text-gray-50"
              >
                Get Started
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-center py-4 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={image}
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
