import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h2 className="text-xl font-bold">
          AI Chatbot
        </h2>

        <div className="hidden md:flex gap-8">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/chat">Chat</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <button className="md:hidden">
          ☰
        </button>
      </div>
    </nav>
  );
}

export default Navbar;