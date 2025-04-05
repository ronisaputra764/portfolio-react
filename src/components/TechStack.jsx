import StackIcon from "tech-stack-icons";
import "../carousel.css";

export default function TechStackCarousel() {
    const techStack = [
        "reactjs", "vuejs", "js", "typescript", "html5", "css3",
        "mongodb", "npm", "nextjs2", "tailwindcss", "nodejs"
    ];

    const techStack2 = [
        "laravel", "firebase", "php", "bootstrap5", "chrome", "chakraui",
        "github", "prettier", "postman", "alpinejs", "figma"
    ];

    return (
        <>
            <div id="techstack" className="bg-bgColor">
                <div className="flex justify-center pt-10 md:pt-20">
                    <h1 className="font-semibold text-textColor text-[32px] sm:text-[41px] border-b-mainColor border-b-[3px] sm:border-b-[5px] px-5 w-fit whitespace-nowrap transition-all duration-700">Tech Stack</h1>
                </div>

                <div className="py-10 md:py-16">
                    {/* Carousel 1 (Atas) */}
                    <div className="carousel-wrapper py-5 md:py-10">
                        <div className="carousel-track">
                            {[...techStack, ...techStack, ...techStack, ...techStack].map((tech, index) => (
                                <div key={`top-${index}`} className="carousel-item">
                                    <StackIcon name={tech} className="h-12 w-12 mx-4 md:h-16 md:w-16 md:mx-8" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Carousel 2 (Bawah) */}
                    <div className="carousel-wrapper-reverse py-5 md:py-10">
                        <div className="carousel-track-reverse">
                            {[...techStack2, ...techStack2, ...techStack2, ...techStack2].map((tech, index) => (
                                <div key={`bottom-${index}`} className="carousel-item">
                                    <StackIcon name={tech} className="h-12 w-12 mx-4 md:h-16 md:w-16 md:mx-8" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}