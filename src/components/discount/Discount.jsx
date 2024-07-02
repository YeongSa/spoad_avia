import Image from "next/image";
import styles from "./discount.module.css";

const Discount = ({ logo, bgColor, name, handleClick }) => {
  return (
    <div
      className={styles.discount}
      onClick={handleClick}
    >
      <div
        className={styles.upper}
        style={{ backgroundColor: bgColor }}
      >
        <div className={styles.logo}>
          <div className={styles.imgContainer}>
            <img
              src={logo}
              alt="logo"
            />
          </div>
        </div>
      </div>
      <div className={styles.middle}>
        <div className={styles.name}>
          <p>Сеть магазинов</p>
          <p>&ldquo;{name}&ldquo;</p>
        </div>
        <div className={styles.date}>с 12.04 по 30.06</div>
        <div className={styles.percent}>-30%</div>
      </div>

      <div className={styles.lower}></div>
    </div>
  );
};

export default Discount;
