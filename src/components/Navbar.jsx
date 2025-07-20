import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavLinks = [
  { name: "Home", path: "/" },
  { name: "Login", path: "/login" },
  { name: "Cart", path: "/cart" },
];

function NavBar() {
  return (
    <>
      <nav className="bg-gray-900 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-wide">E-Shop</h1>
          <div className="flex gap-4">
            {NavLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className="px-3 py-2 rounded hover:bg-gray-700 transition duration-200"
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
