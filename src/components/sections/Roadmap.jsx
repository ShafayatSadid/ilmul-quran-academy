"use client";

import { 
  FaCalendarCheck, 
  FaUserClock, 
  FaChalkboardTeacher, 
  FaClipboardList, 
  FaCertificate,
  FaUserFriends,
  FaClock
} from "react-icons/fa";

export default function Roadmap() {
  const steps = [
    {
      id: 1,
      icon: FaCalendarCheck,
      title: "ফ্রি ট্রায়াল ক্লাস",
      description: "প্রথমেই একটি ফ্রি ট্রায়াল সেশন, যেখানে শিক্ষক ও শিক্ষার্থী পরস্পরকে জানবেন এবং কোর্সের রূপরেখা ঠিক করবেন।",
      number: "০১",
    },
    {
      id: 2,
      icon: FaUserClock,
      title: "কাস্টমাইজড সময়সূচি",
      description: "আপনার পছন্দের দিন ও সময় বেছে নিন। আমরা আপনার সুবিধামতো ক্লাসের সময় ঠিক করে দেব।",
      number: "০২",
    },
    {
      id: 3,
      icon: FaChalkboardTeacher,
      title: "ওয়ান-টু-ওয়ান ক্লাস শুরু",
      description: "আল-আজহার শিক্ষকের সাথে সরাসরি ব্যক্তিগত সেশনে কুরআন, তাজবীদ বা আরবি শেখা শুরু।",
      number: "০৩",
    },
    {
      id: 4,
      icon: FaClipboardList,
      title: "সাপ্তাহিক অ্যাসেসমেন্ট",
      description: "প্রতি সপ্তাহে অগ্রগতি মূল্যায়ন ও শিক্ষকের কাছ থেকে প্রয়োজনীয় ফিডব্যাক গ্রহণ।",
      number: "০৪",
    },
    {
      id: 5,
      icon: FaCertificate,
      title: "সার্টিফিকেট অর্জন",
      description: "কোর্স সফলভাবে শেষ করে আল-আজহার-অনুমোদিত সার্টিফিকেট অর্জন করুন।",
      number: "০৫",
    },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 max-w-7xl mx-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* সেকশন হেডার */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span className="inline-block px-4 py-1.5 text-sm font-medium rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light mb-4">
            শিক্ষার যাত্রা
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-secondary dark:text-cream">
            কীভাবে শুরু করবে, কীভাবে শেষ করবে?
          </h2>
          <div className="w-20 h-1 bg-accent/60 dark:bg-accent/40 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-foreground/70 dark:text-cream/70 max-w-2xl mx-auto">
            একদম প্রথম ধাপ থেকে শুরু করে কুরআন শিক্ষা সম্পন্ন করা—সবকিছু তোমার হাতের নিয়ন্ত্রণে।
          </p>
        </div>

        {/* রোডম্যাপ ধাপসমূহ (ডেস্কটপে অনুভূমিক, মোবাইলে উল্লম্ব) */}
        <div className="relative">
          {/* সংযোগ রেখা (শুধু ডেস্কটপে) */}
          <div className="hidden lg:block absolute top-1/2 left-[8.33%] right-[8.33%] h-0.5 bg-primary/10 dark:bg-primary/20 -translate-y-1/2 -z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-4 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isLast = index === steps.length - 1;
              return (
                <div
                  key={step.id}
                  className="relative flex flex-col items-center text-center group"
                >
                  {/* সংযোগকারী ডট (মোবাইলের জন্য লাইন) */}
                  {!isLast && (
                    <div className="hidden lg:block absolute -right-3 top-6 w-6 h-0.5 bg-primary/10 dark:bg-primary/20 -z-10" />
                  )}

                  {/* নাম্বার + আইকন (বৃত্তাকার) */}
                  <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light text-2xl font-black mb-3 ring-4 ring-background dark:ring-background group-hover:ring-primary/20 transition-all duration-300">
                    <span className="text-sm font-bold">{step.number}</span>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-background dark:bg-background flex items-center justify-center text-xs text-primary dark:text-primary-light border border-primary/10 dark:border-primary/20">
                      <Icon className="w-3 h-3" />
                    </div>
                  </div>

                  {/* শিরোনাম ও বর্ণনা */}
                  <h3 className="font-heading text-base lg:text-lg font-bold text-secondary dark:text-cream mb-1">
                    {step.title}
                  </h3>
                  <p className="text-xs text-foreground/60 dark:text-cream/60 max-w-[180px] leading-relaxed">
                    {step.description}
                  </p>

                  {/* স্টেপ নম্বর (ডেকোরেটিভ) */}
                  <div className="absolute -top-2 -right-2 text-4xl font-black text-primary/5 dark:text-primary/10 select-none -z-10">
                    {step.number}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* অতিরিক্ত ফিচার (ওয়ান-টু-ওয়ান + টাইম কাস্টমাইজেশন) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 lg:mt-16">
          <div className="group relative bg-card dark:bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 border border-primary/5 dark:border-cream/5 p-6 lg:p-8 flex items-start gap-4">
            <div className="p-3 rounded-xl bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light">
              <FaUserFriends className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-heading text-lg lg:text-xl font-bold text-secondary dark:text-cream">
                ওয়ান-টু-ওয়ান ক্লাস
              </h3>
              <p className="text-sm text-foreground/70 dark:text-cream/70 mt-1">
                প্রতিটি শিক্ষার্থী পাবে একান্ত个人 মনিটরিং ও শিক্ষকের পূর্ণ সময়। নিজের গতিতে শেখার সুযোগ।
              </p>
            </div>
            <div className="absolute -bottom-16 -right-16 w-32 h-32 rounded-full bg-primary/5 dark:bg-primary/10 blur-2xl group-hover:scale-150 transition-transform duration-700 -z-10" />
          </div>

          <div className="group relative bg-card dark:bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 border border-accent/5 dark:border-accent/5 p-6 lg:p-8 flex items-start gap-4">
            <div className="p-3 rounded-xl bg-accent/10 dark:bg-accent/20 text-accent dark:text-accent-light">
              <FaClock className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-heading text-lg lg:text-xl font-bold text-secondary dark:text-cream">
                নিজের মতো সময় বেছে নিন
              </h3>
              <p className="text-sm text-foreground/70 dark:text-cream/70 mt-1">
                শিক্ষার্থী তার পছন্দের দিন ও সময় বেছে নিতে পারবে। ক্লাসের সময়সূচি সম্পূর্ণ কাস্টমাইজেবল।
              </p>
            </div>
            <div className="absolute -bottom-16 -right-16 w-32 h-32 rounded-full bg-accent/5 dark:bg-accent/10 blur-2xl group-hover:scale-150 transition-transform duration-700 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}