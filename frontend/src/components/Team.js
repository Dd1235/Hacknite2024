import React from "react";
import Jayant from "../resources/Jayant.jpeg";
import Modi from "../resources/Modi.jpeg";
import Dedeepya from "../resources/Dedeepya.jpeg";

export default function Team() {
  return (
    <div>
      <div className="sanspro items-center hidden md:flex justify-center md:gap-5 lg:gap-10 h-fit py-5">
        <div class="come-up hover:mint-1-bg md:max-w-[29%] black-text lg:max-w-[25%] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img class="rounded-t-lg" src={Jayant} alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="playfair mb-2 text-2xl font-bold tracking-tight dark:text-white">
                Fruity
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              "Soup."
            </p>
          </div>
        </div>

        <div class="come-up hover:mint-1-bg black-text md:max-w-[29%] lg:max-w-[25%] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img class="rounded-t-lg" src={Dedeepya} alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="playfair mb-2 text-2xl font-bold tracking-tight dark:text-white">
                Goose
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              "Send help"
            </p>
          </div>
        </div>

        <div class="come-up hover:mint-1-bg md:max-w-[29%] black-text lg:max-w-[25%] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img class="rounded-t-lg" src={Modi} alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="playfair mb-2 text-2xl font-bold tracking-tight dark:text-white">
                Deathmode
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              "Teri marzi hai vo daalde bhai"
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:hidden items-center justify-center gap-5 py-5">
        <div class="hover:mint-1-bg black-text flex flex-row items-center bg-white border dark:bg-gray-800 dark:border-gray-500 rounded-lg shadow w-[90%]">
          <img
            class="object-cover w-2/5 rounded-l-lg h-32"
            src={Jayant}
            alt=""
          />
          <div class="flex flex-col justify-between px-4 leading-normal">
            <h5 class="text-2xl font-bold tracking-tight dark:text-white">
              Fruity
            </h5>
            <p class="font-normal text-sm text-gray-700 dark:text-gray-400">
              "Soup.""
            </p>
          </div>
        </div>
        <div class="hover:mint-1-bg black-text flex flex-row items-center bg-white border dark:bg-gray-800 dark:border-gray-500 rounded-lg shadow w-[90%]">
          <img
            class="object-cover w-2/5 rounded-l-lg h-32"
            src={Dedeepya}
            alt=""
          />
          <div class="flex flex-col justify-between px-4 leading-normal">
            <h5 class="text-2xl font-bold tracking-tight dark:text-white">
              Goose
            </h5>
            <p class="font-normal text-sm text-gray-700 dark:text-gray-400">
              "Send Help"
            </p>
          </div>
        </div>
        <div class="hover:mint-1-bg black-text flex flex-row items-center bg-white border dark:bg-gray-800 dark:border-gray-500 rounded-lg shadow w-[90%]">
          <img class="object-cover w-2/5 rounded-l-lg h-32" src={Modi} alt="" />
          <div class="flex flex-col justify-between px-4 leading-normal">
            <h5 class="text-2xl font-bold tracking-tight dark:text-white">
              Deathmode
            </h5>
            <p class="font-normal text-sm text-gray-700 dark:text-gray-400">
              "Teri marzi hai vo daalde bhai"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
