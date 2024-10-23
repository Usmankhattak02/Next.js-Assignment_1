

import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="bg-black p-4 shadow-lg flex justify-between items-center">
      {/* Left Side Text */}
      <div className="text-white font-semibold text-lg">
        WELCOME TO USMAN WEBSITE
      </div>
      
      {/* Right Side Links */}
      <ul className="flex space-x-4">
        <li>
          <Link
            href="/"
            className="text-white bg-red-600 px-3 py-2 rounded hover:bg-red-700 transition duration-300"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="text-white bg-red-600 px-3 py-2 rounded hover:bg-red-700 transition duration-300"
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            href="/job"
            className="text-white bg-red-600 px-3 py-2 rounded hover:bg-red-700 transition duration-300"
          >
            Job
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="text-white bg-red-600 px-3 py-2 rounded hover:bg-red-700 transition duration-300"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/watsapp"
            className="text-white bg-red-600 px-3 py-2 rounded hover:bg-red-700 transition duration-300"
          >
            Watsapp
          </Link>
        </li>
      </ul>
    </nav>
  );
}
