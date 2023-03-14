import Image from "next/image";
import styles from "../../styles/components/blogs/Blog.module.css";

export const Blog = ({ title, author, image }) => {
  return (
    <div className={styles.blog}>
      <Image src={image} width="500" height="500" />
      <div className={styles.text}>
        <p>{title}</p>
        <p className={styles.author}>{author}</p>
      </div>
    </div>
  );
};
