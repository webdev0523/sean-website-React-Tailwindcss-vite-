import React from "react";
import {
  Hero,
  Paradise,
  Subscriptions,
  HowToEnter,
  WhatIsWinlads,
  FeelLike,
  PastWinners,
  Faqs,
  Testominials,
  Videos,
  Cash
} from "../sections/evlanding";

export default function EVLandingPage() {
  return (
    <>
      <Hero />
      <Paradise />
      <Subscriptions />
      <HowToEnter />
      <WhatIsWinlads />
      <Cash />
      <FeelLike />
      <PastWinners />
      {/* <Faqs /> */}
      <Testominials />
      <Videos />
    </>
  );
}
