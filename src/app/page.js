import Courses from "@/components/sections/Courses";
import Methodology from "@/components/sections/Methodology";
import Roadmap from "@/components/sections/Roadmap";
import Teachers from "@/components/sections/Teachers";
import Hero from "@/components/shared/Hero";


export default function Home() {
  return (

    <>
      <div className="max-w-7xl mx-auto">
        <Hero />
      </div>

      <div className="bg-background/50">
        <Courses />
      </div>

      <div className="bg-primary/2 dark:bg-primary/3">
        <Methodology />
      </div>

      <div className="bg-background/50 dark:bg-background/5">
        <Teachers/>
      </div>

      <div className="bg-primary/2 dark:bg-primary/3">
        <Roadmap/>
      </div>
    </>
  );
}
