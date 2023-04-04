import { Hero } from "@/components/Hero";
import { WhoAreTheRegenRangers } from "@/components/WhoAreTheRegenRangers";
import { WhatIsOdc } from "@/components/WhatIsOdc";
import { AIPoweredDocs } from "@/components/AIPoweredDocs";
import { Benefits } from "@/components/Benefits";

export default function Home() {
  return (
    <>
      <main>
        <Hero />

        <WhatIsOdc />

        <AIPoweredDocs />

        <WhoAreTheRegenRangers />

        <Benefits />
      </main>
    </>
  );
}
