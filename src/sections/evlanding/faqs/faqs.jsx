import React, { useState } from "react";
import AccordionItem from "./wordslider";

import Title from "../../../components/title";
import bgImg1 from "../../../assets/images/line44.png";

export default function Faqs() {
  const faqItems = [
    {
      title: "What is React?",
      content:
        "React is a JavaScript library for building user interfaces. It lets you create complex UIs from small and isolated pieces of code called 'components'.",
    },
    {
      title: "What is TailwindCSS?",
      content:
        "TailwindCSS is a utility-first CSS framework for building custom user interfaces rapidly. It provides you with a set of low-level CSS classes that you can combine to create bespoke designs.",
    },
    {
      title: "How to use React and TailwindCSS together?",
      content:
        "There are different ways to use React and TailwindCSS together, but one of the easiest methods is to use the Create React App tool and follow the official TailwindCSS installation guide.",
    },
    {
      title: "What are the benefits of using React and TailwindCSS?",
      content:
        "Some of the benefits of using React and TailwindCSS are: - You can create fast and responsive websites with minimal code. - You can customize your UI without writing any CSS. - You can reuse your components across different pages and projects. - You can leverage the power of React hooks, state, and props to manage your data and logic.",
    },
    {
      title: "Where can I learn more about React and TailwindCSS?",
      content:
        "There are many resources online to learn more about React and TailwindCSS, such as: - The official documentation of React [^1^] and TailwindCSS [^2^]. - The video tutorials of Build a React Accordion with TailwindCSS [^3^], Accordion Tutorial - React JS+ Tailwind CSS [^4^], and Animated Accordion using Next js / React js & Tailwind CSS [^5^]. - The blog posts of Create Accordion Component with React.CSSjs and Tailwind [^6^] and Creating a Fully-functional Accordion Component with React.js and TailwindCSS [^7^]. - The code examples of Tailwind CSS React Accordion [^8^] and Tailwind CSS Accordion for React [^9^].",
    },
  ];
  const [active, setActive] = useState(null);

  const handleClick = (index) => {
    setActive((prevActive) => (prevActive === index ? null : index));
  };

  return (
    <div className="relative my-[200px]">
      <div className="flex justify-center my-[100px] relative">
        <div className="relative">
          <div className="absolute sm:right-[-10%] right-[0%] w-[199px] h-[74px] bg-[#56DFE6] origin-bottom -rotate-6"></div>
          <p className="text-5xl font-black z-[100] relative leading-[64px]">
            <Title label="frequently asked questions" />
          </p>
        </div>
      </div>

      <div className="w-full mx-autojustify-center	relative flex-col">
        {faqItems.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            index={index}
            content={item.content}
            open={active === index}
            toggle={() => handleClick(index)}
          />
        ))}
      </div>
      <img
        className="-bottom-20 absolute left-[0] w-[50vw] z-[-1]"
        src={bgImg1}
      />
    </div>
  );
}
