import aboutImg from "../images/About-img.png"

const About = () => {
    return (
        <section id="About" className="scroll-mt-12 lg:scroll-mt-10 bg-black h-full md:h-[calc(100vh-64px)] flex flex-col-reverse gap-5 lg:gap-0 lg:flex-row justify-evenly lg:justify-between items-center px-10 md:px-20 lg:py-20">

            {/* Global earth image */}
            <div><img className="w-150 h-full object-center rounded-full" src={`${aboutImg}`} alt="" /></div>

            {/* Right side text content */}
            <div className="text-white text-center lg:text-left lg:w-1/2 font-inter font-semibold tracking-wide h-full flex flex-col justify-center gap-5 lg:pr-10 py-10 lg:py-0">

                {/* main heading */}
                <div className="text-center md:text-left">
                    <h2 className="text-3xl font-bold uppercase tracking-widest md:text-4xl">about mapmind</h2>
                    <div className="mt-2 h-1 w-20 bg-white mx-auto md:mx-0"></div>
                </div>

                {/* Sub content */}
                <p className=" font-light wrap-break-word text-justify">Welcome to World MapMind, your ultimate digital gateway to exploring the globe. We bring the entire planet to your fingertips by providing comprehensive, real-time data on every country—from capital cities and populations to regions and national flags.</p>
                <p className="font-light wrap-break-word text-justify">Our mission is to make geography interactive, educational, and effortless to navigate for students, travelers, and curious minds alike. Powered by modern web technology and accurate data, discovering the world has never been this simple.</p>


                {/* Key feature list */}
                <ul className="flex flex-col gap-2 font-light text-sm lg:list-disc list-inside">
                    <p className=" mt-5 font-medium text-xl font-outfit">Key Feature</p>
                    <li>Interactive Directory: Browse & Search countries instantly.</li>
                    <li>Rich Insights: Get detailed data and high-quality flags in one click.</li>
                    <li>Comprehensive Information: Access geographical data.</li>
                    <li>Responsive Design: Seamless experience across all your devices.</li>
                </ul>
            </div>
        </section>
    )
}

export default About
