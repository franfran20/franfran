import { SOCIAL_LINKS } from "@/utils/utils";
import Link from "next/link";
import styles from "../styles/components/Footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <p>An Open Community</p>

      <div className={styles.footerLinks}>
        <Link href={SOCIAL_LINKS.twitter}>
          Twitter <span>|</span>
        </Link>
        <Link href={SOCIAL_LINKS.discord}>
          Discord <span>|</span>
        </Link>
        <Link href={SOCIAL_LINKS.github}>
          Github <span>|</span>
        </Link>
      </div>
    </div>
  );
};
