import React, { useEffect, useState } from "react";
import JobCard from "../Common/JobCard";

const FeatureJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <section className="container mx-auto my-4 ">
      <div className="mx-auto text-center my-8">
        <h2 className="text-4xl font-bold text-gray-800">
          Feature Job List {jobs.length}
        </h2>
        <p className="text-gray-400 my-2.5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
          quaerat acc
        </p>
      </div>

      {/* jobs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center w-11/12 mx-auto ">
        {jobs.slice(0, dataLength).map((job) => (
          <JobCard key={job.id} job={job}></JobCard>
        ))}
      </div>

      {/* <div className={`text-center my-6 {dataLength === jobs.length ? 'hideen':''}`}> */}
      <div className={`text-center my-6 ${dataLength === jobs.length ? 'hidden' : ''}`}>
        <button
          onClick={() => setDataLength(jobs.length)}
          className="btn btn-primary"
        >
          Show All
        </button>
      </div>
    </section>
  );
};

export default FeatureJobs;
