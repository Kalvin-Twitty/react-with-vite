import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="bg-gray-800 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold">
          <NavLink to="/">My App</NavLink>
        </h1>

        {/* Navigation */}
        <nav>
          <ul className="flex gap-6">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-400"
                    : "text-gray-300 hover:text-gray-400 transition-colors"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/features"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-400"
                    : "text-gray-300 hover:text-gray-400 transition-colors"
                }
              >
                Features
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-400"
                    : "text-gray-300 hover:text-gray-400 transition-colors"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-400"
                    : "text-gray-300 hover:text-gray-400 transition-colors"
                }
              >
                Sign Up
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
