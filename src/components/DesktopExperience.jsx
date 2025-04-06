import AnimatedContent from './AnimatedContent';
export default function DesktopExperience() {
    return (


        <div className="flex justify-center my-5">
            <div className="grid grid-cols-[1fr_auto_1fr]">
                {/* Kolom kiri untuk teks genap (1, 3, dst) */}
                <div className="flex flex-col items-end justify-between h-[1000px] py-14">

                    <AnimatedContent
                        distance={150}
                        direction="vertical"
                        reverse={false}
                        config={{ tension: 80, friction: 20 }}
                        initialOpacity={0.2}
                        animateOpacity
                        threshold={0.5}
                    >
                        <div className="border-mainColor border p-5 rounded-2xl bg-[#2d2d2d]">
                            <div className="flex gap-3 mb-3 ">
                                <img src="assets/icons/bwalogo.svg" width={40} alt="" />
                                <div>
                                    <p className="text-white font-semibold">UI Engineer Intern</p>
                                    <p className="text-gray-500 text-sm">Built With Angga</p>
                                    <p className="text-gray-500 text-sm">01 Feb 2023 - 31 July 2023</p>
                                </div>
                            </div>
                            <div>
                                <ul className="text-gray-300 text-sm list-disc custom-bullets mb-2 w-[350px]">
                                    <li className='mb-1'>Implemented responsive design principles, delivering a consistent user experience on various screen sizes.</li>
                                    <li className='mb-1'>Provided constructive feedback during peer code reviews, fostering a culture of collaboration and mutual growth within the team.</li>
                                    <li className='mb-1'>Improved conversion rates by analyzing user behavior data and refining UI elements accordingly.</li>
                                    <li>Actively participated in sprint planning meetings, ensuring alignment between project goals and deadlines while addressing potential roadblocks early on.</li>
                                </ul>
                            </div>
                        </div>
                    </AnimatedContent>

                    <AnimatedContent
                        distance={150}
                        direction="vertical"
                        reverse={false}
                        config={{ tension: 80, friction: 20 }}
                        initialOpacity={0.2}
                        animateOpacity
                        threshold={0.5}
                    >
                        <div className="border-mainColor border p-5 rounded-2xl mt-64 bg-[#2d2d2d]">
                            <div className="flex gap-3 mb-3 items-center">
                                <img src="assets/icons/intikom.jpeg" className="rounded-full w-10 h-10" alt="" />
                                <div>
                                    <p className="text-white font-semibold">Fullstack Web Developer</p>
                                    <p className="text-gray-500 text-sm">PT. Intikom Berlian Mustika</p>
                                    <p className="text-gray-500 text-sm">21 October 2024 - 20 January 2025</p>
                                </div>
                            </div>
                            <div>
                                <ul className="text-gray-300 text-sm list-disc custom-bullets mb-2 w-[350px]">
                                    <li className='mb-1'>Used Javascript, SQL and HTML to develop app-solutions.</li>
                                    <li className='mb-1'>Increased website performance by optimizing front-end and back-end code for faster loading times.</li>
                                    <li className='mb-1'>Applied responsive design principles to ensure consistent display and functionality across a wide range of devices, including mobile phones, tablets, and desktop computers.</li>
                                    <li className='mb-1'>Created easy-to-use APIs for third-party integrations, enhancing the functionality of existing applications without compromising on performance or security.</li>
                                </ul>

                            </div>
                        </div>
                    </AnimatedContent>

                </div>

                {/* Garis timeline di tengah */}
                <div className="relative border-[0.2px] border-mainColor w-0 h-[1500px] mx-20">
                    <div className="absolute left-1/2 -translate-x-1/2 h-full flex flex-col items-center justify-around py-20">
                        <div className="bg-mainColor w-10 h-10 rounded-full font-semibold flex items-center justify-center text-xl text-bgColor">1</div>
                        <div className="bg-mainColor w-10 h-10 rounded-full font-semibold flex items-center justify-center text-xl text-bgColor">2</div>
                        <div className="bg-mainColor w-10 h-10 rounded-full font-semibold flex items-center justify-center text-xl text-bgColor">3</div>
                        <div className="bg-mainColor w-10 h-10 rounded-full font-semibold flex items-center justify-center text-xl text-bgColor">4</div>
                    </div>
                </div>

                {/* Kolom kanan untuk teks ganjil (2, 4, dst) */}
                <div className="flex flex-col items-start justify-around h-[1000px] py-20 ">

                    <AnimatedContent
                        distance={150}
                        direction="vertical"
                        reverse={false}
                        config={{ tension: 80, friction: 20 }}
                        initialOpacity={0.2}
                        animateOpacity
                        threshold={0.5}
                    >
                        <div className="border-mainColor border p-5 rounded-2xl mt-[330px] bg-[#2d2d2d]">
                            <div className="flex gap-3 mb-3 items-center">
                                <img src="assets/icons/gemilang.jpeg" className="rounded-full w-10 h-10" alt="" />
                                <div>
                                    <p className="text-white font-semibold">Frontend Web Developer</p>
                                    <p className="text-gray-500 text-sm">PT Wiraswasta Gemilang Indonesia</p>
                                    <p className="text-gray-500 text-sm">14 August 2023 - 26 July 2024   </p>
                                </div>
                            </div>
                            <div>
                                <ul className="text-gray-300 text-sm list-disc custom-bullets mb-2 w-[350px]">
                                    <li className="mb-1">Worked closely with UX/UI designers to translate complex designs into functional web pages without compromising aesthetics or usability.</li>
                                    <li className="mb-1">Resolved front-end bugs promptly, ensuring optimal website performance at all times.</li>
                                    <li className="mb-1">Implemented SEO best practices in coding and content structure for improved search engine visibility.</li>
                                    <li className="mb-1">Provided technical support to clients during website launch, addressing any issues or concerns quickly and professionally.</li>
                                </ul>
                            </div>
                        </div>
                    </AnimatedContent>

                    <AnimatedContent
                        distance={150}
                        direction="vertical"
                        reverse={false}
                        config={{ tension: 80, friction: 20 }}
                        initialOpacity={0.2}
                        animateOpacity
                        threshold={0.5}
                    >
                        <div className="flex flex-col items-start justify-around mt-[260px] py-20 ">
                            <div className="border-mainColor border p-5 rounded-2xl bg-[#2d2d2d]">
                                <div className="flex gap-3 ms-6 mb-3 items-center">
                                    <div>
                                        <p className="text-white font-semibold">Freelance Web Developer</p>
                                        <p className="text-gray-500 text-sm">20 Feb 2025 - Present</p>
                                    </div>
                                </div>
                                <div>
                                    <ul className="text-gray-300 text-sm list-disc custom-bullets mb-2 w-80">
                                        <li className="mb-1">Understand what the client needs and offer <br /> solutions</li>
                                        <li className="mb-1">Designing Entity Relationship Diagram (ERD) <br /> to make it easier to create tables and fields</li>
                                        <li className="mb-1">
                                            Designing user flow to be able to visualize the <br /> user journey</li>
                                        <li className="mb-1">Implement all things that have been agreed <br /> upon into project</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </AnimatedContent>

                </div>
            </div>
        </div>

    );
}