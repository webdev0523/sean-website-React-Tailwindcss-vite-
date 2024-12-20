import React from "react";

export default function Title({ label, className }) {
  return (
    <div
      className={`text-black font-black text-[35px] md:text-[47px] max-md:text-2xl font-["Neuething"] drop-shadow-3xl  capitalize text-center ${className}`}
    >
      {label}
    </div>
  );
}
