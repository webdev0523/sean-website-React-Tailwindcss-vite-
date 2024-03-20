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
  Cash,
  DrawDetails,
  Purchasing,
  Roadmap,
  PurchaseToday,
  OurPartners
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
      <DrawDetails />
      <Purchasing />
      <Roadmap />
      <PurchaseToday />
      <OurPartners />
      <PastWinners />
      {/* <Faqs /> */}
      <Testominials />
      <Videos />
    </>
  );
}
