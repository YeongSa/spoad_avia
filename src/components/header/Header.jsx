import Image from "next/image";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.heading}>
        <h2>
          СУРГУТСКАЯ ПЕРВИЧНАЯ ПРОФСОЮЗНАЯ ОРГАНИЗАЦИЯ ФЕДЕРАЛЬНОГО ПРОФСОЮЗА
        </h2>
        <h1>АВИАЦИОННЫХ ДИСПЕТЧЕРОВ РОССИИ</h1>
      </div>

      <div className={`${styles.logo} ${styles.right}`}>
        <Image
          src="/logoFpad.svg"
          alt="Logo"
          fill
        ></Image>
      </div>
    </header>
  );
};

export default Header;
