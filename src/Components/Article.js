import React from "react";
import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "./ContextTheme";
import { Link } from "react-router-dom";

export default function Article({ flags, name, population, region, capital }) {
  const { darkTheme, themeHandler } = useContext(ThemeContext);

  return (
    <>
      <Link to={`/${name}`}>
        <article
          className={
            darkTheme
              ? "shadow rounded-lg overflow-hidden bg-white"
              : "shadow rounded-lg overflow-hidden bg-white"
          }
        >
          <img
            src={flags.svg}
            alt="flags"
            className="md:h-60 w-full object-cover"
          />
          <div className={darkTheme ? "p-4 bg-dblue" : "p-4 bg-white"}>
            <h2
              className={
                darkTheme
                  ? "font-fonty font-extrabold text-2xl text-white mb-2"
                  : "font-fonty font-extrabold text-2xl text-vdblue1 mb-2"
              }
            >
              {name}
            </h2>
            <ul>
              <li
                className={
                  darkTheme
                    ? "font-fonty text-base text-white mb-1"
                    : "font-fonty text-base text-vdblue1 mb-1"
                }
              >
                Population: {population.toLocaleString()}
              </li>
              <li
                className={
                  darkTheme
                    ? "font-fonty text-base text-white mb-1"
                    : "font-fonty text-base text-vdblue1 mb-1"
                }
              >
                Region: {region}
              </li>
              <li
                className={
                  darkTheme
                    ? "font-fonty text-base text-white mb-1"
                    : "font-fonty text-base text-vdblue1 mb-1"
                }
              >
                Capital: {capital}
              </li>
            </ul>
          </div>
        </article>
      </Link>
    </>
  );
}
