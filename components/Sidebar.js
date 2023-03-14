import Image from "next/image";
import Link from "next/link";
import styles from "../styles/components/Sidebar.module.css";

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
        <Link href="/">Members</Link>
        <Link href="/">Blogs</Link>
      </div>

      <div className={styles.socials}>
        <Link href="/">
          <Image src="/socials/discord.svg" height="30" width="30" />
        </Link>
        <Link href="/">
          <Image src="/socials/github.svg" height="30" width="30" />
        </Link>
        <Link href="/">
          <Image src="/socials/twitter.svg" height="30" width="30" />
        </Link>
      </div>
    </div>
  );
};
