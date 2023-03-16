import styles from "../../styles/components/home/SafeGuardingWeb3.module.css";
import { easeIn, motion } from "framer-motion";

export const SafeGuardingWeb3 = () => {
  return (
    <div className={styles.SafeGuardingWeb3}>
      <div className={styles.content}>
        <motion.img
          src="/illustrations/atom.svg"
          width="500"
          height="500"
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              opacity: 1,
              x: 0,
              transition: {
                duration: 1,
                type: "tween",
                easeIn: 3,
              },
            },
            hidden: {
              opacity: 0,
              x: "30vw",
            },
          }}
        />

        <motion.div
          className={styles.text}
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              y: 0,
              transition: {
                stiffness: 40,
                type: "spring",
              },
            },
            hidden: {
              y: "40vh",
            },
          }}
        >
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
        </motion.div>
      </div>
    </div>
  );
};
