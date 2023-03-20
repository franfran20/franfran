import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "../../styles/components/blogs/Blog.module.css";

export const Blog = ({ title, author, snippet, link, date }) => {
  const [isHover, setIsHover] = useState();
  return (
    <Link
      className={styles.blog}
      href={link}
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
    >
      <div className={styles.text}>
        <h3 className={isHover ? styles.hovered : styles.notHovered}>
          {title}
        </h3>
        <p className={styles.author}>{snippet}</p>

        <div className={styles.bottom}>
          <p>
            <span> {date}</span>
          </p>
          <p>{author}</p>
        </div>
      </div>
    </Link>
  );
};
