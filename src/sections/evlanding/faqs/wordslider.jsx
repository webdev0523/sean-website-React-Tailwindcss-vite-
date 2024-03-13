import React from "react";

const AccordionItem = ({ title, index, content, open, toggle }) => {
    return (
        <div
            className={`border-solid border-black w-[80%] mx-auto my-4 border rounded-lg ${
                open ? "bg-black text-white" : "text-black"
            } px-4 py-4`}
        >
            <button
                className={`flex flex-row justify-between  w-full p-4 text-left transition-colors text-2xl  duration-300 `}
                onClick={toggle}
            >
                <div className="flex flex-row justify-left">
                    <div className="font-[Neuething] text-[16px]">
                        <strong>0{index + 1}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>
                    </div>
                    <div className="text-[18px]">{title}</div>
                </div>
                <div className={`transform ${open ? "rotate-180" : "-rotate"} transition-transform`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M8 10L12 14L16 10"
                            stroke={`${open ? "white" : "black"}`}
                            strokeWidth="1.5"
                            strokeLinejoin="bevel"
                        />
                    </svg>
                </div>
            </button>
            {open && (
                <div className={`overflow-hidden transition-height duration-300 ${open ? "h-auto" : "h-0"}`}>
                    <div className="p-[10px] pt-0 text-[18px] ml-[50px]">{content}</div>
                </div>
            )}
        </div>
    );
};

export default AccordionItem;
