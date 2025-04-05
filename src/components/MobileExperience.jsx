
import AnimatedContent from './AnimatedContent';

export default function MobileExperience() {
    return (
        <div id="experience" className="py-10 px-4">
            {/* Header */}
            <div className="flex flex-col items-center justify-center py-6">
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-mainColor to-fuchsia-500 text-sm mb-2">
                    WORK / INTERNSHIP / FREELANCE EXPERIENCE
                </p>
                <h1 className="font-semibold text-textColor text-2xl border-b-mainColor border-b-2 px-3 w-fit whitespace-nowrap">
                    Work Experience
                </h1>
            </div>

            {/* Timeline Mobile */}
            <div className="relative">
                {/* Garis timeline vertikal */}
                <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-mainColor"></div>

                {/* Item 1 */}
                <div className="relative pl-14 pb-10">
                    <AnimatedContent
                        distance={50}
                        direction="horizontal"
                        config={{ tension: 80, friction: 20 }}
                        initialOpacity={0.2}
                        animateOpacity
                        threshold={0.1}
                    >
                        <div className="border-mainColor border p-5 rounded-2xl bg-[#2d2d2d]">
                            <div className="flex gap-3 mb-3 text-xs">
                                <img src="assets/icons/bwalogo.svg" width={40} alt="" />
                                <div>
                                    <p className="text-white font-semibold">UI Engineer Intern</p>
                                    <p className="text-gray-500 ">Built With Angga</p>
                                    <p className="text-gray-500">01 Feb 2023 - 31 July 2023</p>
                                </div>
                            </div>
                            <div className='text-xs'>
                                <p className="text-gray-300">Dynamic Rendering:</p>
                                <ul className="text-gray-300  list-disc custom-bullets mb-2">
                                    <li>Uses array map() to generate timeline items</li>
                                    <li>Position controlled by item position property</li>
                                </ul>
                                <p className="text-gray-300">Clean Architecture:</p>
                                <ul className="text-gray-300 t list-disc custom-bullets mb-2">
                                    <li>Separated concerns (header, timeline, items)</li>
                                    <li>Semantic class naming</li>
                                    <li>Reusable component structure</li>
                                </ul>
                                <p className="text-gray-300">Responsive Design:</p>
                                <ul className="text-gray-300 list-disc custom-bullets">
                                    <li>Works on all screen sizes</li>
                                    <li>Max-width container prevents over-extension</li>
                                </ul>
                            </div>
                        </div>
                    </AnimatedContent>
                    {/* Bullet point */}
                    <div className="absolute mt-[8px] left-0 top-4 w-10 h-10 rounded-full bg-mainColor flex items-center justify-center text-white font-semibold">
                        1
                    </div>
                </div>

                {/* Item 2 */}
                <div className="relative pl-14 pb-10">
                    <AnimatedContent
                        distance={50}
                        direction="horizontal"
                        config={{ tension: 80, friction: 20 }}
                        initialOpacity={0.2}
                        animateOpacity
                        threshold={0.1}
                    >
                        <div className="border-mainColor border p-5 rounded-2xl bg-[#2d2d2d]">
                            <div className="flex gap-3 mb-3 text-xs items-center">
                                <img src="assets/icons/gemilang.jpeg" className="rounded-full w-10 h-10" alt="" />
                                <div>
                                    <p className="text-white font-semibold">Frontend Web Developer</p>
                                    <p className="text-gray-500">PT Wiraswasta Gemilang Indonesia</p>
                                    <p className="text-gray-500">14 August 2023 - 26 July 2024   </p>
                                </div>
                            </div>
                            <div>
                                <ul className="text-gray-300 text-xs list-disc custom-bullets mb-2">
                                    <li className="mb-1">Developed proficiency in CSS Grid, reusable UI components, and Node.js tooling.</li>
                                    <li className="mb-1">Implemented mobile-first responsive layouts and applied “Clean Code” principles</li>
                                    <li className="mb-1">Built Progressive Web Apps (PWA) to enable offline functionality and enhance user experience</li>
                                    <li className="mb-1">Implemented CI/CD pipelines to streamline deployment processes and improve efficiency</li>
                                </ul>
                            </div>
                        </div>
                    </AnimatedContent>
                    <div className="absolute mt-[8px] left-0 top-4 w-10 h-10 rounded-full bg-mainColor flex items-center justify-center text-white font-semibold">
                        2
                    </div>
                </div>

                {/* Item 3 */}
                <div className="relative pl-14 pb-10">
                    <AnimatedContent
                        distance={50}
                        direction="horizontal"
                        config={{ tension: 80, friction: 20 }}
                        initialOpacity={0.2}
                        animateOpacity
                        threshold={0.1}
                    >
                        <div className="border-mainColor border p-5 rounded-2xl bg-[#2d2d2d]">
                            <div className="flex gap-3 mb-3 text-xs items-center">
                                <img src="assets/icons/intikom.jpeg" className="rounded-full w-10 h-10" alt="" />
                                <div>
                                    <p className="text-white font-semibold">Fullstack Web Developer</p>
                                    <p className="text-gray-500">PT. Intikom Berlian Mustika</p>
                                    <p className="text-gray-500">21 October 2024 - 20 January 2025</p>
                                </div>
                            </div>
                            <div className='text-xs'>
                                <p className="text-gray-300">State Management:</p>
                                <ul className="text-gray-300 list-disc custom-bullets mb-2">
                                    <li>Manage client-side state (Redux, Zustand)</li>
                                    <li>Handle API caching (React Query, SWR)</li>
                                    <li>Implement authentication flows (OAuth, JWT)</li>
                                </ul>
                                <p className="text-gray-300">API Development:</p>
                                <ul className="text-gray-300 list-disc custom-bullets mb-2">
                                    <li>Design RESTful/GraphQL APIs (Node.js/Express)</li>
                                    <li>Implement middleware for auth/logging</li>
                                    <li>Handle file uploads (AWS S3, Multer)</li>
                                </ul>
                                <p className="text-gray-300">Database Management:</p>
                                <ul className="text-gray-300 list-disc custom-bullets">
                                    <li>Design schemas (SQL/NoSQL)</li>
                                    <li>Write optimized queries (MongoDB)</li>
                                    <li>Implement migrations and seeding</li>
                                </ul>
                            </div>
                        </div>
                    </AnimatedContent>
                    <div className="absolute left-0 mt-[8px] top-4 w-10 h-10 rounded-full bg-mainColor flex items-center justify-center text-white font-semibold">
                        3
                    </div>
                </div>

                {/* Item 4 */}
                <div className="relative pl-14">
                    <AnimatedContent
                        distance={50}
                        direction="horizontal"
                        config={{ tension: 80, friction: 20 }}
                        initialOpacity={0.2}
                        animateOpacity
                        threshold={0.1}
                    >
                        <div className="border-mainColor text-xs border p-5 rounded-2xl bg-[#2d2d2d]">
                            <div className="flex gap-3 ms-6 mb-3 items-center">
                                <div>
                                    <p className="text-white font-semibold">Freelance Web Developer</p>
                                    <p className="text-gray-500">20 Feb 2025 - Present</p>
                                </div>
                            </div>
                            <div>
                                <ul className="text-gray-300 list-disc custom-bullets mb-2">
                                    <li className="mb-1">Understand what the client needs and offer solutions</li>
                                    <li className="mb-1">Designing Entity Relationship Diagram (ERD) to make it easier to create tables and fields</li>
                                    <li className="mb-1">
                                        Designing user flow to be able to visualize the user journey</li>
                                    <li className="mb-1">Implement all things that have been agreed upon into project</li>
                                </ul>
                            </div>
                        </div>
                    </AnimatedContent>
                    <div className="absolute left-0 mt-[8px] top-4 w-10 h-10 rounded-full bg-mainColor flex items-center justify-center text-white font-semibold">
                        4
                    </div>
                </div>
            </div>
        </div>
    );
}