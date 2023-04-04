import Image from "next/image";
import styles from "../styles/components/Sidebar.module.css";
import { motion } from "framer-motion";
import { SOCIAL_LINKS, NAV_LINKS } from "@/utils/utils";
import { useState } from "react";

export const Sidebar = ({ setMenu }) => {
  const [docsOptions, setDocsOptions] = useState(false);
  const handleSetMenu = () => {
    setMenu((prev) => !prev);
  };
  const toggleDocsOptions = () => {
    setDocsOptions((prev) => !prev);
  };

  return (
    <div className={styles.linksAndSocials}>
      <Image
        src="/Navbar/go_back.svg"
        height="60"
        width="60"
        className={styles.goback}
        onClick={() => handleSetMenu()}
      />

      <div className={styles.links}>
        <div className={styles.docsDropDown}>
          <p className={styles.docsButton} onClick={toggleDocsOptions}>
            Docs &gt;
          </p>
          <div className={docsOptions ? styles.dropDownContent : styles.hide}>
            <a href={NAV_LINKS["LANDSCAPE"]}>Landscape</a>
            <a href={NAV_LINKS["FAQ"]}>FAQ</a>
            <a href={NAV_LINKS["GLOSSARY"]}>Glossary</a>
            <a href={NAV_LINKS["DATA_DICTIONARY"]}>Data Dictionary</a>
            <a href={NAV_LINKS["GET_INVOLVED"]}>Get Involved</a>
            <a href={NAV_LINKS["LEGOS"]}>Legos</a>
          </div>
        </div>

        <a href={NAV_LINKS["ABOUT"]}>About</a>
        <a href={NAV_LINKS["BLOGS"]}>Blogs</a>
        <a href={NAV_LINKS["FORUM"]}>Forum</a>
        <a href={NAV_LINKS["HACKATHON"]}>Hackathon</a>
      </div>

      <div className={styles.socials}>
        <motion.a href={SOCIAL_LINKS.discord}>
          <img src="/Socials/discord.svg" />
        </motion.a>
        <a href={SOCIAL_LINKS.github}>
          <motion.img src="/Socials/github.svg" />
        </a>

        <a href={SOCIAL_LINKS.twitter}>
          <img src="/Socials/twitter.svg" />
        </a>
      </div>
    </div>
  );
};
