import React from "react";

export default function Container({ className, children }) {
  return <div className={`relative px-[10%] ${className}`}>{children}</div>;
}
