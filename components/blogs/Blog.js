import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/components/blogs/Blog.module.css";

export const Blog = ({ title, author, image, link }) => {
  return (
    <Link className={styles.blog} href={link}>
      <Image src={image} width="500" height="500" />
      <div className={styles.text}>
        <p>{title}</p>
        <p className={styles.author}>{author}</p>
      </div>
    </Link>
  );
};
