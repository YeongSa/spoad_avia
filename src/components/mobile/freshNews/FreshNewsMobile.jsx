"use client";
import styles from "./freshNews.module.css";

import { useState } from "react";
import ModalNews from "@/components/modalNews/ModalNews";
import News from "./news/News";

const FreshNewsMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <section className={styles.freshNewsMobile}>
      <h2>Актуальные Новости</h2>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <News handleClick={handleClick} />
          <News handleClick={handleClick} />
          <News handleClick={handleClick} />
          <News handleClick={handleClick} />
        </div>
      </div>

      {isOpen && (
        <ModalNews
          handleClick={handleClick}
          isOpen={isOpen}
          isNews={true}
        />
      )}
    </section>
  );
};

export default FreshNewsMobile;
