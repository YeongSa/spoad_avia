import styles from "./modalNews.module.css";
import { useEffect, useState } from "react";
import News from "./modalInner/News";
import CloseBtnIcon from "../icons/CloseBtnIcon";
import Event from "./modalInner/Event";
import Discount from "./modalInner/Discount";

const ModalNews = ({ handleClick, isOpen, isNews, isEvent, isDiscount }) => {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if (isClicked) {
      setTimeout(() => handleClick(), 600);
    }
  }, [isClicked, handleClick]);

  return (
    <div
      className={`${styles.modalNews} ${isClicked && styles.vanish}`}
      id="modal"
      onClick={(e) => {
        if (e.target.id === "modal") {
          setIsClicked(true);
        }
      }}
    >
      <div
        className={`${styles.inner} ${isOpen ? styles.appear : ""} ${
          isClicked ? styles.disappear : ""
        }`}
      >
        <div
          className={styles.iconContainer}
          onClick={() => setIsClicked(true)}
        >
          <CloseBtnIcon />
        </div>
        {isNews && <News />}
        {isEvent && <Event />}
        {isDiscount && <Discount />}
      </div>
    </div>
  );
};

export default ModalNews;
