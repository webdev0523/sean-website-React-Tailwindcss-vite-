import React from "react";

export default function Winner({ data }) {
  const { url } = data;

  return (
    <div className="overflow-hidden rounded-lg bg-[#e5e7eb]">
      <img className="w-full hover:scale-110 transition-all opacity-0" src={url} />
    </div>
  );
}
