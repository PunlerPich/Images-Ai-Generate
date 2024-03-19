import React from "react";
import { Tweet } from "../assets/Tweet";
import { Git } from "../assets/Git";
import { Discord } from "../assets/Discord";

const Footer = () => {
  return (
    <footer className="bg-default py-4 mt-10">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="flex flex-col lg:flex-row items-center">
          <span className="font-bold text-lg mb-2 lg:mb-0">
            Create By : &nbsp;
          </span>
          <span className="text-lg">Keo PunlerPich & Meng Kheng</span>
        </div>
        <div className="mt-4 lg:mt-0">
          <ul className="flex space-x-4">
            <li>
              <a
                href="#"
                className="hover:text-gray-400 transition-colors duration-300">
                <Tweet />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-400 transition-colors duration-300">
                <Git />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-400 transition-colors duration-300">
                <Discord />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
