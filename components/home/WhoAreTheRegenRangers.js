import styles from "../../styles/components/home/WhoAreTheRegenRangers.module.css";
import { motion } from "framer-motion";

export const WhoAreTheRegenRangers = () => {
  return (
    <div className={styles.WhoAreTheRegenRangers}>
      <div className={styles.imgContainer}>
        <motion.img
          src="/illustrations/atom.svg"
          width="800"
          height="800"
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: { opacity: 1, transition: { duration: 1 } },
            hidden: { opacity: 0 },
          }}
        />
      </div>

      {
        <motion.div
          className={styles.text}
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              y: 0,
              transition: {
                type: "spring",
                stiffness: 180,
              },
            },
            hidden: { y: "20vh" },
          }}
        >
          <h2>Who Are We ?</h2>

          <p>
            The Regen Rangers is a community that has emerged from the{" "}
            <a className={styles.purple} href="https://opendatacommunity.org/">
              Open Decentralized Community (ODC)
            </a>{" "}
            with the objective of supporting grant reviewers in maintaining the
            integrity of the grant distribution process and protecting against
            Sybil attacks. Our mission is to ensure
            <span className={styles.purple}>
              {" "}
              fairness and transparency in the grant distribution space
            </span>{" "}
            by providing assistance to grant operators and preventing malicious
            actors from infiltrating the ecosystem.
          </p>
        </motion.div>
      }
    </div>
  );
};
