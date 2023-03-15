import { CORE_MEMBERS } from "@/utils/utils";
import { Member } from "../components/members/Member";
import styles from "../styles/Members.module.css";
import Head from "next/head";

export default function Members() {
  return (
    <div className={styles.members}>
      <Head>
        <title>Regen Rangers | Members</title>
        <meta
          name="Regen Rangers Core Members"
          content="Regen Rangers Core Members Page"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <h2>Core Members</h2>

      <div className={styles.coreMembers}>
        {CORE_MEMBERS.map((member, index) => {
          return <Member name={member.name} bio={member.bio} key={index} />;
        })}
      </div>
    </div>
  );
}
