import { RefObject } from "react";
import { Project_Box } from "./Project_Box";
export const Projects = ({
  componenet_ref,
}: {
  componenet_ref: RefObject<HTMLElement>;
}) => {
  return (
    <section ref={componenet_ref} className="projects-container" id="projects">
      <h2 className="heading">
        Latest <span>Projects</span>
      </h2>
      <div className="projects">
        <Project_Box
          img_url="carRent.png"
          project_title="Car Rental"
          stack_names={["react", "nodejs", "data", "css3", "html5"]}
          live_url="https://rent-a-car-website.onrender.com"
          github_url="https://github.com/anasmustafa123/carRental"
        ></Project_Box>
        <Project_Box
          img_url="carRent.png"
          project_title="Car Rental"
          stack_names={["react", "nodejs", "data", "css3", "html5"]}
          live_url="https://rent-a-car-website.onrender.com"
          github_url="https://github.com/anasmustafa123/carRental"
        ></Project_Box>
        <Project_Box
          img_url="carRent.png"
          project_title="Car Rental"
          stack_names={["react", "nodejs", "data", "css3", "html5"]}
          live_url="https://rent-a-car-website.onrender.com"
          github_url="https://github.com/anasmustafa123/carRental"
        ></Project_Box>
      </div>
    </section>
  );
};
