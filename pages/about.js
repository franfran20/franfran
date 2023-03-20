import { Benefits } from "@/components/about/Benefits";
import { ClimbTheRanks } from "@/components/about/ClimbTheRanks";
import { CoreValues } from "@/components/about/CoreValues";
import { HeroText } from "@/components/about/HeroText";
import { OurMission } from "@/components/about/OurMission";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>Regen Rangers | About Us</title>
        <meta
          name="Regen Rangers About Page"
          content="About Us Page For Regen Rangers Website"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
        <HeroText />

        <OurMission />

        <CoreValues />

        <Benefits />

        <ClimbTheRanks />
      </main>
    </>
  );
}
