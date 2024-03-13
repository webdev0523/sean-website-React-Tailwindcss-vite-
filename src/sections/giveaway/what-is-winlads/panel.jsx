import React, { useEffect, useMemo, useState } from "react";

import useMobileWidth from "../../../hooks/use-mobile-detect";

export default function Panel({ data }) {
  const { url, left, top, rotate } = data;

  const deviceWidth = useMobileWidth();

  console.log(deviceWidth);
  return (
    <div
      style={
        deviceWidth >= 768
          ? { top: `${top}%`, left: `${left}vw`, rotate: `${rotate}deg` }
          : {}
      }
      className={`w-full rounded-[40px] border-4 border-black overflow-hidden md:absolute md:w-[27vw] md:h-[33vw]  md:-translate-x-1/2  md:-translate-y-1/2`}
    >
      <img
        className="w-full object-cover h-full hover:scale-110 opacity-100 hover:opacity-95 transition-all"
        src={url}
      />
    </div>
  );
}
