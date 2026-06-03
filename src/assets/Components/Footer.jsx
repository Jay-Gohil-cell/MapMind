import logoImg from '../images/header-icon.svg'
import backBtn from '../images/bold-arrow-top-icon.svg'

const Footer = () => {
    return (
        <section id="Footer" className="h-auto w-full bg-black py-10 px-20 text-white py-4 border-t">
            <div className='flex justify-between sm:flex-col lg:flex-row items-center mb-5'>
                <ul className='flex gap-1 items-center'>
                    <img src={logoImg} alt="Logo" className='w-10 h-10 grayscale-50' />
                    <div className="font-outfit text-4xl font-semibold pt-1 text-white tracking-wide z-50">
                        Map<span className="text-slate-400">Mind</span>
                    </div>
                </ul>

                <a
                    href="#Hero"
                    className="flex items-center gap-3 group"
                >
                    <span className='text-2xl font-semibold uppercase font-outfit'>Back to top</span>

                    <img
                        src={backBtn}
                        alt="Back To Top"
                        className="w-8 h-8 md:w-10 animate-bounce md:h-10 rounded-full bg-white p-2 transition-transform duration-300 group-hover:-translate-y-1"
                    />
                </a>
            </div>

            <div className='flex justify-between sm:flex-col lg:flex-row items-start pb-8'>
                <p className='text-gray-400 w-100 text-justify'>An interactive geographic dashboard designed to visualize global data, discover unique insights, and explore world facts seamlessly.</p>

                <ul className='font-light uppercase flex gap-5'>
                    <li className='text-gray-400 hover:text-white'>Home</li>
                    <li className='text-gray-400 hover:text-white'>Facts</li>
                    <li className='text-gray-400 hover:text-white'>About</li>
                    <li className='text-gray-400 hover:text-white'>Nations</li>
                    <li className='text-gray-400 hover:text-white'>Contact</li>
                </ul>
            </div>

            <div className='text-center mt-10'>
                copyright &copy;2026 <a href="https://portfolio-jay-ten.vercel.app/" className="text-blue-500 hover:underline">Jay Gohil</a>. All rights reserved.
            </div>

        </section>
    )
}

export default Footer
