import { NavLink } from "react-router-dom";

const HeaderNavigationBar = () => {
  return (
    <section className="flex items-center justify-center gap-4">
      <NavLink to="/" className="text-lg font-bold">
        Home
      </NavLink>
      <NavLink to="/about" className="text-lg font-bold">
        About Us
      </NavLink>
      <NavLink to="/contactUs" className="text-lg font-bold">
        Contact Us
      </NavLink>
    </section>
  );
};

export default HeaderNavigationBar;
