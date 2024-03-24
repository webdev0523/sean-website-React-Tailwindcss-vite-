import React from "react";

import Container from "../components/container";
import Logo from "../components/icons/logo";
import Icon1 from "../components/icons/icon1";
import Icon2 from "../components/icons/icon2";
import Icon3 from "../components/icons/icon3";
import Title from "../components/title";

export default function Footer() {
  return (
    <Container className="bg-black">
      <Title />

      <div className="relative flex py-4 items-center justify-between max-lg:flex-col ">
        <div className="text-lg text-[#A7ADAD] max-lg:order-last ">
          © 2024 <span className="text-[#FF6B00] font-bold">Winlads</span>. All
          rights reserved.
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 max-lg:relative max-lg:order-first  max-lg:left-20">
          <Logo />
        </div>

        <div className="flex gap-10 p-2 ">
          <Icon1 />

          <Icon2 />

          <Icon3 />
        </div>
      </div>
    </Container>
  );
}
