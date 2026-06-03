import heroImg from '../images/hero-img.png'
const Hero = () => {
  return (
    <section id="Hero" className="scroll-mt-20 h-[calc(100vh-96px)] mt-10 lg:mt-20 w-full flex flex-col-reverse md:flex-col justify-center gap-20 lg:gap-0  lg:justify-end items-center">


       {/* Text section */}
        <div className='flex flex-col text-center justify-center items-center gap-10 lg:gap-3 mb-10 lg:mb-2 md:px-20 lg:px-40'>

          {/* Main Heading */}
          <p className='font-playfair font-semibold text-5xl lg:text-4xl'>The Earth Has Secrets. Uncover the Hidden</p>

          {/* //Sub heading  */}
          <p className='font-alice text-xl lg:text-md text-[#545454] tracking-wider wrap-break-word px-3 md:px'>Every border holds a mystery. Every country has a hidden story. Step into the shadows of global geography and decode the classified facts of our planet</p>

          {/* //Button for atlas */}
          <button className='bg-gray-600 mt-2 text-md rounded-3xl px-8 py-2 capitalize text-inter duration-300 text-white hover:bg-gray-500/90'>Explore the Atlas</button>
        </div>


        {/* // Earth image  */}
        <div className="  h-109 w-full bg-center bg-contain bg-no-repeat mb-10 md:mb-0" style={{ backgroundImage: `url(${heroImg})` }}></div>

    </section>
  )
}

export default Hero
