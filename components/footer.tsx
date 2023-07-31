"use client";
import { motion } from "framer-motion";
import { Socials } from "../components/db";
import CopyrightText from "../components/copyright";
import Link from "next/link";

function Footer() {
  return (
    <div className="pb-5">
      <hr className="bg-gray-700  h-0.5" />
      <div className="flex flex-wrap-reverse justify-around items-center pt-5">
        <div>
          <CopyrightText />
        </div>
        <div className="px-2">
          <div className="flex items-center space-x-4">
            {Socials.map((socialIcon) => {
              const { icon, id, link } = socialIcon;
              return (
                <motion.div key={id} whileHover={{ scale: 1.12 }}>
                  <Link
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 flex-col items-center text-gray-300 hover:text-gray-200 justify-center rounded-full"
                  >
                    <span>{icon}</span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
// Media queries for the copyright text
