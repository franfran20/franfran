import styles from "../../styles/components/home/SafeGuardingWeb3.module.css";
import { easeIn, motion } from "framer-motion";

export const SafeGuardingWeb3 = () => {
  return (
    <div className={styles.SafeGuardingWeb3}>
      <div className={styles.content}>
        <motion.img
          src="/illustrations/kudos.svg"
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
          <h2>Safeguarding Web3s Public Good Funding from Sybil Attacks</h2>
          <p>
            The collective funding of public goods through Web3 presents a
            bright spot for the decentralized ecosystem. However, this progress
            could be undermined by the threat of Sybil attacks, which could
            enable malicious actors to capture the funding intended for public
            goods. To prevent this outcome, it is crucial for us to resist Sybil
            attacks and maintain the integrity of grant distribution processes.
            Therefore, it is essential to prioritize the development and
            adoption of robust security measures to safeguard the grant
            distribution space and ensure that the potential of Web3 for
            collective funding of public goods is fully realized.
          </p>

          <motion.a href="https://opendatacommunity.org/docs/">
            Become A Ranger Today &gt;
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};
