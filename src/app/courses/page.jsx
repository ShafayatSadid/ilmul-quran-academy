import CoursesList from "@/components/sections/CoursesList";
import { FreeClass } from "@/components/shared/FreeClass";
import Link from "next/link";

export const metadata = {
  title: "আমাদের কোর্সসমূহ | ইলমুল কুরআন একাডেমি",
  description:
    "আল-আজহার পদ্ধতিতে ৬টি কোর্স—কুরআন তিলাওয়াত, তাফসীর, আরবি ভাষা, নূরানী পদ্ধতি, হিফজ ও ইসলামিক স্টাডিজ। কোর্স বেছে নিন আজই।",
  keywords: [
    "কুরআন শিক্ষা",
    "তাজবীদ",
    "তাফসীর",
    "আরবি ভাষা",
    "হিফজ",
    "ইসলামিক স্টাডিজ",
    "অনলাইন কোর্স",
  ],
  openGraph: {
    title: "আমাদের কোর্সসমূহ | ইলমুল কুরআন একাডেমি",
    description:
      "আল-আজহার পদ্ধতিতে ৬টি কোর্স—কুরআন তিলাওয়াত, তাফসীর, আরবি ভাষা, নূরানী পদ্ধতি, হিফজ ও ইসলামিক স্টাডিজ।",
    type: "website",
    locale: "bn_BD",
    siteName: "ইলমুল কুরআন একাডেমি",
  },
};

export default function CoursesPage() {
  return (
    <>
      {/* হিরো সেকশন (ছোট ব্যানার) */}
      <section className="pt-20 md:pt-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center py-12 md:py-16">
          <span className="inline-block px-4 py-1.5 text-sm font-medium rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light mb-4">
            আমাদের কোর্সসমূহ
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-secondary dark:text-cream">
            কোন কোর্সটি আপনার জন্য?
          </h1>
          <p className="mt-4 text-base sm:text-lg text-foreground/70 dark:text-cream/70 max-w-2xl mx-auto">
            আল-আজহার পদ্ধতিতে ৬টি গুছানো কোর্স—শিশু থেকে শুরু করে উন্নত স্তরের শিক্ষার্থীদের জন্য।
          </p>
          <div className="w-20 h-1 bg-accent/60 dark:bg-accent/40 mx-auto mt-4 rounded-full" />
        </div>
      </section>

      {/* কোর্স লিস্ট */}
      <div className="max-w-7xl mx-auto">
        <CoursesList />
      </div>

      {/* CTA সেকশন (ফুটারের আগে) */}
      <section className="py-16 md:py-20 bg-primary/5 dark:bg-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-secondary dark:text-cream">
            আপনার পছন্দের কোর্স বেছে নিন
          </h2>
          <p className="mt-2 text-base text-foreground/70 dark:text-cream/70 max-w-2xl mx-auto mb-5">
            আজই ফ্রি ট্রায়াল ক্লাস বুক করুন এবং আল-আজহারের শিক্ষকদের সাথে আপনার যাত্রা শুরু করুন।
          </p>
          <FreeClass/>
        </div>
      </section>
    </>
  );
}