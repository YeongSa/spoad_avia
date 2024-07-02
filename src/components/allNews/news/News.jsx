import Image from "next/image";
import styles from "./news.module.css";

const News = ({ handleClick, isImportant }) => {
  return (
    <div
      onClick={handleClick}
      className={styles.news}
    >
      {isImportant && <span className={styles.alert}>ВАЖНО</span>}
      <div className={styles.theme}>тема</div>
      <div className={styles.container}>
        <p className={styles.title}>
          Lorem ipsum dolor sit amet, cons adipiscing elit.
        </p>

        <div className={styles.date}>12 min ago</div>
        <div className={styles.dateFull}>02.04.2024</div>
      </div>
    </div>
  );
};

export default News;
