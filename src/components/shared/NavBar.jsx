"use client";

import Link from "next/link";
import React, { useRef, useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { Button } from "@heroui/react";

import { ThemeSwitch } from "./ThemeSwitch";

const NavBar = () => {
    const sideMenuRef = useRef(null);
    const [burger, setBurger] = useState(true)

    const openMenu = () => {
        if (sideMenuRef.current) {
            setBurger(false)
            sideMenuRef.current.style.transform = "translateX(0)";
        }
    };

    const closeMenu = () => {
        if (sideMenuRef.current) {

            sideMenuRef.current.style.transform = "translateX(-100%)";
            setBurger(true)
        }
    };
   

    return (
        <nav className=" w-full mx-auto fixed px-5 lg:px-8 py-4 flex justify-between items-center z-50 bg-cream/80 backdrop-blur-md shadow-sm transition-colors duration-300">

            {/* Mobile Menu Icon */}
            <div className="md:hidden">
                {
                    burger ? <HiMenuAlt1
                        className="w-6 h-6 text-dark dark:text-cream cursor-pointer hover:text-primary transition"
                        onClick={openMenu}
                    /> : <></>
                }
            </div>

            {/* Mobile Side Menu */}
            <ul
                ref={sideMenuRef}
                style={{ transform: "translateX(-100%)" }}
                className="flex md:hidden flex-col gap-6 py-20 px-8 fixed left-0 top-0 bottom-0 w-64 z-50 h-screen bg-cream shadow-2xl transition-transform duration-300 text-dark dark:text-cream"
            >
                <div className="absolute left-6 top-6">
                    <IoClose
                        onClick={closeMenu}
                        className="w-6 h-6 cursor-pointer hover:text-primary transition"
                    />
                </div>
                <li>
                    <Link
                        onClick={closeMenu}
                        href="/"
                        className="font-heading text-lg font-bold hover:text-primary transition"
                    >
                        হোম
                    </Link>
                </li>
                <li>
                    <Link
                        onClick={closeMenu}
                        href="/about"
                        className="font-heading text-lg font-bold hover:text-primary transition"
                    >
                        আমাদের সম্পর্কে
                    </Link>
                </li>
                <li>
                    <Link
                        onClick={closeMenu}
                        href="#courses"
                        className="font-heading text-lg font-bold hover:text-primary transition"
                    >
                        কোর্সসমূহ
                    </Link>
                </li>
                {/* মোবাইলে CTA বাটন মেনুর নিচে */}
                <li className="mt-6">
                    <Button
                        as={Link}
                        href="#trial"
                        onClick={closeMenu}
                        className="bg-accent hover:bg-accent-light text-white font-heading font-semibold px-6 py-3 rounded-full shadow-md w-full text-center"
                    >
                        ফ্রি ক্লাস নিন
                    </Button>
                </li>
            </ul>

            {/* Logo */}
            <div className="flex-1 md:flex-none text-center md:text-left">
                <Link href="/">
                    <h1 className="font-heading text-2xl font-extrabold text-secondary dark:text-cream tracking-tight">
                        ইলমুল <span className="text-primary">কুরআন</span>
                    </h1>
                </Link>
            </div>

            {/* Desktop Menu (মাঝখানে) */}
            <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-8 py-2.5 bg-cream/70 backdrop-blur-sm shadow-md border border-primary/10 dark:border-cream/10">
                <li>
                    <Link
                        href="/"
                        className="font-body text-sm font-semibold text-dark dark:text-cream hover:text-primary transition"
                    >
                        হোম
                    </Link>
                </li>
                <li>
                    <Link
                        href="/about"
                        className="font-body text-sm font-semibold text-dark dark:text-cream hover:text-primary transition"
                    >
                        আমাদের সম্পর্কে
                    </Link>
                </li>
                <li>
                    <Link
                        href="#courses"
                        className="font-body text-sm font-semibold text-dark dark:text-cream hover:text-primary transition"
                    >
                        কোর্সসমূহ
                    </Link>
                </li>
            </ul>

            {/* Right Side: Theme Toggle + CTA Button */}
            <div className="flex items-center gap-4">
                <ThemeSwitch />

                <Button
                    as={Link}
                    href="#trial"
                    className="hidden sm:flex bg-accent hover:bg-accent-light text-white font-heading font-semibold px-5 py-2.5 rounded-full shadow-md transition-all duration-200 hover:scale-105"
                >
                    ফ্রি ক্লাস নিন
                </Button>
            </div>
        </nav>
    );
};

export default NavBar;