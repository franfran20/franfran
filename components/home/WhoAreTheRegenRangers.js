import Image from "next/image";
import styles from "../../styles/components/home/WhoAreTheRegenRangers.module.css";

export const WhoAreTheRegenRangers = () => {
  return (
    <div className={styles.WhoAreTheRegenRangers}>
      <Image src="/illustrations/blocks.svg" width="500" height="500" />

      <div className={styles.text}>
        <h2>
          Who Are The <span>Regen Rangers</span> ?
        </h2>

        <p>
          The <span>Regen Rangers</span> are an{" "}
          <span>open-source community</span> originally founded by Gitcoin as a
          part of their efforts to enable communities to fund their shared
          needs. Our mission is to protect web3, focusing on:
        </p>

        <p>
          - <span>Sybil resistance through data science</span> and the
          development of useful algorithms and other approaches
        </p>

        <p>
          - <span>Resisting recentralization</span> and potential capture at the
          data layer
        </p>
      </div>
    </div>
  );
};
