import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineAttachMoney } from "react-icons/md";

const JobCard = ({ job }) => {
  const { job_title, logo, comapny_name, location, job_type, salary } = job;
  return (
    <div className="lg:w-[90%]  border rounded-lg bg-gray-100 p-6 space-y-4">
      <img className="w-40" src={logo} alt="" />
      <h3 className="text-xl font-semibold">{job_title}</h3>
      <p className="text-gray-400">{comapny_name}</p>

      <div className="space-x-4">
        <button
          className="btn btn-outline 
        rounded-[4px] btn-info btn-sm"
        >
          Remote
        </button>
        <button className="btn  btn-outline rounded-[4px] btn-info btn-sm">
          Onsite
        </button>
      </div>
      <div className="flex gap-2.5">
        <p className="flex items-center gap-1">
          {" "}
          <IoLocationOutline />
          {location}
        </p>
        <p className="flex items-center gap-1">
          <MdOutlineAttachMoney className="border-2 text-lg rounded-full " />
          {salary}
        </p>
      </div>

      <button className="btn btn-primary opacity-90 font-bold">
        View Details
      </button>
    </div>
  );
};

export default JobCard;

// "logo": "https://i.ibb.co/PzrbTxh/google-1-1-1.png",
//       "job_title": "Technical Database Engineer",
//       "company_name": "Google LLC",
//       "remote_or_onsite": "Remote",
//       "location": "Dhaka, Bangladesh",
//       "job_type": "Full Time",
//       "salary": "100k-150k",
