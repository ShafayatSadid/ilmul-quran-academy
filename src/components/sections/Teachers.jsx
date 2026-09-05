"use client";

import Image from "next/image";
import { FaStar, FaUserGraduate } from "react-icons/fa";

export default function Teachers() {
  const teachers = [
    {
      id: 1,
      name: "আলেমা আফিয়া জান্নাত",
      title: "আল-আজহার বিশ্ববিদ্যালয়, কুরআন বিভাগ",
      specialty: "তাজবীদ ও তিলাওয়াত বিশেষজ্ঞ",
      experience: "৫ বছর",
      image: "/images/afia.jpg", // 
      rating: 4.9,
      students: 120,
    },
    {
      id: 2,
      name: "মাওলানা জাহাঙ্গীর আলম আল-আজহারী",
      title: "আল-আজহার বিশ্ববিদ্যালয়, ",
      specialty: "আরবি ভাষা ও গ্রামার",
      experience: "৭ বছর",
      image: "/images/jahangir.jpg", // আপনার ফাইল নাম অনুযায়ী
      rating: 4.8,
      students: 95,
    },
    {
      id: 3,
      name: "মাওলানা শাহাদাত হুসাইন আল-আজহারী",
      title: "আল-আজহার বিশ্ববিদ্যালয়, তাফসীর বিভাগ",
      specialty: "আরবি ভাষা ও গ্রামার",
      experience: "৪ বছর",
      image: "/images/shahadat.jpg", // আপনার ফাইল নাম অনুযায়ী
      rating: 4.7,
      students: 80,
    },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 max-w-7xl mx-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* সেকশন হেডার */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span className="inline-block px-4 py-1.5 text-sm font-medium rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light mb-4">
            আমাদের শিক্ষকমণ্ডলী
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-secondary dark:text-cream">
            আল-আজহারের মেধাবী শিক্ষক
          </h2>
          <div className="w-20 h-1 bg-accent/60 dark:bg-accent/40 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-foreground/70 dark:text-cream/70 max-w-2xl mx-auto">
            যাঁদের কাছ থেকে সরাসরি শিখবেন আপনি—আল-আজহার বিশ্ববিদ্যালয়ে অধ্যয়নরত অভিজ্ঞ শিক্ষকমণ্ডলী।
          </p>
        </div>

        {/* শিক্ষকের কার্ড গ্রিড */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {teachers.map((teacher) => (
            <div
              key={teacher.id}
              className="group relative bg-card/50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 border border-primary/5 dark:border-cream/5 p-6 lg:p-8 text-center flex flex-col items-center"
            >
              {/* প্রোফাইল ছবি (বৃত্তাকার) */}
              <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden ring-4 ring-primary/20 dark:ring-primary/30 group-hover:ring-primary/40 dark:group-hover:ring-primary/50 transition-all duration-300 mb-4">
                <Image
                  src={teacher.image}
                  alt={teacher.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* নাম ও পদবি */}
              <h3 className="font-heading text-xl lg:text-2xl font-bold text-secondary dark:text-cream">
                {teacher.name}
              </h3>
              <p className="text-sm font-medium text-primary dark:text-primary-light mt-1">
                {teacher.title}
              </p>
              <p className="text-sm text-foreground/60 dark:text-cream/60 mt-1">
                {teacher.specialty}
              </p>

              {/* রেটিং ও শিক্ষার্থী সংখ্যা */}
              <div className="flex items-center justify-center gap-4 mt-3 text-sm text-foreground/60 dark:text-cream/60">
                <div className="flex items-center gap-1">
                  <FaStar className="text-accent dark:text-accent-light w-3.5 h-3.5" />
                  <span className="font-medium">{teacher.rating}</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaUserGraduate className="text-primary dark:text-primary-light w-3.5 h-3.5" />
                  <span>{teacher.students}+ শিক্ষার্থী</span>
                </div>
              </div>

              {/* অভিজ্ঞতা ব্যাজ */}
              <div className="mt-4 inline-block px-4 py-1.5 text-xs font-medium rounded-full bg-primary/5 dark:bg-primary/10 text-primary dark:text-primary-light border border-primary/10 dark:border-primary/20">
                {teacher.experience} অভিজ্ঞতা
              </div>

              {/* ডেকোরেটিভ এলিমেন্ট (হোভারে) */}
              <div className="absolute -bottom-16 -right-16 w-32 h-32 rounded-full bg-primary/5 dark:bg-primary/10 blur-2xl group-hover:scale-150 transition-transform duration-700 -z-10" />
            </div>
          ))}
        </div>

        {/* ফুটার টেক্সট (ঐচ্ছিক) */}
        <div className="text-center mt-12">
          <p className="text-sm text-foreground/50 dark:text-cream/50">
            আল-আজহারের শিক্ষকদের সাথে <span className="font-semibold text-primary dark:text-primary-light">আপনার শিক্ষা</span> হোক আরও সমৃদ্ধ।
          </p>
        </div>
      </div>
    </section>
  );
}