import { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";

export default function Accordion({ name, image }) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className={`rounded-[30px] md:rounded-[40px] md:p-[22px] w-[90%] md:w-[70%] lg:w-[50%] ms-auto me-auto pt-[12px] px-4 my-5 bg-bgColor transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[1000px]' : 'max-h-[60px] md:max-h-[85px]'} overflow-hidden`}
            onClick={() => setIsOpen(!isOpen)}
        >
            <div className="group flex items-center justify-between md:mb-4 cursor-pointer text-lg md:text-2xl text-white hover:text-mainColor">

                <div className="font-semibold  leading-[30px] p-1 ">
                    {name}
                </div>

                <IoIosArrowDropdown className={`w-6 h-6 md:w-10 md:h-10 transition-transform duration-300  ${isOpen ? 'rotate-180' : ''
                    }`}
                    alt="icon" />

            </div>

            <div className="p-5">
                <div className="rounded-xl overflow-hidden">
                    <img className="" src={image} alt="" />
                </div>
            </div>
        </div>
    );
}