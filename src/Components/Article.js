import React from "react";

export default function Article({ flags, name, population, region, capital }) {
  return (
    <>
      <article className="shadow rounded-lg overflow-hidden bg-white">
        <img
          src={flags.svg}
          alt="flags"
          className="md:h-60 w-full object-cover"
        />
        <div className="p-4 bg-white">
          <h2 className="font-fonty font-extrabold text-2xl text-vdblue1 mb-2">
            {name}
          </h2>
          <ul>
            <li className="font-fonty text-base text-vdblue1 mb-1">
              Population: {population.toLocaleString()}
            </li>
            <li className="font-fonty text-base text-vdblue1 mb-1">
              Region: {region}
            </li>
            <li className="font-fonty text-base text-vdblue1 mb-1">
              Capital: {capital}
            </li>
          </ul>
        </div>
      </article>
    </>
  );
}
