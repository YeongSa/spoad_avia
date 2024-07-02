import Image from "next/image";
import styles from "./documents.module.css";
import Document from "@/components/document/Document";

const Documents = () => {
  return (
    <div className={styles.documentsPage}>
      <div className={styles.sidebarContainer}>
        <div className={styles.sidebar}>
          <nav>
            <div className={styles.searchBar}>
              <input type="text" />
              <button>
                <Image
                  src="/search.svg"
                  alt=""
                  width={16}
                  height={16}
                />
              </button>
            </div>

            <div className={styles.navMain}>
              <ul>
                <li className={styles.headingLi}>
                  <div className={styles.dot}></div>
                  <p>Официальные документы</p>
                </li>
                <li>
                  <div className={styles.dot}></div>
                  <p>Постановления Президиума ЦС</p>
                </li>
                <li>
                  {" "}
                  <div className={styles.dot}></div>
                  <p>Постановления Конференции ЦС</p>
                </li>
                <li>
                  {" "}
                  <div className={styles.dot}></div>
                  <p>Постановления Съезда</p>
                </li>
                <li>
                  {" "}
                  <div className={styles.dot}></div>
                  <p>Устав ФПАД России</p>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>

      <div className={styles.documentsContainer}>
        <div className={styles.documents}>
          <Document />
          <Document />
          <Document />
          <Document />
          <Document />
          <Document />
          <Document />
          <Document />
          <Document />
          <Document />
        </div>
      </div>
    </div>
  );
};

export default Documents;
