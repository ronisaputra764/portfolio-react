import { useMediaQuery } from 'react-responsive';
import DesktopExperience from "./DesktopExperience";
import MobileExperience from './MobileExperience';
export default function Experience() {
    const isDesktop = useMediaQuery({ minWidth: 1024 }); // md breakpoint

    return (
        <div id="experience">
            {isDesktop ? <DesktopExperience /> : <MobileExperience />}
        </div>
    );
}