import React from "react";
import toast from "react-hot-toast";

const TechCard = ({ tech, stack, setStack }) => {
  const isAdded = stack.some((item) => item.id === tech.id);

  const handleAddToStack = () => {
    if (isAdded) return toast.error("Technology already in your stack!");
    setStack([...stack, tech]);
    toast.success(`${tech.name} added to stack!`);
  };

  return (
    <div className="flex flex-col justify-between rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:shadow-md">
      <div>
        {/* Icon and Badge */}
        <div className="flex items-center justify-between">
          <img src={tech.icon} alt={tech.name} className="h-10 w-10 object-contain" />
          <span className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-600">
            {tech.badge}
          </span>
        </div>

        {/* Title */}
        <h3 className="mt-4 text-xl font-bold text-slate-900">{tech.name}</h3>

        {/* Description */}
        <p className="mt-2 text-sm leading-relaxed text-slate-500 line-clamp-2">
          {tech.description}
        </p>

        {/* Details Chips */}
        <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
          <span className="rounded-md bg-slate-100 px-2.5 py-1 font-medium text-slate-600">
            {tech.category}
          </span>
          <span className="rounded-md bg-slate-100 px-2.5 py-1 font-medium text-slate-600">
            {tech.difficulty}
          </span>
          <span className="ml-auto font-bold text-slate-700 flex items-center gap-1">
            <span className="text-amber-400">★</span> {tech.rating}
          </span>
        </div>
      </div>

      {/* Add to Stack Button */}
      <button
        onClick={handleAddToStack}
        disabled={isAdded}
        className={`mt-6 w-full rounded-xl py-3 text-sm font-semibold transition-all ${
          isAdded
            ? "bg-slate-100 text-slate-400 cursor-not-allowed"
            : "bg-slate-900 text-white hover:bg-slate-800 cursor-pointer"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechCard;