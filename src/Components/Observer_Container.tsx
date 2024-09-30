import React, { FC, useEffect } from "react";

export const Observer_Container: FC<{
  component_ref: React.RefObject<HTMLDivElement>;
  Child: any;
  navbar_button: any;
  set_navbar_buttons: any;
}> = ({ component_ref, Child, navbar_button, set_navbar_buttons }) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log(`intersecting ${component_ref}`);
            set_navbar_buttons((old: any) =>
              old.map((btn: any) => {
                return { ...btn, active: btn.name === navbar_button.name };
              })
            );
          }
        });
      },
      { threshold: 0.4 }
    );

    if (component_ref.current) {
      observer.observe(component_ref.current);
    }

    return () => {
      if (component_ref.current) {
        observer.unobserve(component_ref.current);
      }
    };
  }, []);
  return (
    <>
      <Child componenet_ref={component_ref} />
    </>
  );
};
