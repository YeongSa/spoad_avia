import Image from "next/image";
import styles from "./news.module.css";

const News = ({ imgSrc, handleClick }) => {
  return (
    <div
      className={styles.news}
      onClick={handleClick}
    >
      <div className={styles.imgContainer}>
        <Image
          src={imgSrc}
          alt="atc meeting"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className={styles.textContainer}>
        <span className={styles.tag}>Диспетчеры</span>
        <p>
          This article highlights the importance of a nutritious breakfast.{" "}
        </p>
        <button>открыть</button>
      </div>
    </div>
  );
};

export default News;
