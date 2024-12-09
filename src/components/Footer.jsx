import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center">
        {/* Logo and Text */}
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h3 className="text-xl font-bold text-white">My App</h3>
          <p className="text-sm mt-2">
            Simplifying modern web development for everyone.
          </p>
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="flex gap-6">
            <li>
              <button
                onClick={() => navigate("/privacy")}
                className="text-sm hover:text-gray-400 transition-colors"
              >
                Privacy Policy
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/terms")}
                className="text-sm hover:text-gray-400 transition-colors"
              >
                Terms of Service
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/contact")}
                className="text-sm hover:text-gray-400 transition-colors"
              >
                Contact Us
              </button>
            </li>
          </ul>
        </nav>

        {/* Social Links */}
        <div className="flex gap-4 mt-6 md:mt-0">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22 0H2C.9 0 0 .9 0 2v20c0 1.1.9 2 2 2h10V14h-3v-4h3V8c0-3.1 2.5-5.6 5.6-5.6 1.6 0 3 .3 3 .3v3h-1.7c-1.4 0-1.9.9-1.9 1.8v2.3h3.8l-.6 4h-3.2v10h6c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2z" />
            </svg>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 4.6c-.9.4-1.9.6-2.9.8.9-.5 1.7-1.4 2-2.4-.9.5-1.9.8-3 .9-.9-.9-2-1.4-3.2-1.4-2.4 0-4.4 2-4.4 4.4 0 .3 0 .6.1.9C7.7 8.1 4.1 6.1 1.7 3c-.3.5-.5 1-.5 1.7 0 1.5.8 2.8 2 3.6-.7 0-1.3-.2-1.8-.5 0 2 1.5 3.7 3.4 4.1-.3.1-.7.2-1 .2-.3 0-.5 0-.7-.1.5 1.5 2 2.6 3.7 2.6-1.3 1-2.9 1.6-4.6 1.6-.3 0-.6 0-.8-.1 1.6 1 3.6 1.5 5.6 1.5 6.7 0 10.3-5.6 10.3-10.4 0-.2 0-.4 0-.5.7-.5 1.4-1.2 1.8-1.9z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
