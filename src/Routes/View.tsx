import { Header } from "../Components/Header";
import { Home } from "../Components/Home";
import { About } from "../Components/About";
import { Projects } from "../Components/Projects";
import { Contact } from "../Components/Contact";
import { Footer } from "../Components/Footer";
import { useRef, useState } from "react";
import { Observer_Container } from "../Components/Observer_Container";
export const View = () => {
  const [navbar_buttons, set_navbar_buttons] = useState([
    { name: "Home", link: "#home", active: true },
    { name: "About", link: "#about", active: false },
    { name: "Projects", link: "#projects", active: false },
    { name: "Contact", link: "#contact", active: false },
  ]);
  const ref_list = {
    home: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
    projects: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  };
  return (
    <>
      <Header
        navbar_buttons={navbar_buttons}
        set_navbar_buttons={set_navbar_buttons}
      />
      <Observer_Container
        component_ref={ref_list.home}
        Child={Home}
        navbar_button={navbar_buttons[0]}
        set_navbar_buttons={set_navbar_buttons}
      />
      <Observer_Container
        component_ref={ref_list.about}
        Child={About}
        navbar_button={navbar_buttons[1]}
        set_navbar_buttons={set_navbar_buttons}
      />
      <Observer_Container
        component_ref={ref_list.projects}
        Child={Projects}
        navbar_button={navbar_buttons[2]}
        set_navbar_buttons={set_navbar_buttons}
      />
      <Observer_Container
        component_ref={ref_list.contact}
        Child={Contact}
        navbar_button={navbar_buttons[3]}
        set_navbar_buttons={set_navbar_buttons}
      />
      <Footer />
    </>
  );
};
