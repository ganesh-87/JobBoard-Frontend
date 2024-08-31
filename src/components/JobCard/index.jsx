/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";

function JobCard(props) {
  //const skills = ["JavaScript", "React", "NodeJs"];
  return (
    <div className="mx-40 my-6">
      <div className="flex justify-between items-center bg-zinc-200 px-5 py-5 rounded-md hover:translate-y-1 hover:border-blue-500">
        <div className="flex flex-col items-start gap-3">
          <h1>
            {props.title} - {props.company}
          </h1>
          <p>
            {props.type} . {props.exp}. {props.location}
          </p>
          <div className="flex items-center gap-4">
            {props.skills.map((skill, i) => (
              <p key={i} className="px-2 py-1 border border-black rounded-md">
                {skill}
              </p>
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <a href={props.job_link}>
            <button className="w-40 rounded-md border border-blue-500 text-blue-500 hover:translate-x-1">
              Apply
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
