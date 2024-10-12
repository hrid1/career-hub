import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineAttachMoney } from "react-icons/md";
import { NavLink } from "react-router-dom";

const JobCard = ({ job }) => {
  const { id, job_title, logo, comapny_name, location, job_type, salary } = job;
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

      <NavLink to={`job/${id}`}>
        <button className="btn btn-primary opacity-90 font-bold mt-4">
          View Details
        </button>
      </NavLink>
    </div>
  );
};

export default JobCard;
