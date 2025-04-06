import { useMediaQuery } from 'react-responsive';
import DesktopExperience from "./DesktopExperience";
import MobileExperience from './MobileExperience';
export default function Experience() {
    const isDesktop = useMediaQuery({ minWidth: 1024 }); // md breakpoint

    return (
        <div id="experience">

            <div className="flex flex-col items-center justify-center mt-10 py-8">
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-mainColor to-fuchsia-500">WORK / INTERNSHIP / FREELANCE EXPERIENCE</p>
                <h1 className="font-semibold text-textColor text-[32px] sm:text-[41px] border-b-mainColor border-b-[3px] sm:border-b-[5px] px-5 w-fit whitespace-nowrap transition-all duration-500">
                    Work Experience
                </h1>
            </div>

            {isDesktop ? <DesktopExperience /> : <MobileExperience />}
        </div>
    );
}