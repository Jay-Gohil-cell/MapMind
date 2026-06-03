import { useEffect, useState } from "react";

const Facts = () => {

    const [countryData, setCountrydata] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [isError, setError] = useState(false);

    const topCountries = [
        "united states",
        "china",
        "india",
        "japan",
        "germany",
        "united kingdom",
        "france",
        "canada",
        "italy",
        "south korea",
        "russia",
        "brazil"
    ];

    const countryFacts = [
        {
            country: "United States",
            fact: "The U.S. has no official national language at the federal level."
        },
        {
            country: "China",
            fact: "China has the world's largest high-speed rail network."
        },
        {
            country: "India",
            fact: "India is the only country where lions, tigers, and elephants live in the wild together."
        },
        {
            country: "Japan",
            fact: "Japan has more than 5 million vending machines."
        },
        {
            country: "Germany",
            fact: "Germany's Autobahn has highways with no speed limit in some areas."
        },
        {
            country: "United Kingdom",
            fact: "The UK introduced the world's first public railway system."
        },
        {
            country: "France",
            fact: "France is the most visited country in the world."
        },
        {
            country: "Canada",
            fact: "Canada has more lakes than the rest of the world combined."
        },
        {
            country: "Italy",
            fact: "Italy is home to the world's oldest operating university."
        },
        {
            country: "South Korea",
            fact: "South Korea has one of the fastest internet speeds in the world."
        },
        {
            country: "Russia",
            fact: "Russia spans across 11 time zones."
        },
        {
            country: "Brazil",
            fact: "Brazil contains around 60% of the Amazon Rainforest."
        }
    ];

    useEffect(() => {

        const fetchData = async () => {
            try {
                const responses = await Promise.all(
                    topCountries.map((country) => {
                        return fetch(`https://restcountries.com/v3.1/name/${country}`);
                    })
                );

                let datas = await Promise.all(
                    responses.map((response) => {
                        if (response.ok) {
                            return response.json();
                        }
                    })
                );

                let fetchedFinalData = datas.map((data) => data[0]);
                setCountrydata(fetchedFinalData);
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    if (isError) {
        return <h1>Error Occurred</h1>;
    }

    return (
        <section id="Facts" className="scroll-mt-24 my-13 md:my-30 mx-15 lg:mx-30">
            <p className="w-full text-center text-5xl font-playfair mb-10 capitalize">Top Countries & their Facts</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
                {
                    countryData.map((country) => (

                        <div className="w-auto  hover:-translate-y-1.5 transition-all bg-gray-100 p-4 border border-gray-300 rounded-lg hover:bg-gray-200 duration-300 " key={country.cca3}>

                            <div className="flex gap-4 items-center">
                                <div>
                                    <img className="w-20 h-12 object-cover rounded-md" src={country.flags.svg} alt="Flag" />
                                </div>
                                <div>
                                    <p className="font-bold text-lg">Country: {country.name.common}</p>
                                    <p className="text-sm text-gray-600">Capital: {country.capital}</p>
                                </div>
                            </div>

                            <div className="mt-4 px-2 py-1 bg-white rounded-md border border-gray-300">
                                <p className="font-bold text-gray-500 text-md">Do you know?</p>
                                <p className="text-sm mt-1">🌍 Region: {country.region}</p>
                                <p className="text-sm mt-1">📍 Subregion: {country.subregion}</p>
                                <p className="text-sm mt-1">👥 Facts : {countryFacts.find((c) => c.country === country.name.common)?.fact}</p>
                            </div>

                        </div>

                    ))
                }
            </div>


        </section>
    );
};

export default Facts;