import React, { useState } from "react";
import "./project.css";

type ProjectProps = {
  name: string;
};

function Project({ name }: ProjectProps) {
  return <div className="project-container">{name}</div>;
}

export default Project;
