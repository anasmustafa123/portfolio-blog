import { RefObject } from "react";

export const About = ({
  componenet_ref,
}: {
  componenet_ref: RefObject<HTMLElement>;
}) => {
  return (
    <section ref={componenet_ref} id="about" className="about-container">
      <div className="about-img">
        <img src="/about.png" alt="personal photo" draggable={false} />
      </div>
      <div className="about-content">
        <h2 className="heading">
          About <span>Me</span>
        </h2>
        <h3>Web Developer!</h3>
        <p>
          Aspiring Computer and Communication Engineering student with a strong
          passion for web development, backend systems, and AI-driven
          applications. Experienced in designing, developing, and deploying web
          applications using a variety of modern technologies. Skilled in both
          front-end and back-end development with an eye for efficient, scalable
          solutions. Fluent in English and Arabic with excellent problem-solving
          skills.
        </p>
        <a href="#" className="btn">
          Read More
        </a>
      </div>
    </section>
  );
};
