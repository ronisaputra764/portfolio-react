import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

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
                <div className="w-full z-10 lg:flex px-6 sm:px-12 lg:px-0 justify-between py-8 items-center bg-[#2d2d2d] lg:bg-bgColor">
                    <p className="sm:text-[41px] font-[600] text-white me-10 whitespace-nowrap transition-all duration-700"><span className="text-mainColor">R</span>oni's <span className="bg-mainColor text-bgColor rounded-lg py-1 px-2">Portfolio</span></p>
                    <button
                        onClick={toggleBar}
                        className="lg:hidden absolute top-8 right-8 z-50"
                    >
                        <FontAwesomeIcon className="text-mainColor hover:text-hoverColor size-6 sm:size-12 transition-all duration-700" icon={faBars} />
                    </button>
                </div>
                <ul
                    className={`${showNav
                        ? isAnimating
                            ? "flex flex-col bg-[#2d2d2d] text-sm sm:text-lg w-full top-0 left-0 z-[0] py-8 sm:py-10 gap-8 ps-6 sm:ps-12 animate__animated animate__slideOutUp"
                            : "flex flex-col bg-[#2d2d2d] text-sm sm:text-lg w-full top-0 left-0 z-[0] py-8 sm:py-10 gap-8 ps-6 sm:ps-12 animate__animated animate__slideInDown"
                        : "hidden"
                        } lg:flex lg:flex-row text-textColor gap-5 text-lg lg:mx-10`}
                >
                    <li className=" text-mainColor">
                        <a>Home</a>
                    </li>
                    <li className="hover:text-mainColor transition-all duration-500 hover:cursor-pointer">
                        <a>About</a>
                    </li>
                    <li className="hover:text-mainColor transition-all duration-500 hover:cursor-pointer">
                        <a>Services</a>
                    </li>
                    <li className="hover:text-mainColor transition-all duration-500 hover:cursor-pointer">
                        <a>Portfolio</a>
                    </li>
                    <li className="hover:text-mainColor transition-all duration-500 hover:cursor-pointer">
                        <a>Contacts</a>
                    </li>
                </ul>
            </nav>
        </>
    );
}