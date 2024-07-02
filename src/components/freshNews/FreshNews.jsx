"use client";

import Image from "next/image";
import styles from "./freshNews.module.css";
import News from "./news/News";
import { useState } from "react";
import ModalNews from "../modalNews/ModalNews";

const FreshNews = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <section className={styles.freshNews}>
      <div className={styles.wrapper}>
        <h2>Актуальные Новости</h2>

        <div className={styles.container}>
          <div className={styles.fullSizeNews}>
            <div className={styles.imgContainer}>
              <Image
                src="/img4.jpg"
                alt="atc meeting"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className={styles.textContainer}>
              <div className={styles.textWrapper}>
                <div className={styles.title}>
                  <span className={styles.date}>01.02.2024</span>
                  <h3>ЗАГОЛОВОК НОВОСТИ</h3>
                </div>

                <div className={styles.theme}>
                  <p>ТЕМА</p>
                </div>

                <div className={styles.summary}>
                  <p>
                    This article highlights the importance of a nutritious
                    breakfast and emphasizes its positive impact on overall
                    health. Breakfast not only provides energy but also fulfills
                    the bodys nutritional requirements while aiding in weight
                    control. Consistently choosing a nutrient-rich breakfast can
                    improve our physical well-being...{" "}
                  </p>

                  <button>Открыть</button>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.newsList}>
            <News
              handleClick={handleClick}
              imgSrc="/img1.jpg"
            />
            <News
              handleClick={handleClick}
              imgSrc="/img2.jpg"
            />
            <News
              handleClick={handleClick}
              imgSrc="/img3.jpg"
            />
          </div>

          {isOpen && (
            <ModalNews
              handleClick={handleClick}
              isOpen={isOpen}
              isNews={true}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default FreshNews;
