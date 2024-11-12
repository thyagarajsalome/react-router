import React from "react";
import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const jobDetails = useLoaderData();

  return (
    <div className="job-details">
      <h2>{jobDetails.title}</h2>
      <p>
        <strong>Location:</strong> {jobDetails.location}
      </p>
      <p>
        <strong>Salary:</strong> ${jobDetails.salary}
      </p>
      <div>
        <h3>Job Description</h3>
        <p>
          {jobDetails.description ||
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero voluptatem dignissimos quam, soluta aliquam vel nemo ratione iusto impedit fuga maxime culpa iure deserunt ducimus quis assumenda optio quae quas!"}
        </p>
      </div>
      <button onClick={() => console.log("Apply clicked")}>Apply Now</button>
    </div>
  );
};

export default JobDetails;

export const jobDetailsLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch(`http://localhost:5000/jobs/${id}`);
  if (!res.ok) {
    throw new Error(`Failed to fetch job details for job ${id}`);
  }
  return res.json();
};
