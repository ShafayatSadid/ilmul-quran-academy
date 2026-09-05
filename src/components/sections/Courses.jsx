"use client";

import Link from "next/link";
import { FaQuran, FaStar, FaLanguage, FaCheckCircle } from "react-icons/fa";
import { MdOutlineMenuBook, MdOutlinePhonelinkSetup } from "react-icons/md";
import { FreeClass } from "../shared/FreeClass";

export default function Courses() {
  const courses = [
    {
      id: 1,
      title: "সম্পুর্ন কুরআন শিক্ষা",
      icon: FaQuran,
      iconBg: "bg-primary/10 dark:bg-primary/20",
      iconColor: "text-primary dark:text-primary-light",
      accentColor: "bg-primary",
      duration: "৬ মাস",
      tag: "সর্বাধিক জনপ্রিয়",
      tagColor: "bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light",
      description: "৬ বছরের ওপরের বাচ্চা থেকে শুরু করে যেকোনো বয়সের নারী-পুরুষের জন্য",
      features: [
        "সম্পুর্ন কুরআন সহি-শুদ্ধভাবে হিফযে",
        "মাখরাজ",
        "তাজবীদ",
        "সিফাত",
        "নাজরানা",
        "প্রয়োজনীয় মাসলা-মাসায়েল",
        "২৪/৭ WhatsApp সাপোর্ট",
        "প্রতিক্রান্ত",
      ],
    },
    {
      id: 2,
      title: "সহি কুরআন শিক্ষা",
      icon: MdOutlineMenuBook,
      iconBg: "bg-accent/10 dark:bg-accent/20",
      iconColor: "text-accent dark:text-accent-light",
      accentColor: "bg-accent",
      duration: "৮ মাস",
      tag: "অত্যন্ত জনপ্রিয়",
      tagColor: "bg-accent/10 dark:bg-accent/20 text-accent dark:text-accent-light",
      description: "৬ বছরের ওপরের বাচ্চা থেকে শুরু করে যেকোনো বয়সের নারী-পুরুষের জন্য",
      features: [
        "মাখরাজ",
        "তাজবীদ",
        "সিফাত",
        "নাজরানা",
        "মাসনুন দু'আ",
        "প্রয়োজনীয় আয়াত / সূরা",
        "প্রয়োজনীয় মাসলা-মাসায়েল",
        "২৪/৭ WhatsApp সাপোর্ট",
        "প্রতিক্রান্ত",
      ],
    },
    {
      id: 3,
      title: "আরবি ভাষা শিক্ষা",
      icon: FaLanguage,
      iconBg: "bg-emerald-100/50 dark:bg-emerald-900/30",
      iconColor: "text-emerald-700 dark:text-emerald-300",
      accentColor: "bg-emerald-700",
      duration: "৪ মাস",
      tag: "প্র্যাকটিক্যাল",
      tagColor: "bg-emerald-100/50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300",
      description: "৬ বছরের ওপরের বাচ্চা থেকে শুরু করে যেকোনো বয়সের নারী-পুরুষের জন্য",
      features: [
        "মাখরাজ",
        "তাজবীদ",
        "সিফাত",
        "নাজরানা",
        "ছিলাতুন নাম (আরবি-বাংলা)",
        "মীমানুস সংস্কৃত মুদ্রণায়িত",
        "প্রয়োজনীয় তামরীনাত",
        "২৪/৭ WhatsApp সাপোর্ট",
        "প্রতিক্রান্ত",
      ],
    },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 max-w-7xl mx-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* সেকশন হেডার */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span className="inline-block px-4 py-1.5 text-sm font-medium rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light mb-4">
            আমাদের কোর্সসমূহ
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dark dark:text-cream">
            আমরা কী পড়াই
          </h2>
          <div className="w-20 h-1 bg-accent/60 dark:bg-accent/40 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-foreground/70 dark:text-cream/70 max-w-2xl mx-auto">
            আল-আজহার পদ্ধতিতে গুছানো ৩টি কোর্স, যা কুরআন বুঝার জন্য অপরিহার্য।
          </p>
        </div>

        {/* কার্ড গ্রিড */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {courses.map((course) => {
            const Icon = course.icon;
            return (
              <div
                key={course.id}
                className="group relative bg-card/20 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 border border-primary/5 dark:border-cream/5 flex flex-col h-full"
              >
                {/* উপরের অ্যাকসেন্ট বার */}
                <div className={`h-1.5 w-full ${course.accentColor}`} />

                <div className="p-6 lg:p-8 flex-1 flex flex-col">
                  {/* হেডার: আইকন + ডিউরেশন + ট্যাগ */}
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`p-3 rounded-xl ${course.iconBg} ${course.iconColor}`}
                    >
                      <Icon className="w-6 h-6 lg:w-7 lg:h-7" />
                    </div>
                    <div className="flex flex-col items-end gap-1.5">
                      <span className="text-xs font-medium text-foreground/50 dark:text-cream/50 bg-foreground/5 dark:bg-cream/5 px-3 py-1 rounded-full">
                        {course.duration}
                      </span>
                      <span className={`text-xs font-medium px-3 py-1 rounded-full ${course.tagColor}`}>
                        {course.tag}
                      </span>
                    </div>
                  </div>

                  {/* টাইটেল & ডিসক্রিপশন */}
                  <div className="space-y-2 mb-4">
                    <h3 className="font-heading text-xl lg:text-2xl font-bold text-dark dark:text-cream">
                      {course.title}
                    </h3>
                    <p className="text-sm text-foreground/70 dark:text-cream/70 leading-relaxed">
                      {course.description}
                    </p>
                  </div>

                  {/* ফিচার লিস্ট (বুলেট পয়েন্ট) */}
                  <div className="flex-1 space-y-1.5 mb-4">
                    {course.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-2 text-sm text-foreground/70 dark:text-cream/70"
                      >
                        <FaCheckCircle className="w-3.5 h-3.5 mt-0.5 text-primary dark:text-primary-light shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* ফুটার: আরও জানুন লিংক */}
                  <div className="pt-3 border-t border-primary/5 dark:border-cream/5 mt-auto flex justify-center">
                    <FreeClass/>
                  </div>
                </div>

                {/* ডেকোরেটিভ এলিমেন্ট */}
                <div className="absolute -bottom-16 -right-16 w-32 h-32 rounded-full bg-primary/5 dark:bg-primary/10 blur-2xl group-hover:scale-150 transition-transform duration-700 -z-10" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}