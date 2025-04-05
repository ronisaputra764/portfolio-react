import Accordion from "./Accordion";

export default function Certificates() {

    return (
        <>
            <section id="certificates" className=" bg-[#2d2d2d]">

                <div className="py-10 md:py-20">
                    <div className="flex justify-center">
                        <h1 className="font-semibold text-textColor mb-5 text-[32px] sm:text-[41px] border-b-mainColor border-b-[3px] sm:border-b-[5px] px-5 w-fit whitespace-nowrap transition-all duration-500">
                            Certificates
                        </h1>
                    </div>

                    <Accordion name={"Alibaba Cloud"} image={"assets/img/alibaba-certificate.jpg"} />

                    <Accordion name={"Codepolitan"} image={"assets/img/codepolitan.jpg"} />

                    <Accordion name={"Purwadhika Digital School"} image={"assets/img/purwadhika-certificate.jpeg"} />
                </div>
            </section>
        </>
    );
}