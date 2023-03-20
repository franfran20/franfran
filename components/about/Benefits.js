import styles from "../../styles/components/about/Benefits.module.css";
import { motion } from "framer-motion";

export const Benefits = () => {
  return (
    <div className={styles.benefits}>
      <motion.div
        className={styles.container}
        initial="hidden"
        whileInView="visible"
        variants={{
          visible: {
            y: 0,
            transition: {
              type: "spring",
              stiffness: 50,
            },
          },
          hidden: {
            y: "50vh",
          },
        }}
      >
        <div
          className={styles.texts}
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              y: 0,
              transition: {
                type: "spring",
                stiffness: 200,
              },
            },
            hidden: {
              y: "50vh",
            },
          }}
        >
          <h3>Benefits Of Becoming A Regen Ranger</h3>
          <div className={styles.paras}>
            <p> - Possible paid bounties for analysis of projects</p>
            <p> - Role as a hackathon judge, discord designation etc</p>
            <p> - Access to tooling and infrastructure</p>
            <p> - Governance - full weight on votes</p>
            <p> - Feedback from community via PRs, Discord</p>
            <p> - Potential access to professional service opportunities</p>
            <p> - Earn The Regen Rangers Badge as you climb the ranks</p>
          </div>

          <a className={styles.link}>Learn What It Takes &gt;</a>
        </div>
        <div className={styles.imgContainer}>
          <img src="/illustrations/map.png" />
        </div>
      </motion.div>
    </div>
  );
};
