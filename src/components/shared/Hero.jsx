"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/react";
import { FreeClass } from "./FreeClass";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-cream dark:bg-secondary/10 py-20 md:py-24 mt-10">

            {/* ব্যাকগ্রাউন্ডে সবুজ আভা (Aura) */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-accent/5 dark:bg-accent/10 rounded-full blur-3xl -z-10" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* ===== বাম পাশে টেক্সট ===== */}
                    <div className="order-2 lg:order-1 text-center lg:text-left space-y-6">
                        {/* ব্যাজ (ঐচ্ছিক) */}
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light text-sm font-medium">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                            </span>
                            আল-আজহার কর্তৃক স্বীকৃত
                        </div>

                        {/* হেডিং */}
                        <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight text-dark dark:text-cream">
                            আল-আজহার থেকে <br />
                            <span className="text-primary dark:text-primary-light">সরাসরি কুরআন</span> শিক্ষা
                        </h1>

                        {/* সাব-টেক্সট */}
                        <p className="mt-5 text-base sm:text-lg text-foreground/80 dark:text-cream/80 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                            প্রবাসী বাংলাদেশিদের জন্য তাজবীদ, তাফসীর ও আরবি ভাষার পূর্ণাঙ্গ কোর্স।
                            আল-আজহার বিশ্ববিদ্যালয়ের মেধাবী শিক্ষার্থীদের কাছ থেকে গ্রহণ করুন বিশ্বস্ত শিক্ষা।
                        </p>

                        {/* ট্রাস্ট সিগন্যাল (বুলেট পয়েন্ট) */}
                        <div className="flex flex-col sm:flex-row items-center lg:justify-start gap-3 sm:gap-6 text-sm text-foreground/70 dark:text-cream/70">
                            <div className="flex items-center gap-2">
                                <span className="text-primary dark:text-primary-light text-lg">✓</span>
                                আল-আজহার শিক্ষকমণ্ডলী
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-primary dark:text-primary-light text-lg">✓</span>
                                ব্যক্তিগত মনিটরিং
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-primary dark:text-primary-light text-lg">✓</span>
                                সীমিত শিক্ষার্থী
                            </div>
                        </div>

                        {/* CTA বাটন + সেকেন্ডারি লিংক */}
                        <div className="flex flex-col sm:flex-row items-center gap-4 pt-2  my-7">
                            <FreeClass/>
                            <Link
                                href="/about"
                                className="text-primary dark:text-primary-light font-medium hover:underline transition flex items-center gap-1"
                            >
                                আমাদের সম্পর্কে জানুন
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>

                        {/* অতিরিক্ত ট্রাস্ট (পরিসংখ্যান) */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-6 pt-4 text-sm text-foreground/60 dark:text-cream/60">
                            <div className="flex items-center gap-2">
                                <span className="font-bold text-primary dark:text-primary-light text-lg">৫০+</span>
                                সন্তুষ্ট শিক্ষার্থী
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="font-bold text-primary dark:text-primary-light text-lg">৪.৯★</span>
                                গড় রেটিং
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="font-bold text-primary dark:text-primary-light text-lg">১২+</span>
                                দেশে শিক্ষার্থী
                            </div>
                        </div>
                    </div>

                    {/* ===== ডান পাশে ছবি ===== */}
                    <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-[307px] md:max-w-[410px] lg:max-w-[460px] xl:max-w-[460px] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5 dark:ring-white/5 bg-cream dark:bg-secondary">
                            {/* ইমেজ */}
                            <Image
                                src="/images/hero-student.jpg"
                                alt="আল-আজহার শিক্ষার্থী কুরআন তিলাওয়াত করছে"
                                fill
                                className="object-cover"
                                priority
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />

                            {/* হালকা ওভারলে */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />

                            {/* নিচের ব্যাজ */}
                            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                                <span className="bg-black/40 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full">
                                    📖 তাজবীদ সহ কুরআন শিক্ষা
                                </span>
                                <span className="bg-accent/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full">
                                    আল-আজহার
                                </span>
                            </div>
                        </div>

                        {/* ডেকোরেটিভ রিং */}
                        <div className="hidden lg:block absolute -bottom-9 left-5 w-24 h-24 border-2 border-primary/10 dark:border-primary/20 rounded-full -z-10" />
                        <div className="hidden lg:block absolute -top-8 -right-7 w-20 h-20 border-2 border-accent/10 dark:border-accent/20 rounded-full -z-10" />
                    </div>

                </div>
            </div>
        </section>
    );
}