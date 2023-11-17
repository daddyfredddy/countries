import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function OneCountry() {
  const [country, setCountry] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const getSingleCountry = async () => {
      try {
        const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
        const data = await res.json();
        setCountry(data);
      } catch (error) {
        console.error(error);
      }
    };
    getSingleCountry();
  }, [name]);
  return (
    <>
      <Link to="/"></Link>
      <section className="p-8 md:py-0 max-w-7xl mx-auto bg-vlgray">
        {country.map((item) => (
          <div
            key={item.population}
            className="grid grid-cols-1 gap-8 md:grid-cols-2 md:place-items-center md:h-screen"
          >
            <article>
              <img src={item.flags.svg} alt={item.name.common} />
            </article>
            <div className="">
              <article className="h-11">
                <h1 className="font-fonty font-extrabold text-4xl">
                  {item.name.official}
                </h1>
                <div className="flex">
                  <ul className="font-fonty text-base text-kalas4 mt-4 flex flex-col items-start justify-start gap-2">
                    <li>Native Name:{item.nativeName}</li>
                    <li>Population: {item.population.toLocaleString()}</li>
                    <li>Region:{item.region}</li>
                    <li>Sub Region:{item.subregion}</li>
                    <li>Capital:{item.capital}</li>
                  </ul>
                  <ul className="font-fonty text-base text-kalas4 mt-4 flex flex-col items-start justify-start gap-2">
                    <li>Top Level Domain:{item.tld}</li>
                    {/* <li>Currencies:{item.currencies}</li> */}
                    {/* <li>Languages:{item.languages} </li> */}
                  </ul>
                </div>

                {item.borders && (
                  <>
                    <h3 className="font-fonty text-base text-kalas4 font-bold">
                      Border Countries:
                    </h3>
                    <ul className="flex flex-wrap items-start justify-start gap-2">
                      {item.borders.map((border, index) => (
                        <li
                          key={index}
                          className="bg-white p-2 rounded text-xs tracking-wide border-kalas3 text-kalas4 shadow"
                        >
                          {border}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </article>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
