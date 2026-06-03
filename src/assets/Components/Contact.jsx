import React from "react";

const Contact = () => {
    return (
        <section id="Contact" className="bg-black px-6 py-10 text-white lg:px-20">

            {/* Main Container */}
            <div className="mx-auto grid min-h-[calc(100vh-64px)] max-w-7xl overflow-hidden rounded-3xl border border-white/10 bg-white/3 backdrop-blur-md lg:grid-cols-[45%_55%]">

                {/* LEFT SIDE */}
                <div className="relative flex flex-col justify-between border-b border-white/10 p-8 lg:border-b-0 lg:border-r lg:p-12">

                    <div>

                        <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
                            Contact
                        </p>

                        <h1 className="mt-5 text-5xl font-black uppercase leading-tight tracking-wide lg:text-6xl">
                            Let's Build
                            <br />
                            Something
                            <br />
                            Great
                        </h1>

                        <p className="mt-8 max-w-md text-sm leading-7 text-neutral-400">
                            Have an idea, project, or collaboration in mind?
                            Feel free to reach out. I’m always open to discussing
                            creative work and new opportunities.
                        </p>

                    </div>

                    {/* Bottom Contact Info */}
                    <div className="mt-12 space-y-6">

                        <div>
                            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                                Email
                            </p>

                            <p className="mt-2 text-lg font-medium">
                                gohiljay408@gmail.com
                            </p>
                        </div>

                        <div>
                            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                                Location
                            </p>

                            <p className="mt-2 text-lg font-medium">
                                Surat, India
                            </p>
                        </div>

                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="flex items-center p-8 lg:p-12">

                    <div className="w-full">

                        <p className="text-3xl font-bold uppercase tracking-wider">
                            Get In Touch
                        </p>

                        <p className="mt-3 text-sm leading-6 text-neutral-400">
                            Fill out the form below and I’ll get back to you as soon as possible.
                        </p>

                        {/* FORM */}
                        <form className="mt-10 flex flex-col gap-5">

                            {/* Name Fields */}
                            <div className="grid gap-5 md:grid-cols-2">

                                <input
                                    type="text"
                                    placeholder="First Name"
                                    className="rounded-xl border outline-0 border-white/10 bg-white/5 px-5 py-4 text-sm outline-none transition-all duration-300 placeholder:text-neutral-500 " required
                                />

                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    className="rounded-xl border outline-0 border-white/10 bg-white/5 px-5 py-4 text-sm outline-none transition-all duration-300 placeholder:text-neutral-500 " required
                                />

                            </div>

                            {/* Email */}
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="rounded-xl border outline-0 border-white/10 bg-white/5 px-5 py-4 text-sm outline-none transition-all duration-300 placeholder:text-neutral-500 " required
                            />

                            {/* Phone */}
                            <input
                                type="tel"
                                placeholder="Phone Number"
                                className="rounded-xl border outline-0 border-white/10 bg-white/5 px-5 py-4 text-sm outline-none transition-all duration-300 placeholder:text-neutral-500" required
                            />

                            {/* Message */}
                            <textarea
                                rows={6}
                                placeholder="Write your message..."
                                className="resize-none outline-0 rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-sm outline-none transition-all duration-300 placeholder:text-neutral-500 " required
                            ></textarea>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="mt-2 rounded-xl border border-white bg-white py-4 text-sm font-semibold uppercase tracking-[0.2em] text-black transition-all duration-300 hover:bg-transparent "
                            >
                                Send Message
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;