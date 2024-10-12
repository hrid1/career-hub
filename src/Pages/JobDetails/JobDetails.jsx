import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();

  const job = jobs.find((job) => job.id === parseInt(id));

  console.log(job, id);

  const {
    job_description,
    job_responsibility,
    experiences,
    educational_requirements,
    salary,
    job_title,
    contact_information,
   
  } = job;
  return (
    <div className="container mx-auto">
      <div>
        <h2 className="mx-auto text-center text-3xl font-bold my-10">
          Job Details
        </h2>
      </div>

      <div className="w-10/12 flex flex-col md:flex-row items-cent er justify-center gap-8  mx-auto">
        {/* job info */}
        <div className="md:w-3/5 space-y-5">
          <p>
            <span className="text-lg font-bold">Job Description: </span>

            <span className="text-gray-400">{job_description}</span>
          </p>
          <p>
            <span className="text-lg font-bold">Job Responsibility: </span>
            <span className="text-gray-400"> {job_responsibility}</span>
          </p>
          <p>
            <span className="text-lg font-bold ">Education Requirements: </span>
            <br />
            <p className="my-4 text-gray-400">{educational_requirements}</p>
          </p>
          <p>
            <span className="text-lg font-bold ">Experiences: </span>
            <br />
            <p className="my-4 text-gray-400">{experiences}</p>
          </p>
        </div>

        <div className="md:w-2/5">
          <div className="max-w-sm mx-auto bg-slate-100 p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Job Details</h2>

            <div className="mb-4">
              <div className="flex items-center space-x-2">
                <span className="text-purple-600">
                  <i className="fas fa-money-bill-wave"></i>
                </span>
                <p className="font-medium">Salary :</p>
                <p>{salary} (Per Month)</p>
              </div>
              <div className="flex items-center space-x-2 mt-2">
                <span className="text-purple-600">
                  <i className="fas fa-briefcase"></i>
                </span>
                <p className="font-medium">Job Title :</p>
                <p>{job_title}</p>
              </div>
            </div>

            <h2 className="text-lg font-semibold mb-4">Contact Information</h2>

            <div className="mb-4">
              <div className="flex items-center space-x-2">
                <span className="text-purple-600">
                  <i className="fas fa-phone"></i>
                </span>
                <p className="font-medium">Phone :</p>
                <p>{contact_information.phone}</p>
              </div>
              <div className="flex items-center space-x-2 mt-2">
                <span className="text-purple-600">
                  <i className="fas fa-envelope"></i>
                </span>
                <p className="font-medium">Email :</p>
                <p>{contact_information.email}</p>
              </div>
              <div className="flex items-center space-x-2 mt-2">
                <span className="text-purple-600">
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                <div className="flex ">
                  <p className="font-medium">Address:</p>
                  <p>{contact_information.address}</p>
                </div>
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold py-2 rounded-lg shadow-md hover:from-purple-600 hover:to-indigo-600">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
