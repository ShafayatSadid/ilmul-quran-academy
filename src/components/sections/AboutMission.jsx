import { FaBullseye, FaEye, FaHeart, FaGraduationCap } from "react-icons/fa";

export default function AboutMission() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-background/50 dark:bg-background/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 text-sm font-medium rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light mb-4">
            আমাদের লক্ষ্য
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-secondary dark:text-cream">
            কেন আমরা কাজ করছি
          </h2>
          <div className="w-20 h-1 bg-accent/60 dark:bg-accent/40 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-foreground/70 dark:text-cream/70">
            আল্লাহর কালামকে সঠিকভাবে বুঝতে ও শেখাতে—এটাই আমাদের একমাত্র উদ্দেশ্য।
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* মিশন */}
          <div className="group relative bg-card dark:bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 border border-primary/5 dark:border-cream/5 p-8 lg:p-10 text-center">
            <div className="inline-flex p-4 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light mb-4">
              <FaBullseye className="w-8 h-8" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-secondary dark:text-cream mb-3">
              আমাদের মিশন
            </h3>
            <p className="text-foreground/70 dark:text-cream/70 leading-relaxed">
              প্রবাসী বাংলাদেশিদের জন্য আল-আজহার পদ্ধতিতে সহজ, আধুনিক ও গুণগতমানসম্মত 
              কুরআন শিক্ষা পৌঁছে দেওয়া—যাতে প্রতিটি পরিবার কুরআনের সাথে সম্পর্ক গড়ে তুলতে পারে।
            </p>
            <div className="absolute -bottom-16 -right-16 w-32 h-32 rounded-full bg-primary/5 dark:bg-primary/10 blur-2xl group-hover:scale-150 transition-transform duration-700 -z-10" />
          </div>

          {/* ভিশন */}
          <div className="group relative bg-card dark:bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 border border-accent/5 dark:border-accent/5 p-8 lg:p-10 text-center">
            <div className="inline-flex p-4 rounded-full bg-accent/10 dark:bg-accent/20 text-accent dark:text-accent-light mb-4">
              <FaEye className="w-8 h-8" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-secondary dark:text-cream mb-3">
              আমাদের ভিশন
            </h3>
            <p className="text-foreground/70 dark:text-cream/70 leading-relaxed">
              একটি বিশ্বব্যাপী ইসলামি শিক্ষা প্ল্যাটফর্ম হওয়া, যেখানে প্রতিটি মুসলিম পরিবার 
              সহজেই কুরআন, তাফসীর ও আরবি ভাষায় দক্ষতা অর্জন করতে পারে—আল-আজহারের ঐতিহ্যকে ধারণ করে।
            </p>
            <div className="absolute -bottom-16 -right-16 w-32 h-32 rounded-full bg-accent/5 dark:bg-accent/10 blur-2xl group-hover:scale-150 transition-transform duration-700 -z-10" />
          </div>

        </div>

        {/* অতিরিক্ত স্ট্যাট (ঐচ্ছিক) */}
        <div className="flex flex-wrap justify-center gap-6 mt-12 text-center">
          <div className="flex flex-col items-center">
            <span className="font-heading text-3xl font-bold text-primary dark:text-primary-light">৫০+</span>
            <span className="text-sm text-foreground/60 dark:text-cream/60">সন্তুষ্ট শিক্ষার্থী</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-heading text-3xl font-bold text-primary dark:text-primary-light">১২+</span>
            <span className="text-sm text-foreground/60 dark:text-cream/60">দেশে শিক্ষার্থী</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-heading text-3xl font-bold text-primary dark:text-primary-light">৪.৯★</span>
            <span className="text-sm text-foreground/60 dark:text-cream/60">গড় রেটিং</span>
          </div>
        </div>

      </div>
    </section>
  );
}