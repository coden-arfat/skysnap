
export const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-screen  from-blue-100 to-blue-300">
      <div className="relative w-20 h-20">
        <div className="absolute inset-0 animate-spin rounded-full border-t-4 border-yellow-400 border-opacity-80 shadow-md"></div>
        <div className="absolute inset-2 rounded-full bg-yellow-100"></div>
        <span className="absolute top-full mt-4 left-1/2 -translate-x-1/2 text-sm font-medium text-blue-700">
          Loading Weather...
        </span>
      </div>
    </div>
  );
};

