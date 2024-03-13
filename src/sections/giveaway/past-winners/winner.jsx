import React from "react";

export default function Winner({ data }) {
  const { url } = data;

  return (
    <div className="overflow-hidden rounded-lg">
      <img className="w-full hover:scale-110 transition-all" src={url} />
    </div>
  );
}
