import styles from "../../styles/components/about/HeroText.module.css";
import { motion } from "framer-motion";

export const HeroText = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={{
        visible: {
          y: 0,
          transition: { stiffness: 180, type: "spring" },
        },
        hidden: {
          y: "-10vh",
        },
      }}
      className={styles.about}
    >
      <h2>Who Are The Regen Rangers?</h2>
      <p>
        The Regen Rangers is a community that has emerged from the{" "}
        <a className={styles.purple} href="https://opendatacommunity.org/">
          Open Decentralized Community (ODC)
        </a>{" "}
        with the objective of supporting grant reviewers in maintaining the
        integrity of the grant distribution process and protecting against Sybil
        attacks. Our mission is to ensure
        <span className={styles.purple}>
          {" "}
          fairness and transparency in the grant distribution space
        </span>{" "}
        by providing assistance to grant operators and preventing malicious
        actors from infiltrating the ecosystem.
      </p>
    </motion.div>
  );
};
