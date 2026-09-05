import Image from "next/image";
import Link from "next/link";
import { FreeClass } from "../shared/FreeClass";

export default function AboutIntro() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* বাম পাশে টেক্সট */}
          <div className="order-2 lg:order-1 space-y-6">
            <span className="inline-block px-4 py-1.5 text-sm font-medium rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light">
              আমাদের সম্পর্কে
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-secondary dark:text-cream leading-tight">
              আল-আজহারের আলো <br />
              <span className="text-primary dark:text-primary-light">পৌঁছে দিচ্ছি</span> আপনার ঘরে
            </h1>
            <p className="text-base sm:text-lg text-foreground/70 dark:text-cream/70 leading-relaxed">
              <strong>Muslim Sprouts একাডেমি</strong> প্রবাসী বাংলাদেশিদের জন্য আল-আজহার বিশ্ববিদ্যালয়ের 
              মেধাবী শিক্ষার্থীদের দ্বারা কুরআন, তাফসীর ও আরবি ভাষার অনলাইন শিক্ষা প্রদান করে। 
              আমাদের লক্ষ্য—ঐতিহ্যবাহী আল-আজহার পদ্ধতিতে বিশ্বমানের ইসলামি শিক্ষা পৌঁছে দেওয়া 
              যেখানে প্রয়োজন, সেখানেই।
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-2 text-sm text-foreground/60 dark:text-cream/60">
                <span className="text-primary dark:text-primary-light text-lg">✓</span>
                আল-আজহার মেধাবী শিক্ষার্থী
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground/60 dark:text-cream/60">
                <span className="text-primary dark:text-primary-light text-lg">✓</span>
                ব্যক্তিগত মনিটরিং
              </div>
            </div>
            <div className="flex justify-center md:justify-start mt-4">
                <FreeClass/>
            </div>
          </div>

          {/* ডান পাশে ছবি */}
          <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm lg:max-w-md aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5 dark:ring-white/5">
              <Image
                src="/images/al-azhar.jpg"
                alt="আল-আজহার বিশ্ববিদ্যালয়"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                <span className="bg-black/40 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full">
                   আল-আজহার বিশ্ববিদ্যালয়, কায়রো
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}