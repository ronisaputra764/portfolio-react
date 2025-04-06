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
                                <p className="text-gray-300">Dynamic Rendering:</p>
                                <ul className="text-gray-300 text-sm list-disc custom-bullets mb-2">
                                    <li>Uses array map() to generate timeline items</li>
                                    <li>Position controlled by item position property</li>
                                </ul>
                                <p className="text-gray-300">Clean Architecture:</p>
                                <ul className="text-gray-300 text-sm list-disc custom-bullets mb-2">
                                    <li>Separated concerns (header, timeline, items)</li>
                                    <li>Semantic class naming</li>
                                    <li>Reusable component structure</li>
                                </ul>
                                <p className="text-gray-300">Responsive Design:</p>
                                <ul className="text-gray-300 text-sm list-disc custom-bullets">
                                    <li>Works on all screen sizes</li>
                                    <li>Max-width container prevents over-extension</li>
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
                        <div className="border-mainColor border p-5 rounded-2xl mt-80 bg-[#2d2d2d]">
                            <div className="flex gap-3 mb-3 items-center">
                                <img src="assets/icons/intikom.jpeg" className="rounded-full w-10 h-10" alt="" />
                                <div>
                                    <p className="text-white font-semibold">Fullstack Web Developer</p>
                                    <p className="text-gray-500 text-sm">PT. Intikom Berlian Mustika</p>
                                    <p className="text-gray-500 text-sm">21 October 2024 - 20 January 2025</p>
                                </div>
                            </div>
                            <div>
                                <p className="text-gray-300">State Management:</p>
                                <ul className="text-gray-300 text-sm list-disc custom-bullets mb-2">
                                    <li>Manage client-side state (Redux, Zustand)</li>
                                    <li>Handle API caching (React Query, SWR)</li>
                                    <li>Implement authentication flows (OAuth, JWT)</li>
                                </ul>
                                <p className="text-gray-300">API Development:</p>
                                <ul className="text-gray-300 text-sm list-disc custom-bullets mb-2">
                                    <li>Design RESTful/GraphQL APIs (Node.js/Express)</li>
                                    <li>Implement middleware for auth/logging</li>
                                    <li>Handle file uploads (AWS S3, Multer)</li>
                                </ul>
                                <p className="text-gray-300">Database Management:</p>
                                <ul className="text-gray-300 text-sm list-disc custom-bullets">
                                    <li>Design schemas (SQL/NoSQL)</li>
                                    <li>Write optimized queries (MongoDB)</li>
                                    <li>Implement migrations and seeding</li>
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
                        <div className="border-mainColor border p-5 rounded-2xl mt-[350px] bg-[#2d2d2d]">
                            <div className="flex gap-3 mb-3 items-center">
                                <img src="assets/icons/gemilang.jpeg" className="rounded-full w-10 h-10" alt="" />
                                <div>
                                    <p className="text-white font-semibold">Frontend Web Developer</p>
                                    <p className="text-gray-500 text-sm">PT Wiraswasta Gemilang Indonesia</p>
                                    <p className="text-gray-500 text-sm">14 August 2023 - 26 July 2024   </p>
                                </div>
                            </div>
                            <div>
                                <ul className="text-gray-300 text-sm list-disc custom-bullets mb-2">
                                    <li className="mb-1">Developed proficiency in CSS Grid, reusable <br /> UI components, and Node.js tooling.</li>
                                    <li className="mb-1">Implemented mobile-first responsive layouts and <br /> applied “Clean Code” principles</li>
                                    <li className="mb-1">Built Progressive Web Apps (PWA) to enable offline <br /> functionality and enhance user experience</li>
                                    <li className="mb-1">Implemented CI/CD pipelines to streamline <br /> deployment processes and improve efficiency</li>
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
                        <div className="flex flex-col items-start justify-around mt-[300px] py-20 ">
                            <div className="border-mainColor border p-5 rounded-2xl bg-[#2d2d2d]">
                                <div className="flex gap-3 ms-6 mb-3 items-center">
                                    <div>
                                        <p className="text-white font-semibold">Freelance Web Developer</p>
                                        <p className="text-gray-500 text-sm">20 Feb 2025 - Present</p>
                                    </div>
                                </div>
                                <div>
                                    <ul className="text-gray-300 text-sm list-disc custom-bullets mb-2">
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