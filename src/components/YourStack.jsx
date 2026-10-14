import React from "react";
import { X } from "lucide-react";
import toast from "react-hot-toast";

const YourStack = ({ stack, setStack }) => {
  const handleRemoveItem = (id) => {
    setStack(stack.filter((item) => item.id !== id));
    toast.success("Removed from stack");
  };

  const handleRemoveAll = () => {
    if (stack.length === 0) return toast.error("Stack is already empty");
    setStack([]);
    toast.success("Stack cleared");
  };

  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sticky top-6">
      <h2 className="text-lg font-bold text-slate-900">Your Stack</h2>
      <p className="text-xs text-slate-400 mb-6">
        {stack.length} Technology Selected
      </p>

      {/* Stack Items list */}
      <div className="flex flex-col gap-3 mb-6">
        {stack.length === 0 ? (
          <p className="text-sm text-slate-400 py-4 text-center">
            No technologies selected yet.
          </p>
        ) : (
          stack.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between rounded-xl border border-slate-100 p-3 bg-slate-50/50"
            >
              <div className="flex items-center gap-3">
                <img src={item.icon} alt={item.name} className="h-7 w-7 object-contain" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{item.name}</h4>
                  <span className="text-[10px] text-slate-400">{item.category}</span>
                </div>
              </div>
              <button
                onClick={() => handleRemoveItem(item.id)}
                className="text-slate-400 hover:text-red-500 transition-colors p-1 cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>
          ))
        )}
      </div>

      {/* Remove All Button */}
      {stack.length > 0 && (
        <button
          onClick={handleRemoveAll}
          className="w-full rounded-xl border border-red-200 py-2.5 text-sm font-semibold text-red-500 hover:bg-red-50 transition-all cursor-pointer"
        >
          Remove All
        </button>
      )}
    </div>
  );
};

export default YourStack;