import Image from "next/image";
import styles from "./news.module.css";

const News = ({ handleClick }) => {
  return (
    <div
      className={styles.news}
      onClick={handleClick}
    >
      <div className={styles.imgContainer}>
        <Image
          src="/img4.jpg"
          alt=""
          fill
        />
        <span className={styles.theme}>документы</span>
      </div>

      <div className={styles.caption}>
        <p>
          This article highlights the importance of a nutritious breakfast.{" "}
        </p>
      </div>
    </div>
  );
};

export default News;
