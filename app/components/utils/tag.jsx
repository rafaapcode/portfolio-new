"use client";

export default function Tags({ techname }) {
  return (
    <span
      className="font-semibold px-2 text-sm rounded-md shadow-lg bg-slate-300 text-slate-700 hover:shadow-slate-500/50 cursor-pointer transition-all ease-out duration-100"
    >
      #{techname}
    </span>
  );
}
