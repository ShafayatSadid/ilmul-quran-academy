"use client";

import { FaChalkboardTeacher, FaUserGraduate, FaClipboardCheck, FaQuran } from "react-icons/fa";

export default function Methodology() {
  const steps = [
    {
      id: 1,
      icon: FaChalkboardTeacher,
      title: "লাইভ ইন্টারঅ্যাকটিভ ক্লাস",
      description:
        "শিক্ষার্থীরা শিক্ষকের সাথে সরাসরি কথা বলে ক্লাস করে। প্রতিটি সেশন হয় জুম বা গুগল মিটের মাধ্যমে, যেখানে প্রশ্ন করার সুযোগ থাকে।",
      accentColor: "text-primary dark:text-primary-light",
      bgColor: "bg-primary/10 dark:bg-primary/20",
      stepNumber: "০১",
    },
    {
      id: 2,
      icon: FaUserGraduate,
      title: "ব্যক্তিগত মনিটরিং",
      description:
        "প্রত্যেক শিক্ষার্থীর জন্য আলাদা মনিটরিং সিস্টেম। শিক্ষকরা প্রতিটি শিক্ষার্থীর অগ্রগতি ট্র্যাক করেন ও প্রয়োজনীয় ফিডব্যাক দেন।",
      accentColor: "text-accent dark:text-accent-light",
      bgColor: "bg-accent/10 dark:bg-accent/20",
      stepNumber: "০২",
    },
    {
      id: 3,
      icon: FaClipboardCheck,
      title: "সাপ্তাহিক অ্যাসেসমেন্ট",
      description:
        "প্রতি সপ্তাহে ছোট কুইজ বা প্র্যাকটিক্যাল টেস্ট নেওয়া হয়। এতে শিক্ষার্থীর দুর্বলতা চিহ্নিত করে তা দ্রুত সমাধান করা হয়।",
      accentColor: "text-emerald-600 dark:text-emerald-300",
      bgColor: "bg-emerald-100/50 dark:bg-emerald-900/30",
      stepNumber: "০৩",
    },
    {
      id: 4,
      icon: FaQuran,
      title: "আল-আজহার পদ্ধতি",
      description:
        "শিক্ষা দেওয়া হয় আল-আজহার বিশ্ববিদ্যালয়ের স্বীকৃত পদ্ধতিতে। তাজবীদ, তাফসীর ও আরবি ভাষার ক্ষেত্রে এই পদ্ধতি অত্যন্ত কার্যকরী।",
      accentColor: "text-primary-dark dark:text-primary-light",
      bgColor: "bg-primary/5 dark:bg-primary/10",
      stepNumber: "০৪",
    },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 max-w-7xl mx-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* সেকশন হেডার */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span className="inline-block px-4 py-1.5 text-sm font-medium rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light mb-4">
            আমাদের শিক্ষাপদ্ধতি
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dark dark:text-cream">
            আমরা কীভাবে পড়াই
          </h2>
          <div className="w-20 h-1 bg-accent/60 dark:bg-accent/40 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-foreground/70 dark:text-cream/70 max-w-2xl mx-auto">
            আল-আজহার পদ্ধতিতে গুছানো ৪টি ধাপ, যা শিক্ষাকে সহজ, কার্যকর ও উপভোগ্য করে তোলে।
          </p>
        </div>

        {/* স্টেপ গ্রিড */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 relative">
          
          {/* সংযোগ রেখা (ডেকোরেটিভ) - শুধু ডেস্কটপে */}
          <div className="hidden lg:block absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-primary/10 dark:bg-primary/20 -translate-y-1/2 -z-10" />

          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.id}
                className="group relative bg-card/30 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 border border-primary/5 dark:border-cream/5 p-6 lg:p-8 flex flex-col"
              >
                {/* স্টেপ নাম্বার (ডেকোরেটিভ ব্যাকগ্রাউন্ড) */}
                <div className="absolute -top-4 -right-4 text-7xl font-black text-primary/5 dark:text-primary/10 select-none">
                  {step.stepNumber}
                </div>

                {/* আইকন ও শিরোনাম */}
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`p-3 rounded-xl ${step.bgColor} ${step.accentColor}`}
                  >
                    <Icon className="w-6 h-6 lg:w-7 lg:h-7" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl lg:text-2xl font-bold text-dark dark:text-cream">
                      {step.title}
                    </h3>
                    <span className="text-sm font-medium text-foreground/40 dark:text-cream/40">
                      ধাপ {step.stepNumber}
                    </span>
                  </div>
                </div>

                {/* বিবরণ */}
                <p className="text-sm text-foreground/70 dark:text-cream/70 leading-relaxed flex-1">
                  {step.description}
                </p>

                {/* ডেকোরেটিভ এলিমেন্ট (হোভারে) */}
                <div className="absolute -bottom-16 -left-16 w-32 h-32 rounded-full bg-primary/5 dark:bg-primary/10 blur-2xl group-hover:scale-150 transition-transform duration-700 -z-10" />
              </div>
            );
          })}
        </div>

        {/* অতিরিক্ত টেক্সট (ঐচ্ছিক) */}
        <div className="text-center mt-12">
          <p className="text-sm text-foreground/50 dark:text-cream/50">
            এই পদ্ধতিতে ইতিমধ্যে <span className="font-semibold text-primary dark:text-primary-light">৫০+</span> শিক্ষার্থী উপকৃত হয়েছে।
          </p>
        </div>
      </div>
    </section>
  );
}