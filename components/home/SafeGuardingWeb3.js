import Image from "next/image";
import styles from "../../styles/components/home/SafeGuardingWeb3.module.css";

export const SafeGuardingWeb3 = () => {
  return (
    <div className={styles.SafeGuardingWeb3}>
      <div className={styles.content}>
        <Image src="/illustrations/atom.svg" width="500" height="500" />
        <div className={styles.text}>
          <h2>
            Safeguarding Web3s Public Good Funding from Sybil Attacks and
            Centralization
          </h2>
          <p>
            If we collectively do not resist Sybil attacks then one of the real
            bright spots of web3 - the collective funding of public goods -
            could be captured by essentially criminal forces. Similarly, if we
            continue to all take shortcuts when accessing and analyzing
            blockchain data then we are adding vulnerability to the ecosystem
            right above the decentralized blockchains in the form of
            centralization.
          </p>
        </div>
      </div>
    </div>
  );
};
