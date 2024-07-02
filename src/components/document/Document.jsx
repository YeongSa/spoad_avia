import styles from "./document.module.css";
import OpenFileIcon from "../icons/OpenFileIcon";
import DownloadIcon from "../icons/DownloadIcon";

const Document = () => {
  return (
    <div className={styles.document}>
      <p className={styles.name}>Воздушный кодекс Российской Федерации</p>

      <div className={styles.btns}>
        <button>
          <div className={styles.imgWrapper}>
            <OpenFileIcon />
          </div>
          <p>Открыть</p>
        </button>

        <button>
          <div className={styles.imgWrapper}>
            <DownloadIcon />
          </div>
          <p>Скачать</p>
        </button>
      </div>
    </div>
  );
};

export default Document;
