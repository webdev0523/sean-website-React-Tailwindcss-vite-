import React, { useState, useEffect } from "react";

export default function useInteractionObserver(options) {
  const [target, setTarget] = useState(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsIntersecting(entry.isIntersecting);

        if (entry.isIntersecting) {
          observer.disconnect();
        }
      });
    }, options);

    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, [target, options]);

  return [setTarget, isIntersecting];
}
