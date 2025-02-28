export default function Header() {
    return (
        <div className="w-[70%] ms-auto me-auto my-28 lg:my-64 flex flex-col-reverse lg:grid lg:grid-cols-2">
            <div className="mt-20 animate__animated animate__slideInLeft">
                <span className="p-3 rounded-full bg-gradient-to-r from-[#383528] to-[#191919] text-textColor
                 border-[#3b3b3b] border-[1px] font-semibold uppercase text-sm sm:text-lg shadow-lg transition-all duration-700">Web Developer
                </span>
                <h1 className="text-[30px] sm:text-[70px] font-semibold text-textColor mt-4 transition-all duration-700">Roni Saputra</h1>
                <p className=" text-[#c3c3c3] text-xs sm:text-base mt-2 transition-all duration-700">I'm web a developer specializing in creating dynamic and user-friendly websites.
                    I have experience in front-end and back-end development, along with a passion
                    for crafting intuitive user interfaces and efficient code
                </p>
                <div className="text-textColor flex gap-3 mt-8">
                    <button className="border-[2px] whitespace-nowrap text-xs sm:text-base border-mainColor bg-transparent px-4 sm:px-7 py-3 rounded-lg font-semibold
                    transition-all duration-700 hover:-translate-y-2 hover:bg-mainColor hover:text-bgColor">
                        Download CV
                    </button>
                    <button className="border-[2px] whitespace-nowrap text-xs sm:text-base border-mainColor bg-transparent px-4 sm:px-7 py-3 rounded-lg font-semibold
                    transition-all duration-700 hover:-translate-y-2 hover:bg-mainColor hover:text-bgColor">
                        Hire Me Now
                    </button>
                </div>
            </div>
            <div className="flex justify-center items-center translate-x-14 animate__animated animate__slideInRight">
                <img className="rounded-full w-4/6" src="./public/assets/img/IMG_3552.jpg" alt="" />
            </div>
        </div>
    )
}