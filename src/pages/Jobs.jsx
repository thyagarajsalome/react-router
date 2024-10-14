import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Jobs = () => {
  const jobsData = useLoaderData(); // Load job data

  return (
    <div className="jobs">
      {jobsData.map((job) => {
        return (
          <Link to={`/jobs/${job.id}`} key={job.id}>
            {" "}
            {/* Added 'to' attribute and unique 'key' */}
            <h4>{job.title}</h4>
            <p>{job.location}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default Jobs;

export const jobsLoader = async () => {
  const res = await fetch("http://localhost:5000/jobs");
  if (!res.ok) {
    throw new Error("Failed to fetch jobs"); // Error handling for failed fetch
  }
  return res.json();
};
