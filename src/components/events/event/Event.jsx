import Image from "next/image";
import styles from "./event.module.css";

const Event = ({ imgSrc, handleClick }) => {
  return (
    <div
      className={styles.event}
      onClick={handleClick}
    >
      <Image
        src={imgSrc}
        alt=""
        fill
      />

      <div className={styles.eventInfo}>
        <div className={styles.title}>
          <p>Neque porro quisquam est qui dolorem ipsum</p>
        </div>

        <div className={styles.info}>
          <p>01.02.2024</p>

          <button>читать</button>
        </div>
      </div>
    </div>
  );
};

export default Event;
