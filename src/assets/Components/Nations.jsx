import { useEffect, useState } from "react";
import countryList from "../Sub-component/Country.js";

const Nations = () => {
    const [countryData, setCountrydata] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [isError, setError] = useState(false);
    const [search, setSearch] = useState("");
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(10);

    useEffect(() => {
        const retriveCountryData = async () => {
            try {
                setLoading(true);

                // 1. Har ek country ke liye alag se fetch call banaye ja rahe hain
                const responses = await Promise.all(
                    countryList.map((country) => {
                        return fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`);
                        // Note: ?fullText=true lagane se exact wahi desh aayega, duplicate nahi aayenge
                    })
                );

                // 2. Saare responses ko JSON mein convert kiya ja raha hai
                const datas = await Promise.all(
                    responses.map(async (response) => {
                        if (response.ok) {
                            return await response.json();
                        }
                        return null; // Agar koi fail ho toh null return karein
                    })
                );

                // 3. Data array ke andar se pehla element [0] nikaal rahe hain (Safety net ke sath)
                const fetchedSuccessData = datas
                    .filter((data) => data !== null && data.length > 0) // Sirf sahi data filter kiya
                    .map((data) => data[0]); // Har response ka pehla desh le liya

                setCountrydata(fetchedSuccessData);

            } catch (error) {
                console.error("Data fetch karne mein galti hui:", error);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        retriveCountryData();
    }, []);

    if (isError) {
        return (
            <div className="flex h-96 items-center justify-center bg-black text-white">
                <h2 className="text-xl font-semibold text-red-500">Something went wrong. Please try again.</h2>
            </div>
        );
    }

    if (isLoading) {
        return (
            <div className="flex h-96 items-center justify-center bg-black text-white">
                <div className="h-10 w-10 animate-spin rounded-full border-4 border-t-transparent border-white"></div>
                <h2 className="ml-4 text-xl font-medium tracking-widest">LOADING...</h2>
            </div>
        );
    }

    // 4. Real-time search filter logic (Ab ye fresh data par chalega)
    const retriveData = countryData.filter((country) => {
        if (!country || !country.name || !country.name.common) return false;
        return country.name.common.toLowerCase().includes(search.toLowerCase());
    });

    const showingData = retriveData.slice(start, end);

    return (
        <section id="Nations" className="scroll-mt-10 lg:scroll-mt-2 min-h-screen bg-black px-6 py-10 lg:py-20 text-white sm:px-12 lg:px-24">
            {/* Upper Heading */}
            <div className="mb-12 text-center md:text-left">
                <h2 className="text-3xl font-bold uppercase tracking-widest md:text-4xl">Explore Countries</h2>
                <div className="mt-2 h-1 w-20 bg-white mx-auto md:mx-0"></div>
            </div>

            {/* Input Search Box */}
            <div className="flex justify-center items-center ">
                <input
                    onChange={(e) => {setSearch(e.target.value.trim()); setStart(0); setEnd(10);}}
                    type="text"
                    value={search}
                    name="Search"
                    placeholder="Explore any country"
                    className="px-10 pb-1 rounded-l-full outline-0 w-1/2 lg:w-1/3 h-10 bg-white text-black "
                />
                <button
                    onClick={() => {setSearch(""); setStart(0); setEnd(10);}}
                    className="px-8 py-2 rounded-r-full font-semibold bg-white text-black hover:text-slate-600 duration-300"
                >
                    clear
                </button>
            </div>

            { /* Pagination Buttons */}
            {
                showingData.length > 0 && (
                    <div className="flex justify-center items-center gap-6 mt-5 mb-5">
                        <button onClick={(prev) => {setSearch(""); if (start > 0 || end > countryData.length) { setStart((prev) => prev - 10); setEnd((prev) => prev - 10) } }} className="font-inter text-xs font-bold uppercase tracking-widest text-slate-400 bg-slate-500/10 hover:bg-slate-500/20 border border-slate-500/20 backdrop-blur-sm px-7 py-3 rounded-md transition-all duration-300">
                            Back
                        </button>
                        <button onClick={() => {setSearch(""); if (start < countryData.length - 10 || end < countryData.length) { setStart((prev) => prev + 10); setEnd((prev) => prev + 10) } }} className="font-inter text-xs font-bold uppercase tracking-widest text-white bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-sm px-7 py-3 rounded-md transition-all duration-300 shadow-md">
                            Next Page
                        </button>
                    </div>)
            }

            {/* Cards Grid */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-5">
                {retriveData.length > 0 ? (
                    showingData.map((country) => {
                        return (
                            <div
                                key={country.cca3 || country.name.common}
                                className="group overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950 transition-all duration-300 hover:-translate-y-2"
                            >
                                {/* Flag Image */}
                                <div className="relative aspect-video w-full overflow-hidden border-b border-neutral-900 bg-neutral-900">
                                    <img
                                        src={country.flags?.svg || country.flags?.png}
                                        alt={country.name?.common}
                                        className="h-full w-full object-cover"
                                    />
                                </div>

                                {/* Text Details */}
                                <div className="p-6">
                                    <h3 className="truncate text-xl font-bold tracking-wide uppercase">
                                        {country.name?.common}
                                    </h3>

                                    <div className="mt-4 space-y-2 text-sm text-neutral-400 font-light">
                                        <p><span className="font-semibold text-neutral-500 text-xs mr-2">Capital:</span> {country.capital ? country.capital[0] : 'N/A'}</p>
                                        <p><span className="font-semibold text-neutral-500 text-xs mr-2">Region:</span> {country.region}</p>
                                        <p><span className="font-semibold text-neutral-500 text-xs mr-2">Population:</span> {country.population?.toLocaleString()}</p>
                                        <p><span className="font-semibold text-neutral-500 text-xs mr-2">Subregion:</span> {country.subregion}</p>
                                        <p><span className="font-semibold text-neutral-500 text-xs mr-2">Time Zone:</span> {country.timezones}</p>
                                        <p><span className="font-semibold text-neutral-500 text-xs mr-2">currencies:</span> {Object.values(country.currencies || {})[0]?.name}</p>
                                        <p><span className="font-semibold text-neutral-500 text-xs mr-2">StartOf Week:</span> {country.startOfWeek}</p>
                                    </div>
                                </div>
                                <hr className="md:hidden border-2 border-gray-700"/>
                            </div>
                        );
                    })
                ) : (
                    <div className="col-span-full text-center py-10 text-neutral-500">
                        No countries found matching "{search}"
                    </div>
                )}
            </div>

        </section >
    );
};

export default Nations;