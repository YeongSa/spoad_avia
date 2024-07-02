import Image from "next/image";
import styles from "./newsBig.module.css";

const NewsBig = ({ handleClick, isImportant, imgSrc }) => {
  return (
    <div
      onClick={handleClick}
      className={styles.newsBig}
    >
      <div className={styles.body}>
        {isImportant && <span className={styles.alert}>ВАЖНО</span>}
        <div className={styles.imgContainer}>
          <Image
            src={imgSrc}
            alt=""
            fill
          />
        </div>
      </div>
      <div className={styles.caption}>
        <div className={styles.wrapper}>
          <div className={styles.date}>12 min ago</div>
          <div className={styles.theme}>тема</div>
        </div>
        <div className={styles.title}>
          Lorem ipsum dolor sit amet, cons adipiscing elit.
        </div>
      </div>
    </div>
  );
};

export default NewsBig;
