// import { Noto_Sans_Bengali } from 'next/font/google';
import "./globals.css";
import { Providers } from "./providers";
import NavBar from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";
import { Toaster } from "react-hot-toast";

// const notoSansBengali = Noto_Sans_Bengali({
//   subsets: ["bengali"],
//   weight: ["400", "500", "600", "700"],
//   display: "swap",
// });



export const metadata = {
  title: "Muslim Sprouts Academy | আল-আজহার ভিত্তিক কুরআন শিক্ষা",
  description:
    "প্রবাসী বাংলাদেশিদের জন্য আল-আজহার বিশ্ববিদ্যালয়ের মেধাবী শিক্ষার্থীদের দ্বারা কুরআন, তাফসীর ও আরবি ভাষার অনলাইন কোর্স। ফ্রি ট্রায়াল ক্লাস নিন।",
  keywords: ["কুরআন শিক্ষা", "আল-আজহার", "তাজবীদ", "তাফসীর", "আরবি ভাষা", "অনলাইন কোর্স", "প্রবাসী বাংলাদেশি"],
  authors: [{ name: "Muslim Sprouts Academy" }],
  openGraph: {
    title: "Muslim Sprouts Academy",
    description: "আল-আজহার থেকে সরাসরি কুরআন শিক্ষা",
    type: "website",
    locale: "bn_BD",
    siteName: "Muslim Sprouts Academy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="bn"
      className={` h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" style={{ fontFamily: "var(--font-bengali)" }}>
        <Providers>
          <Toaster
            position="top-center"
            reverseOrder={false}
          />
          <NavBar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

// 