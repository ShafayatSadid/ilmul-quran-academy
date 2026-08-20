import {
    FaQuran,
    FaLightbulb,
    FaPenFancy,
    FaFont,
    FaBullseye,
    FaStar,
    FaCheckCircle
} from "react-icons/fa";
import Link from "next/link";
import { IoCloseCircle } from "react-icons/io5";
import { FaCirclePlus } from "react-icons/fa6";
import { FreeClass } from "../shared/FreeClass";

const courses = [
    {
        id: 1,
        title: "স্পৃণ্য কুরআন শিক্ষা",
        description: "৪ বছরের ওপরে বাচ্চা থেকে শুরু করে যেকোনো বয়সের নারী-পুরুষের জন্য",
        icon: FaQuran,
        iconBg: "bg-primary/10 dark:bg-primary/20",
        iconColor: "text-primary dark:text-primary-light",
        duration: "৬ মাস",
        level: "বিগিনার",
        features: [
            "স্পৃণ্য কুরআন সহি-শুদ্ধভাবে হিফযে",
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
        title: "তাফসীরুল কুরআন",
        description: "৪ বছরের ওপরে বাচ্চা থেকে শুরু করে যেকোনো বয়সের নারী-পুরুষের জন্য",
        icon: FaLightbulb,
        iconBg: "bg-accent/10 dark:bg-accent/20",
        iconColor: "text-accent dark:text-accent-light",
        duration: "৮ মাস",
        level: "ইন্টারমিডিয়েট",
        features: [
            "আয়াতের শানে নুযূল",
            "ব্যাখ্যা ও প্রাসঙ্গিক হাদিস",
            "বাস্তব জীবনে প্রয়োগ",
            "সাপ্তাহিক অ্যাসেসমেন্ট",
            "প্রয়োজনীয় মাসলা-মাসায়েল",
            "২৪/৭ WhatsApp সাপোর্ট",
            "প্রতিক্রান্ত",
        ],
    },
    {
        id: 3,
        title: "আরবি ভাষা ও গ্রামার",
        description: "৪ বছরের ওপরে বাচ্চা থেকে শুরু করে যেকোনো বয়সের নারী-পুরুষের জন্য",
        icon: FaPenFancy,
        iconBg: "bg-emerald-100/50 dark:bg-emerald-900/30",
        iconColor: "text-emerald-600 dark:text-emerald-300",
        duration: "৪ মাস",
        level: "বিগিনার-ইন্টারমিডিয়েট",
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
    {
        id: 4,
        title: "নূরানী পদ্ধতি",
        description: "শিশু ও নতুন শিক্ষার্থীদের জন্য আরবি অক্ষর শিক্ষার ভিত্তি",
        icon: FaFont,
        iconBg: "bg-blue-100/50 dark:bg-blue-900/30",
        iconColor: "text-blue-600 dark:text-blue-300",
        duration: "৩ মাস",
        level: "বিগিনার (শিশু)",
        features: [
            "আরবি অক্ষর চেনা",
            "মাখরাজ ও হরফের গুণাবলী",
            "সংযুক্ত অক্ষর ও ছোট সূরা",
            "লিখতে ও পড়তে শেখা",
            "২৪/৭ WhatsApp সাপোর্ট",
        ],
    },
    {
        id: 5,
        title: "হিফজুল কুরআন",
        description: "পূর্ণ বা অংশবিশেষ কুরআন মুখস্থ করার গাইডলাইন",
        icon: FaBullseye,
        iconBg: "bg-rose-100/50 dark:bg-rose-900/30",
        iconColor: "text-rose-600 dark:text-rose-300",
        duration: "১২ মাস",
        level: "ইন্টারমিডিয়েট-অ্যাডভান্সড",
        features: [
            "তাজবীদ সহ হিফজ",
            "রিভিশন প্ল্যান",
            "তিলাওয়াত চেক ও সার্টিফিকেশন",
            "ব্যক্তিগত মনিটরিং",
            "২৪/৭ WhatsApp সাপোর্ট",
        ],
    },
    {
        id: 6,
        title: "ইসলামিক স্টাডিজ",
        description: "আকিদা, ফিকহ, সীরাত ও ইসলামী ইতিহাসের প্রাথমিক ধারণা",
        icon: FaStar,
        iconBg: "bg-purple-100/50 dark:bg-purple-900/30",
        iconColor: "text-purple-600 dark:text-purple-300",
        duration: "৬ মাস",
        level: "সব লেভেল",
        features: [
            "আকিদা ও ফিকহের প্রাথমিক বিষয়",
            "তাহারা, সালাত, সিয়াম, যাকাত, হজ",
            "সীরাত ও ইসলামী ইতিহাস",
            "প্রশ্নোত্তর সেশন",
            "২৪/৭ WhatsApp সাপোর্ট",
        ],
    },
];

export default function CoursesList() {
    return (
        <section className="py-16 md:py-20 lg:py-24 bg-background/50 dark:bg-background/5">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">



                {/* কার্ড গ্রিড */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {courses.map((course) => {
                        const Icon = course.icon;
                        return (
                            <div
                                key={course.id}
                                className="group relative bg-card/20 dark:bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 border border-primary/5 dark:border-cream/5 p-6 lg:p-8 flex flex-col"
                            >
                                {/* উপরের অ্যাকসেন্ট বার */}
                                <div className={`h-1 w-full ${course.iconBg} absolute top-0 left-0`} />

                                {/* আইকন (বড় বৃত্তাকার) */}
                                <div className={`w-16 h-16 rounded-full ${course.iconBg} flex items-center justify-center mb-4 ${course.iconColor}`}>
                                    <Icon className="w-8 h-8" />
                                </div>

                                {/* শিরোনাম ও বিবরণ */}
                                <h3 className="font-heading text-xl lg:text-2xl font-bold text-secondary dark:text-cream">
                                    {course.title}
                                </h3>
                                <p className="text-sm text-foreground/60 dark:text-cream/60 mt-1">
                                    {course.description}
                                </p>

                                {/* ডিউরেশন ও লেভেল */}
                                <div className="flex flex-wrap gap-2 mt-3">
                                    <span className="inline-flex items-center gap-1 text-xs font-medium text-foreground/50 dark:text-cream/50 bg-foreground/5 dark:bg-cream/5 px-3 py-1 rounded-full">
                                        🕒 {course.duration}
                                    </span>
                                    <span className="inline-flex items-center gap-1 text-xs font-medium text-primary dark:text-primary-light bg-primary/5 dark:bg-primary/10 px-3 py-1 rounded-full">
                                        📚 {course.level}
                                    </span>
                                </div>

                                {/* ফিচার লিস্ট - ✅ চিহ্ন সহ (স্ক্রিনশটের মতো) */}
                                <ul className="mt-4 space-y-1.5 flex-1">
                                    {course.features.slice(0, 6).map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-sm text-foreground/70 dark:text-cream/70">
                                            <FaCheckCircle className="w-3.5 h-3.5 mt-0.5 text-primary dark:text-primary-light shrink-0" />

                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                    {course.features.length > 6 && (
                                        <li className="flex items-start gap-2 text-sm text-foreground/50 dark:text-cream/50">
                                            <FaCirclePlus className="w-3.5 h-3.5 mt-0.5 text-primary dark:text-primary-light shrink-0" />
                                            <span>আরও {course.features.length - 6}টি ফিচার</span>
                                        </li>
                                    )}
                                </ul>

                                {/* ফুটার: বিস্তারিত জানুন লিংক */}
                                <div className="mt-4 pt-4 border-t border-primary/5 dark:border-cream/5 flex justify-center">
                                    <FreeClass />
                                </div>

                                {/* ডেকোরেটিভ এলিমেন্ট */}
                                <div className="absolute -bottom-16 -right-16 w-32 h-32 rounded-full bg-primary/5 dark:bg-primary/10 blur-2xl group-hover:scale-150 transition-transform duration-700 -z-10" />
                            </div>
                        );
                    })}
                </div>

                {/* ফুটার টেক্সট */}
                <div className="text-center mt-12">
                    <p className="text-sm text-foreground/50 dark:text-cream/50">
                        প্রতিটি কোর্সে রয়েছে <span className="font-semibold text-primary dark:text-primary-light">২৪/৭ WhatsApp সাপোর্ট</span> ও ব্যক্তিগত মনিটরিং।
                    </p>
                </div>
            </div>
        </section>
    );
}