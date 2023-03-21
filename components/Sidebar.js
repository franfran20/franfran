import Image from "next/image";
import Link from "next/link";
import styles from "../styles/components/Sidebar.module.css";
import { motion } from "framer-motion";
import { SOCIAL_LINKS } from "@/utils/utils";

export const Sidebar = ({ setMenu, menu }) => {
  const handleSetMenu = () => {
    setMenu((prev) => !prev);
  };
  return (
    <div className={styles.linksAndSocials}>
      <Image
        src="/navbar/go_back.png"
        height="60"
        width="60"
        className={styles.goback}
        onClick={() => handleSetMenu()}
      />

      <div className={styles.links}>
        <motion.a href="/about" whileHover={{ scale: 1.2 }}>
          About Us
        </motion.a>
        <motion.a
          href="https://opendatacommunity.org/blog/"
          whileHover={{ scale: 1.2 }}
        >
          Blogs
        </motion.a>
        <motion.a
          href="https://opendatacommunity.org/docs/"
          whileHover={{ scale: 1.2 }}
        >
          Docs &gt;
        </motion.a>
      </div>

      <div className={styles.socials}>
        <motion.a href={SOCIAL_LINKS.discord}>
          <motion.img
            whileHover={{ scale: 1.3 }}
            initial={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            src="/socials/discordWhite.svg"
            height="30"
            width="30"
          />
        </motion.a>
        <motion.a href={SOCIAL_LINKS.github}>
          <motion.img
            whileHover={{ scale: 1.3 }}
            initial={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            src="/socials/githubWhite.svg"
            height="30"
            width="30"
          />
        </motion.a>

        <motion.a href={SOCIAL_LINKS.twitter}>
          <motion.img
            src="/socials/twitterWhite.svg"
            whileHover={{ scale: 1.3 }}
            initial={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            height="30"
            width="30"
          />
        </motion.a>
      </div>
    </div>
  );
};
