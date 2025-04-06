import GlassIcons from './GlassIcon';
import { FaInstagram, FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaThreads } from "react-icons/fa6";

export default function Footer() {

    const items = [
        { icon: <FaFacebook />, color: 'custom', label: 'Facebook', url: 'https://www.facebook.com/profile.php?id=100005200095348' },
        { icon: <FaInstagram />, color: 'custom', label: 'Instagram', url: 'https://www.instagram.com/ronysptra764/' },
        { icon: <FaGithub />, color: 'custom', label: 'Github', url: 'https://github.com/ronisaputra764' },
        { icon: <FaLinkedin />, color: 'custom', label: 'Linkedin', url: 'https://www.linkedin.com/in/roni-saputra-8ab9762aa/' },
        { icon: <MdOutlineEmail />, color: 'custom', label: 'Email', url: 'mailto:ronisaputra764@gmail.com?' },
        { icon: <FaThreads />, color: 'custom', label: 'Threads', url: 'https://www.threads.net/@ronysptra764' },

    ];

    return (
        <div id='contact' className=" bg-black pt-32">
            <div className='text-center'>
                <p className='text-transparent bg-clip-text bg-gradient-to-t from-[#444444] to-gray-100 font-bold text-4xl md:text-5xl '>Contact</p>
                <p className='text-gray-400 mt-14 mb-9'>Let's connect! Say hello and have a chat.</p>
            </div>
            <div className='w-[70%] md:w-80 ms-auto me-auto text-white'>
                <GlassIcons items={items} className="custom-class inline" />
            </div>
            <p className='text-gray-400 text-center py-32'>© 2025 Roni Saputra. All Rights Reserved.</p>
        </div>
    );
}