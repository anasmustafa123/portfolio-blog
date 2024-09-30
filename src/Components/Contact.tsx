import { RefObject } from "react";

export const Contact = ({
  componenet_ref,
}: {
  componenet_ref: RefObject<HTMLElement>;
}) => {
  return (
    <section ref={componenet_ref} className="contact" id="contact">
      <h2 className="heading">
        Contact <span>Me</span>
      </h2>
      <form className="form" action="#">
        <div className="input-box">
          <input type="text" name="" id="" placeholder="Full Name" />
          <input type="email" name="" id="" placeholder="Email" />
        </div>
        <div className="input-box">
          <input type="tel" name="" id="" placeholder="Phone Number" />
          <input type="text" name="" id="" placeholder="Subject" />
        </div>
        <textarea
          name=""
          id=""
          cols={30}
          rows={10}
          placeholder="Your Message"
        ></textarea>
        <input type="submit" value="Send Message" className="btn" />
      </form>
    </section>
  );
};
