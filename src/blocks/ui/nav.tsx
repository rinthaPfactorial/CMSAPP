"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { perspective, slideIn } from "@/utils/anim";
import { TextReveal } from "@/blocks/ui";
import { ArrowRight } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import { SocialHandle } from "@/utils/interfaces";
import { About, Header } from "@/payload-types";


const Nav = ({ navLinks, setIsActive, socialLinks }: { navLinks: any, setIsActive: boolean, socialLinks: any }) => {
  const MotionLink = motion(Link);
  // console.log("Navlink ##########", navLinks)


  return (
    <div className="flex justify-between flex-col w-full h-full px-10 pt-[100px] pb-[50px]">
      <div className="flex gap-2 flex-col">
        {navLinks.map((link, i) => {
          const { label, link: href } = link;
          return (
            <div
              key={`b_${i}`}
              className="linkContainer"
              onClick={() => setIsActive(false)}
            >
              <Link href={href} className="flex flex-wrap overflow-hidden">
                <motion.div
                  variants={perspective}
                  custom={i}
                  initial="initial"
                  animate="enter"
                  whileHover="whileHover"
                  whileTap="whileHover"
                  exit="exit"
                  className="text-5xl text-paceBlue flex items-center justify-between group"
                >
                  <span
                    className="transform transition-transform duration-300 ease-out -translate-x-5 group-hover:translate-x-0"
                  >
                    <ArrowRight />
                  </span>
                  <span
                    className="transform transition-transform duration-300 ease-out group-hover:translate-x-5"
                  >
                    {label}
                  </span>
                </motion.div>
              </Link>

            </div>
          );
        })}

      </div>
      <motion.div className="flex flex-wrap">
        {socialLinks.map((link, i) => {
          const { label, id, link: url } = link;
          return (
            <MotionLink
              href={url}
              className="w-1/2 mt-1 text-background"
              variants={slideIn}
              custom={i}
              initial="initial"
              animate="enter"
              exit="exit"
              key={id}
            >
              <TextReveal>{label}</TextReveal>
            </MotionLink>
          );
        })}

      </motion.div>
    </div>
  );
};

export default Nav;

