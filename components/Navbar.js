import { useState } from "react";
import styles from "../styles/components/Navbar.module.css";
import { Sidebar } from "./Sidebar";
import { SOCIAL_LINKS, NAV_LINKS } from "@/utils/utils";

export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [docsDropDown, setDocsDropDown] = useState();

  return (
    <>
      <nav className={styles.navbar}>
        <a href="/">
          <img
            src="/Navbar/logo.svg"
            height="500"
            width="500"
            className={styles.logo}
          />
        </a>

        <div
          className={styles.docs}
          onMouseOver={() => setDocsDropDown(true)}
          onMouseOut={() => setDocsDropDown(false)}
        >
          <p>Docs &gt;</p>
          {docsDropDown && (
            <div className={styles.docsDropDown}>
              <div>
                <a href={NAV_LINKS["LANDSCAPE"]} target="_blank">
                  Landscape
                </a>
                <a href={NAV_LINKS["FAQ"]} target="_blank">
                  FAQ
                </a>
                <a href={NAV_LINKS["GLOSSARY"]} target="_blank">
                  Glossary
                </a>
              </div>

              <div>
                <a href={NAV_LINKS["DATA_DICTIONARY"]} target="_blank">
                  Data Dictionary
                </a>
                <a href={NAV_LINKS["GET_INVOLVED"]} target="_blank">
                  Get Involved
                </a>
                <a href={NAV_LINKS["LEGOS"]} target="_blank">
                  Legos
                </a>
              </div>
            </div>
          )}
        </div>

        <div className={styles.links}>
          <a href={NAV_LINKS["ABOUT"]} target="_blank">
            About
          </a>
          <a href={NAV_LINKS["BLOG"]} target="_blank">
            Blog
          </a>
          <a href={NAV_LINKS["FORUM"]} target="_blank">
            Forum
          </a>
          <a href={NAV_LINKS["HACKATHON"]} target="_blank">
            Hackathon
          </a>
        </div>

        <div className={styles.socials}>
          <a href={SOCIAL_LINKS.discord} target="_blank">
            <img src="/Socials/discord.svg" height="40" width="40" />
          </a>
          <a href={SOCIAL_LINKS.github} target="_blank">
            <img src="/Socials/github.svg" height="40" width="40" />
          </a>
          <a href={SOCIAL_LINKS.twitter} target="_blank">
            <img src="/Socials/twitter.svg" height="40" width="40" />
          </a>
        </div>

        {!openMenu && (
          <img
            src="/Navbar/menu.svg"
            height="500"
            width="500"
            className={styles.menu}
            onClick={() => setOpenMenu((prev) => !prev)}
          />
        )}
      </nav>
      {openMenu && <Sidebar setMenu={setOpenMenu} menu={openMenu} />}
    </>
  );
};
