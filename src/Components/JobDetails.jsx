import React from "react";
import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const jobDetails = useLoaderData(); // Fetch job details using the loader

  return (
    <div className="job-details">
      <p>
        <b>Job Title: </b> {jobDetails.title}
      </p>
      <p>
        <b>Location: </b> {jobDetails.location}
      </p>
      <p>
        <b>Salary: </b> ${jobDetails.salary}
      </p>
      <p>
        <b>Job Desscription</b>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          voluptatem dignissimos quam, soluta aliquam vel nemo ratione iusto
          impedit fuga maxime culpa iure deserunt ducimus quis assumenda optio
          quae quas!
        </p>
      </p>
      <button>Apply Now</button>
    </div>
  );
};

export default JobDetails;

// Job details loader to fetch data by job ID
export const jobDetailsLoader = async ({ params }) => {
  const { id } = params; // Destructure job ID from the params
  const res = await fetch("http://localhost:5000/jobs/" + id); // Fixed URL
  if (!res.ok) {
    throw new Error("Failed to fetch job details"); // Error handling
  }
  return res.json();
};
