"use client";
import { motion } from "framer-motion";
import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import { Button } from "@heroui/button";
import { useState } from "react";
import { Input, Textarea } from "@heroui/input";

import { Logo } from "../icons/icons";

import { siteConfig } from "@/config/site";

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  const [submitted, setSubmitted] = useState(null);

  const onSubmit = (e: any) => {
    e.preventDefault();

    const data: any = Object.fromEntries(new FormData(e.currentTarget));

    setSubmitted(data);
  };

  return (
    <footer className="bg-[url(/background/ssstar.svg)] bg-no-repeat bg-center bg-cover">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 backdrop-blur-sm  bg-transparent py-8 ">
        <div className="grid md:grid-cols-7 gap-8 w-full">
          <div className="md:col-span-3">
            <Link className="flex justify-start items-center gap-1" href="/">
              <div>
                <Logo />
              </div>
              <span className="text-2xl font-bold">Evently</span>
            </Link>
            <p className="dark:text-gray-300 leading-relaxed  mb-6">
              Making event planning effortless for individuals and teams
              worldwide. Plan better, stress less.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gradient-to-b from-[#5EA2EF] to-[#0072F5] rounded-full flex items-center justify-center "
                  href={social.href}
                  transition={{ duration: 0.2 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <social.icon className="w-4 h-4 text-white" />
                </motion.a>
              ))}
            </div>
          </div>
          <div className="md:col-span-4 flex justify-normal gap-10 sm:gap-14 md:justify-around  w-full flex-wrap sm:flex-nowrap">
            <div className="">
              <p className="font-bold text-lg mb-4">Product</p>
              <ul className="space-y-2">
                {siteConfig.navItems.map((link) => (
                  <li key={link.label}>
                    <Link className="hover:text-primary" href={link.href}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full sm:w-fit" id="contact-us">
              <p className="font-bold text-lg mb-4">Contact Us</p>
              <form
                className="w-full flex flex-col gap-4 sm:w-[300px]"
                onSubmit={onSubmit}
              >
                <Input
                  isRequired
                  errorMessage="Please enter a valid email"
                  label="Email"
                  labelPlacement="inside"
                  name="email"
                  placeholder="Enter your email"
                  type="email"
                />
                <Textarea
                  isRequired
                  className="w-full"
                  label="Description"
                  placeholder="Enter your description"
                />
                <Button type="submit" variant="bordered">
                  Submit
                </Button>
                {submitted && (
                  <div className="text-small ">
                    You submitted: <code>{JSON.stringify(submitted)}</code>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

        <div className="border-divider border-t mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Evently. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
