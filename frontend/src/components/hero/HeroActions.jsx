import { Link } from "react-router-dom";

const HeroActions = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-10">
      <Link
        to="/chat"
        className="
        bg-indigo-600
        hover:bg-indigo-700
        text-white
        px-8
        py-4
        rounded-xl
        shadow-xl
        transition
        text-center
        font-semibold
        "
      >
        Start AI Chat
      </Link>

      <button
        className="
        border-2
        border-indigo-600
        text-indigo-600
        hover:bg-indigo-50
        px-8
        py-4
        rounded-xl
        transition
        font-semibold
        "
      >
        Book Demo
      </button>
    </div>
  );
};

export default HeroActions;