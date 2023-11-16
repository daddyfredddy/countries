import { useState, useEffect } from "react";
import { BsMoon } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import Article from "./Article";

export default function Countries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        const data = await response.json();
        setCountries(data.slice(0, 10));
      } catch (error) {
        console.error("Error fetching data:");
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {!countries ? (
        <h1 className="uppercase flex items-center justify-center text-center h-screen text-5xl font-bold">
          Loading...
        </h1>
      ) : (
        <section className="container mx-auto p-8">
          {/* add previous code nav and form*/}

          <div>
            <nav>
              <div className="h-20 shadow flex justify-between bg-white stroke-vgray items-center mx-auto">
                <h1 className="font-extrabold text-lg text-vdblue1">
                  Where in the world?
                </h1>
                <div className="bg-white flex gap-3">
                  <BsMoon className="h-4" />
                  <h2>Dark Mode</h2>
                </div>
              </div>
              <div className="w-full h-px bg-vgray lg:w-12/12 shadow"></div>
            </nav>

            <section className="flex justify-between">
              <div className="flex mt-6 border items-center h-12 rounded-lg shadow-md">
                <FaSearch className="w-4 h-4 ml-8 text-kalas2" />
                <form autoComplete="off" className="max-w-3xl ">
                  <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search for a country..."
                    required
                    className="h-12 ml-11 text-base font-fonty text-kalas1 outline-none bg-white"
                  />
                </form>
              </div>
              <div className="">
                <form className="h-48 mt-6">
                  <select
                    name="filter-by-region"
                    id="filter-by-region"
                    className="w-52 shadow outline-none"
                  ></select>
                </form>
              </div>
            </section>
            <article></article>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4">
            {countries.map((country) => (
              <Article key={country.name.common} {...country} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
