
import { NavLink } from "react-router-dom";
import reactLogo from "@/assets/images/react-logo.png";
const navLinks = [
  { id: 1, path: "/", label: "Home" },
  { id: 2, path: "/about", label: "About" },
  { id: 3, path: "/contact", label: "Contact" },
  { id: 4, path: "/users", label: "Users" },
];

export const Navbar = () => {
  return (
    <nav className="h-20 border flex items-center shadow">
      <div className="pl-10 uppercase font-semibold !text-green-700">
        <img src={reactLogo} alt="vue logo" width="80px" />
      </div>
      <ul className="flex gap-6 pl-16">
        {navLinks.map((link) => (
          <li key={link.id}>
            <NavLink to={link.path}>{link.label}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};


 