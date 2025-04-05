import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import RotatingText from "./RotatingText";

export default function Navbar() {
    const [showNav, setShowNav] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    function toggleBar() {
        if (showNav) {
            // Jika menu sedang terbuka, mulai animasi keluar
            setIsAnimating(true);
            setTimeout(() => {
                setShowNav(false); // Sembunyikan menu setelah animasi selesai
                setIsAnimating(false); // Reset animasi
            }, 900); // Durasi animasi (disesuaikan dengan Animate.css)
        } else {
            // Tampilkan menu tanpa animasi keluar
            setShowNav(true);
        }
    }

    const handleNavClick = (sectionId) => {
        // Tutup menu mobile jika terbuka
        if (showNav) {
            toggleBar();
        }

        // Scroll ke section yang dituju
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    useEffect(() => {
        const handleResize = () => {
            // Cek apakah layar saat ini >= lg (1024px)
            if (window.matchMedia("(min-width: 1024px)").matches) {
                setShowNav(false); // Tampilkan menu untuk layar besar
            } else {
                setShowNav(false); // Sembunyikan menu untuk layar kecil
            }
        };

        // Jalankan sekali saat komponen dimuat
        handleResize();

        // Tambahkan event listener untuk mendeteksi perubahan ukuran layar
        window.addEventListener("resize", handleResize);

        // Bersihkan event listener saat komponen di-unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <>
            <nav className="flex lg:flex-row items-center flex-col lg:w-[70%] lg:ms-auto lg:me-auto">
                <div className="w-full z-10 lg:flex px-6 sm:px-12 lg:px-0 justify-between py-8 items-center bg-[#2d2d2d] lg:bg-bgColor ">
                    <div className="sm:text-[41px] font-bold text-white flex me-10 whitespace-nowrap transition-all duration-700 animate__animated animate__slideInLeft">
                        <span className="text-mainColor">R</span>oni's
                        <RotatingText
                            texts={['Portfolio', 'Thinking', 'Coding']}
                            mainClassName="px-2 ms-1 md:ms-2 bg-mainColor text-black overflow-hidden justify-center rounded-md md:rounded-xl"
                            staggerFrom={"last"}
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "-120%" }}
                            staggerDuration={0.025}
                            splitLevelClassName=""
                            transition={{ type: "spring", damping: 30, stiffness: 400 }}
                            rotationInterval={4000}
                        />
                    </div>

                    <button
                        onClick={toggleBar}
                        className="lg:hidden absolute top-8 right-8 z-50"
                    >
                        <FontAwesomeIcon className="text-mainColor hover:text-hoverColor size-6 sm:size-12 transition-all duration-700 animate__animated animate__slideInRight" icon={faBars} />
                    </button>
                </div>
                <ul
                    className={`${showNav
                        ? isAnimating
                            ? "flex flex-col bg-[#2d2d2d] text-sm sm:text-lg w-full top-0 left-0 z-[0] py-8 sm:py-10 gap-8 ps-6 sm:ps-12 animate__animated animate__slideOutUp"
                            : "flex flex-col bg-[#2d2d2d] text-sm sm:text-lg w-full top-0 left-0 z-[0] py-8 sm:py-10 gap-8 ps-6 sm:ps-12 animate__animated animate__slideInDown"
                        : "hidden"
                        } lg:flex lg:flex-row text-textColor gap-5 text-lg lg:mx-10 animate__animated animate__slideInDown`}
                >
                    <li className=" text-mainColor">
                        <a>Home</a>
                    </li>
                    <li className="hover:text-mainColor transition-all duration-300 hover:cursor-pointer" onClick={() => handleNavClick('project')}>
                        <a>Project</a>
                    </li>
                    <li className="hover:text-mainColor transition-all duration-300 hover:cursor-pointer" onClick={() => handleNavClick('experience')}>
                        <a>Experience</a>
                    </li>
                    <li className="hover:text-mainColor transition-all duration-300 hover:cursor-pointer" onClick={() => handleNavClick('certificates')}>
                        <a>Certificates</a>
                    </li>
                    <li className="hover:text-mainColor transition-all duration-300 hover:cursor-pointer" onClick={() => handleNavClick('techstack')}>
                        <a>TechStack</a>
                    </li>
                </ul>
            </nav>
        </>
    );
}