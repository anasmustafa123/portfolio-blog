import React from "react";

export const Project_Box: React.FC<{
  img_url: string;
  project_title: string;
  stack_names: string[];
  github_url: string;
  live_url: string;
}> = ({ project_title, img_url, stack_names, live_url, github_url }) => {
  return (
    <div className="project-box">
      <img src={`/${img_url}`} alt="" />
      <div className="project-layer">
        <h4>{project_title}</h4>
        <p className="">Website for renting cars</p>
        <div className="stack_array_">
          {stack_names.map((name) => (
            <span>
              <i className={`bx bxl-${name}`}></i>
            </span>
          ))}
        </div>
        <div className="redirect_link_style">
          <a href={live_url}>
            <i className="bx bx-link-external"></i>
          </a>
          <a href={github_url}>
            <i className="bx bxl-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
