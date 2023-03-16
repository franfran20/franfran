import Image from "next/image";
import styles from "../../styles/components/members/Member.module.css";
import { motion } from "framer-motion";

export const Member = ({ name, bio }) => {
  return (
    <motion.div
      className={styles.member}
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
    >
      <Image src="/dummy/dummy41.jpg" width="500" height="500" />
      <h3>{name}</h3>
      <p>{bio}</p>
    </motion.div>
  );
};
