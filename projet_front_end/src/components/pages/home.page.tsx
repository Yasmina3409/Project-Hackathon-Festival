import HeroBanner from "../sections/heroBanner";
import ResultSection from "../sections/resultSection";

export default function HomePage() {

   return (
      <main className={'min-h-screen w-screen '}>
         {/*HERO*/}
         <HeroBanner />
         {/*RESULTS*/}
         <ResultSection />

      </main>
   )
}


