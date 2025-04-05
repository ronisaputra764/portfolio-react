import SplitText from "./SplitText";
import ShinyText from './ShinyText';

export default function Header() {
    return (
        <div className="w-[70%] ms-auto me-auto my-20 lg:my-60 flex flex-col-reverse lg:grid lg:grid-cols-2">
            <div className="mt-20 animate__animated animate__slideInLeft">
                <span className="p-3 rounded-full bg-gradient-to-r from-[#383528] to-[#191919] text-textColor
                 border-[#3b3b3b] border-[1px] font-semibold uppercase text-xs sm:text-lg shadow-lg transition-all duration-700">
                    <ShinyText text="Fullstack Web Developer" disabled={false} speed={3} className='custom-class' />
                </span>
                <h1 className=""></h1>

                <div className="mt-4 lg:mt-0 ">
                    <SplitText
                        text="Roni Saputra"
                        className="text-[30px] sm:text-[70px] font-semibold text-textColor transition-all duration-700"
                        delay={150}
                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                        easing="easeOutCubic"
                        threshold={0.2}
                        rootMargin="-50px"
                    />
                </div>

                <p className=" text-[#c3c3c3] text-xs sm:text-base mt-2 transition-all duration-700">I'm web a developer specializing in creating dynamic and user-friendly websites.
                    I have experience in front-end and back-end development, along with a passion
                    for crafting intuitive user interfaces and efficient code
                </p>
                <div className="text-textColor flex gap-3 mt-8">

                    <a
                        href="https://wa.me/6289651237747?"
                        target="_blank"
                        className="border-[2px] whitespace-nowrap text-xs sm:text-base border-mainColor bg-transparent px-4 sm:px-7 py-3 rounded-lg font-semibold
                    transition-all duration-400 hover:-translate-y-1 hover:bg-mainColor hover:text-bgColor">
                        Text Me Now
                    </a>
                    <a
                        href="mailto:ronisaputra764@gmail.com?"
                        className="border-[2px] whitespace-nowrap text-xs sm:text-base border-mainColor bg-transparent px-4 sm:px-7 py-3 rounded-lg font-semibold
                    transition-all duration-400 hover:-translate-y-1 hover:bg-mainColor hover:text-bgColor">
                        Hire Me Now
                    </a>

                </div>
            </div>
            <div className="flex justify-center items-center translate-x-14 animate__animated animate__slideInRight ">
                <img className="rounded-full w-4/6" src="./assets/img/IMG_3552.jpg" alt="" />
            </div>
        </div>
    );
}