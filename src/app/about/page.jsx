import AboutIntro from "@/components/sections/AboutIntro";
import AboutMission from "@/components/sections/AboutMission";

export const metadata = {
  title: "আমাদের সম্পর্কে | Muslim Sprouts Academy",
  description:
    "প্রবাসী বাংলাদেশিদের জন্য আল-আজহার ভিত্তিক কুরআন শিক্ষার প্ল্যাটফর্ম। জানুন আমাদের মিশন ও ভিশন।",
  keywords: [
    "আল-আজহার",
    "কুরআন শিক্ষা",
    "প্রবাসী বাংলাদেশি",
    "ইসলামি শিক্ষা",
    "অনলাইন কুরআন কোর্স",
    "ইলমুল কুরআন",
  ],
  authors: [{ name: "Muslim Sprouts Academy" }],
  openGraph: {
    title: "আমাদের সম্পর্কে | Muslim Sprouts Academy",
    description:
      "প্রবাসী বাংলাদেশিদের জন্য আল-আজহার ভিত্তিক কুরআন শিক্ষার প্ল্যাটফর্ম। জানুন আমাদের মিশন ও ভিশন।",
    type: "website",
    locale: "bn_BD",
    siteName: "Muslim Sprouts Academy",
    url: "https://ilmul-quran-academy.vercel.app/about",
  },
  twitter: {
    card: "summary_large_image",
    title: "আমাদের সম্পর্কে | Muslim Sprouts Academy",
    description:
      "প্রবাসী বাংলাদেশিদের জন্য আল-আজহার ভিত্তিক কুরআন শিক্ষার প্ল্যাটফর্ম।",
  },
};

export default function AboutPage() {
  return (
    <>
      <div className="max-w-7xl mx-auto mt-20">
        <AboutIntro />
      </div>

      <div>
        <AboutMission className="max-w-7xl mx-auto" />
      </div>
    </>
  );
}