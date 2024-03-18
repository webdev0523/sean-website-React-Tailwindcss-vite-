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
  DrawDetails,
  Purchasing,
  Roadmap,
  PurchaseToday,
  OurPartners
} from "../sections/giveaway";

export default function GiveawayPage() {
  return (
    <>
      <Hero />
      <Paradise />
      <Subscriptions />
      <HowToEnter />
      <WhatIsWinlads />
      <FeelLike />
      <DrawDetails />
      <Purchasing />
      {/* <Roadmap /> */}
      <PurchaseToday />
      <OurPartners />
      <PastWinners />
      <Faqs />
    </>
  );
}
