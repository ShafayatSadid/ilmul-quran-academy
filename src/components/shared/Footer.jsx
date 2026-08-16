"use client";

import Link from "next/link";
import { FaFacebook, FaYoutube, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { Button } from "@heroui/react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cream border-t border-primary/10 dark:border-cream/10 mt-auto">
      {/* মূল ফুটার কন্টেন্ট */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* কলাম ১: ব্র্যান্ডিং */}
          <div className="space-y-4">
            <Link href="/">
              <h2 className="font-heading text-2xl font-extrabold text-secondary dark:text-cream tracking-tight">
                ইলমুল <span className="text-primary dark:text-primary-light">কুরআন</span>
              </h2>
            </Link>
            <p className="text-sm text-foreground/70 dark:text-cream/70 leading-relaxed max-w-xs">
              আল-আজহার ভিত্তিক অনলাইন কুরআন শিক্ষা। প্রবাসী বাংলাদেশিদের জন্য তাজবীদ, তাফসীর ও আরবি ভাষার কোর্স।
            </p>
            <div className="flex gap-3 pt-2">
              <a
                href="#"
                className="p-2 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors duration-200"
                aria-label="Facebook"
              >
                <FaFacebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors duration-200"
                aria-label="YouTube"
              >
                <FaYoutube className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors duration-200"
                aria-label="Instagram"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* কলাম ২: দ্রুত লিংক */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-dark dark:text-cream">দ্রুত লিংক</h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/"
                  className="text-sm text-foreground/70 dark:text-cream/70 hover:text-primary dark:hover:text-primary-light transition-colors duration-200"
                >
                  হোম
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-foreground/70 dark:text-cream/70 hover:text-primary dark:hover:text-primary-light transition-colors duration-200"
                >
                  আমাদের সম্পর্কে
                </Link>
              </li>
              <li>
                <Link
                  href="#courses"
                  className="text-sm text-foreground/70 dark:text-cream/70 hover:text-primary dark:hover:text-primary-light transition-colors duration-200"
                >
                  কোর্সসমূহ
                </Link>
              </li>
              <li>
                <Link
                  href="#trial"
                  className="text-sm text-foreground/70 dark:text-cream/70 hover:text-primary dark:hover:text-primary-light transition-colors duration-200"
                >
                  ফ্রি ট্রায়াল ক্লাস
                </Link>
              </li>
            </ul>
          </div>

          {/* কলাম ৩: যোগাযোগ */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-dark dark:text-cream">যোগাযোগ</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-foreground/70 dark:text-cream/70">
                <FaEnvelope className="w-4 h-4 mt-0.5 text-primary dark:text-primary-light shrink-0" />
                <span>info@ilmulquran.com</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-foreground/70 dark:text-cream/70">
                <FaPhone className="w-4 h-4 mt-0.5 text-primary dark:text-primary-light shrink-0" />
                <span>+৮৮০ ১২৩৪-৫৬৭৮৯০</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-foreground/70 dark:text-cream/70">
                <FaMapMarkerAlt className="w-4 h-4 mt-0.5 text-primary dark:text-primary-light shrink-0" />
                <span>ঢাকা, বাংলাদেশ</span>
              </li>
            </ul>
          </div>

          {/* কলাম ৪: নিউজলেটার (অপশনাল) */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-dark dark:text-cream">আপডেট থাকুন</h3>
            <p className="text-sm text-foreground/70 dark:text-cream/70">
              নতুন কোর্স ও অফার সম্পর্কে জানতে সাবস্ক্রাইব করুন।
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="আপনার ইমেইল"
                className="flex-1 px-4 py-2.5 text-sm rounded-full border border-border dark:border-muted/20 bg-white/50 text-foreground dark:text-cream placeholder:text-foreground/40 dark:placeholder:text-cream/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                required
              />
              <Button
                type="submit"
                className="bg-primary hover:bg-primary-light text-white font-heading font-semibold px-5 py-2.5 rounded-full shadow-md transition-all duration-200 hover:scale-105"
              >
                সাবস্ক্রাইব
              </Button>
            </form>
          </div>

        </div>
      </div>

      {/* নিচের কপিরাইট বার */}
      <div className="border-t border-primary/10 dark:border-cream/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row justify-evenly items-center gap-2 text-xs text-foreground/50 dark:text-cream/50">
            <p>
              &copy; {currentYear} ইলমুল কুরআন একাডেমি। সকল অধিকার সংরক্ষিত।
            </p>
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:text-primary dark:hover:text-primary-light transition-colors">
                গোপনীয়তা নীতি
              </Link>
              <Link href="/terms" className="hover:text-primary dark:hover:text-primary-light transition-colors">
                শর্তাবলী
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}