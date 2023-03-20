import { motion } from "framer-motion";
import styles from "../../styles/components/about/ClimbTheRanks.module.css";

export const ClimbTheRanks = () => {
  return (
    <motion.div
      className={styles.climbTheRanks}
      initial="hidden"
      whileInView="visible"
      variants={{
        visible: {
          opacity: 1,
          transition: {
            duration: 0.7,
            delay: 0.4,
          },
        },
        hidden: {
          opacity: 0,
        },
      }}
    >
      <img src="/illustrations/kudos.svg" />
      <h2>
        <span>Climb The Ranks,</span> Earn The Badges As You Go!
      </h2>
      <p>
        Scale through the different levels of the regen rangers and earn the
        badges from the community as well as the benefits attached with each
        level.
      </p>
    </motion.div>
  );
};
