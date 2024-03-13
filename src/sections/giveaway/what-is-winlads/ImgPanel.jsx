import React, { useEffect, useState } from "react";

const ImgPanel = ({ order }) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [styleStr, setStyleStr] = useState("0");

  const topList = ["mt-[10%]", "-mt-[0%]", "mt-[19%]", "mt-[7%]", "-mt-[50px]"];

  const leftList = [100, 200, 300, 400, 500];

  useEffect(() => {
    const loadImage = async () => {
      try {
        const imageModule = await import(
          `../../../assets/images/car0${order}.png`
        );
        const imageSrc = imageModule.default; // Get the resolved image source
        setImageSrc(imageSrc);
      } catch (error) {
        console.error("Error loading image:", error);
      }
    };
    loadImage();
    setStyleStr(
      `-mx-[-${leftList[order]}px] z-${order + 1}0 ${topList[order]}`
    );
  }, [order]);

  return (
    <div className={`${styleStr} w-full`}>
      <img className="w-full" src={imageSrc} alt={order} />
    </div>
  );
};

export default ImgPanel;
