import { RefObject } from "react";

export const Home = ({
  componenet_ref,
}: {
  componenet_ref: RefObject<HTMLElement>;
}) => {
  return (
    <section ref={componenet_ref} id="home" className="home-container">
      <div className="home-content">
        <h3 className="heading1">Hello, It's Me</h3>
        <h1 className="heading2">Anas Mustafa</h1>
        <h3 className="heading3">
          And I'am a <span className="multiple-text"></span>
        </h3>
        <p className="home-introduction">
          Aspiring Computer and Communication Engineering student with a strong
          passion for web development, backend systems, and AI-driven
          applications.
        </p>
        <nav className="social-container">
          <a
            href="https://www.facebook.com/profile.php?id=100011453733136"
            target="_blank"
          >
            <i className="bx bxl-facebook"></i>
          </a>
          <a href="https://twitter.com/anasmuostafa" target="_blank">
            <i className="bx bxl-twitter"></i>
          </a>
          <a href="https://github.com/anasmustafa123" target="_blank">
            <i className="bx bxl-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/anas-mustafa-6b6a4b280/"
            target="_blank"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
        </nav>
        <a href="#contact" className="btn">
          Contact Me
        </a>
      </div>
      <div className="home-img">
        <img src="/home.png" alt="personal photo" draggable={false} />
      </div>
    </section>
  );
};
