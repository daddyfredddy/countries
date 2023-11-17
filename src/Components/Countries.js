import { useState, useEffect, useContext } from "react";
import { BsMoon } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import Article from "./Article";
import { ThemeContext } from "./ContextTheme";

export default function Countries() {
  const [countries, setCountries] = useState([]);
  const { darkTheme, themeHandler } = useContext(ThemeContext);

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

            <section
              className={
                darkTheme
                  ? "flex justify-between bg-vdblue"
                  : "flex justify-between bg-white"
              }
            >
              <div className="flex mt-6 border items-center h-12 rounded-lg shadow-md">
                <FaSearch
                  className={
                    darkTheme
                      ? "w-4 h-4 ml-8 text-white"
                      : "w-4 h-4 ml-8 text-kalas2"
                  }
                />
                <form autoComplete="off" className="max-w-3xl ">
                  <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search for a country..."
                    required
                    className={
                      darkTheme
                        ? "h-12 ml-11 text-base font-fonty text-white outline-none bg-dblue"
                        : "h-12 ml-11 text-base font-fonty text-kalas1 outline-none bg-white"
                    }
                  />
                </form>
              </div>
              <div className="">
                <form className="h-48 mt-6">
                  <select
                    name="filter-by-region"
                    id="filter-by-region"
                    className={
                      darkTheme
                        ? "w-52 shadow outline-none bg-dblue text-white"
                        : "w-52 shadow outline-none"
                    }
                  ></select>
                </form>
              </div>
            </section>
            <article></article>
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
