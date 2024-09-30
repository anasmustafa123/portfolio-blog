import { useEffect, useState } from "react";

export const Header: React.FC<{
  navbar_buttons: any;
  set_navbar_buttons: any;
}> = ({ navbar_buttons, set_navbar_buttons }) => {
  const [show_navbar, set_show_navbar] = useState(true);
  const [small_screen, set_small_screen] = useState(false);

  /*==================== typed js ====================*/
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 537) {
        set_small_screen(true);
        set_show_navbar(false);
      } else {
        set_small_screen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <header className="header-container">
      <a href="#" className="header-title">
        anas.
      </a>
      {small_screen && (
        <i
          onClick={() => {
            set_show_navbar((old) => !old);
          }}
          className="bx bx-menu"
          id="social-media-btn"
        ></i>
      )}

      {(!small_screen || show_navbar) && (
        <nav className="navbar">
          {navbar_buttons.map((navbar_button: any) => (
            <a
              onClick={() => {
                set_navbar_buttons((old: any) =>
                  old.map((btn: any) => {
                    return { ...btn, active: btn.name === navbar_button.name };
                  })
                );
              }}
              href={navbar_button.link}
              className={
                navbar_button.active ? "active header-option" : "header-option"
              }
            >
              {navbar_button.name}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};
