const HeroPreview = () => {
  return (
    <div className="relative">
      <div className="bg-white shadow-2xl rounded-3xl p-8 max-w-lg mx-auto border border-gray-100">

        <div className="flex items-center gap-2 mb-6">
          <div className="w-3 h-3 rounded-full bg-red-400"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-400"></div>
        </div>

        <div className="mb-6">
          <p className="font-semibold text-slate-700">
            User
          </p>

          <div className="bg-indigo-600 text-white p-4 rounded-2xl mt-2 ml-auto max-w-sm shadow">
            I need wedding planning for 300 guests.
          </div>
        </div>

        <div>
          <p className="font-semibold text-slate-700">
            AI Assistant
          </p>

          <div className="bg-gray-100 p-4 rounded-2xl mt-2 max-w-sm shadow-sm">
            Great! We offer venue booking,
            catering, decoration, photography,
            and entertainment packages for
            weddings of all sizes.
          </div>
        </div>

        <div className="mt-6 text-sm text-green-600 font-medium">
          ● AI Assistant Online
        </div>
      </div>

      <div className="absolute -top-6 -right-6 bg-indigo-600 text-white px-4 py-2 rounded-2xl shadow-xl">
        🎉 500+ Events
      </div>
    </div>
  );
};

export default HeroPreview;