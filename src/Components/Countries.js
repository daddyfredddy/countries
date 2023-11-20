import { useState, useEffect, useContext } from "react";
import { BsMoon } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import Article from "./Article";
import { ThemeContext } from "./ContextTheme";

export default function Countries() {
  const [countries, setCountries] = useState([]);
  const { darkTheme, themeHandler } = useContext(ThemeContext);
  const [searchText, setSearchText] = useState("");
  const regions = [
    {
      name: "Africa",
    },
    {
      name: "America",
    },
    {
      name: "Asia",
    },
    {
      name: "Europe",
    },
    {
      name: "Oceania",
    },
    {
      name: "Antarctic",
    },
  ];

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error("Error fetching data");
      }
    };

    fetchCountries();
  }, []);

  async function searchCountry() {
    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/name/${searchText}`
      );
      const data = await res.json();
      setCountries(data);
    } catch (error) {
      console.error(error);
    }
  }

  async function filterByRegion(region) {
    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/region/${region}`
      );
      const data = await res.json();
      setCountries(data);
    } catch (error) {
      console.error(error);
    }
  }

  function handleSearchCountry(e) {
    e.preventDefault();
    searchCountry();
  }

  function handleFilterByRegion(e) {
    e.preventDefault();
    handleFilterByRegion();
  }

  return (
    <>
      {!countries ? (
        <h1
          className={
            darkTheme
              ? "uppercase flex items-center justify-center text-center h-screen text-5xl font-bold text-white"
              : "uppercase flex items-center justify-center text-center h-screen text-5xl font-bold"
          }
        >
          Loading...
        </h1>
      ) : (
        <section
          className={
            darkTheme
              ? "container mx-auto p-8 bg-vdblue"
              : "container mx-auto p-8 bg-vlgray"
          }
        >
          {/* add previous code nav and form*/}

          <div>
            <nav>
              <div
                className={
                  darkTheme
                    ? "h-20 shadow flex justify-between bg-dblue stroke-vgray items-center mx-auto"
                    : "h-20 shadow flex justify-between bg-white stroke-vgray items-center mx-auto"
                }
              >
                <h1
                  className={
                    darkTheme
                      ? "font-extrabold text-lg text-white"
                      : "font-extrabold text-lg text-vdblue1"
                  }
                >
                  Where in the world?
                </h1>
                <div
                  className={
                    darkTheme ? "bg-dblue1 flex gap-3" : "bg-white flex gap-3"
                  }
                >
                  <BsMoon
                    className={
                      darkTheme
                        ? "h-4 text-white cursor-pointer"
                        : "h-4 cursor-pointer"
                    }
                    onClick={themeHandler}
                  />
                  <h2 className={darkTheme ? "text-white" : "text-vdblue1"}>
                    Dark Mode
                  </h2>
                </div>
              </div>
              <div className="w-full h-px bg-vgray lg:w-12/12 shadow"></div>
            </nav>

            <section className={darkTheme ? "bg-vdblue" : ""}>
              <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between md:my-11">
                <div
                  className={
                    darkTheme
                      ? "flex max-w-xl rounded-lg items-center mt-8 w-full shadow-lg bg-dblue md:my-8"
                      : "flex max-w-xl rounded-lg items-center mt-8 w-full shadow-lg bg-white md:my-8"
                  }
                >
                  <FaSearch
                    className={
                      darkTheme
                        ? "w-4 h-4 ml-8 text-white"
                        : "w-4 h-4 ml-8 text-kalas5"
                    }
                  />
                  <form
                    onSubmit={handleSearchCountry}
                    autoComplete="off"
                    className=""
                  >
                    <input
                      type="text"
                      name="search"
                      id="search"
                      placeholder="Search for a country..."
                      required
                      value={searchText}
                      onChange={(e) => setSearchText(e.target.value)}
                      className={
                        darkTheme
                          ? "h-12 text-base font-fonty text-white outline-none bg-dblue placeholder-kalas1 ml-4 w-full"
                          : "h-12 text-base font-fonty text-kalas4 outline-none bg-white placeholder-kalas5 ml-4 w-full"
                      }
                    />
                  </form>
                </div>
                <div className="md:my-8 shadow-lg w-52 mt-8 mb-11 rounded">
                  <form className="" onSubmit={handleFilterByRegion}>
                    <select
                      name="filter-by-region"
                      id="filter-by-region"
                      value={regions.name}
                      onChange={(e) => filterByRegion(e.target.value)}
                      className={
                        darkTheme
                          ? "w-52 shadow py-3 px-4 rounded outline-none bg-dblue text-white"
                          : "w-52 shadow py-3 px-4 rounded outline-none bg-white text-kalas4"
                      }
                    >
                      {regions.map((region, index) => (
                        <option key={index} value={region.name}>
                          {region.name}
                        </option>
                      ))}
                    </select>
                  </form>
                </div>
              </div>
            </section>
          </div>

          <div
            className={
              darkTheme
                ? "grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4 bg-vdblue"
                : "grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4 bg-vlgray"
            }
          >
            {countries.map((country) => (
              <Article key={country.name.common} {...country} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
