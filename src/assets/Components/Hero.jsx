import heroImg from '../images/hero-img.png'
const Hero = () => {
  return (
    <section id="Hero" className="scroll-mt-16 h-[calc(100vh-64px)] mt-10 lg:mt-16 w-full flex flex-col-reverse md:flex-col justify-center lg:gap-0  lg:justify-end items-center bg-black">


       {/* Text section */}
        <div className='flex flex-col text-center justify-center items-center gap-8 mt-10  lg:gap-3 mb-10 lg:mb-2 px-5 md:px-20 lg:px-40'>

          {/* Main Heading */}
          <p className='text-white text-3xl font-black uppercase leading-tight tracking-wide md:text-4xl'>The Earth Has Secrets, Uncover the Hidden</p>

          {/* //Sub heading  */}
          <p className='font-inter hidden md:block lg:text-md text-slate-400 tracking-wider text-center wrap-break-word px-3 md:px'>Every border holds a mystery. Every country has a hidden story. Step into the shadows of global geography and decode the classified facts of our planet</p>

          {/* //Button for atlas */}
          <a href="#Nations"><button className='bg-white  text-md rounded-3xl px-8 py-1.5 capitalize text-inter duration-300 text-black hover:bg-gray-200/90'>Explore The World Today</button></a>
        </div>


        {/* // Earth image  */}
        <div className="h-[40%] md:h-109  w-full bg-center bg-cover md:bg-contain bg-no-repeat mt-10 md:mt-0 md:mb-0" style={{ backgroundImage: `url(${heroImg})` }}></div>

    </section>
  )
}

export default Hero
