"use client";

import { useState } from "react";
import styles from "./allNews.module.css";
import ModalNews from "../modalNews/ModalNews";
import SearchFilters from "./searchFilters/SearchFilters";
import Event from "../events/event/Event";
import NewsBig from "./newsBig/NewsBig";
import News from "./news/News";
import Link from "next/link";

const AllNews = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.allNews}>
      <div className={styles.newsContainer}>
        <h2>Все Новости</h2>

        <SearchFilters />

        <div className={styles.newsBody}>
          <NewsBig
            handleClick={handleClick}
            isImportant={true}
            imgSrc={"/img4.jpg"}
          />
          <NewsBig
            handleClick={handleClick}
            isImportant={false}
            imgSrc={"/img5.jpg"}
          />

          <News
            handleClick={handleClick}
            isImportant={true}
          />
          <News
            handleClick={handleClick}
            isImportant={false}
          />
          <News
            handleClick={handleClick}
            isImportant={false}
          />
          <News
            handleClick={handleClick}
            isImportant={false}
          />
          <News
            handleClick={handleClick}
            isImportant={false}
          />
          <News
            handleClick={handleClick}
            isImportant={true}
          />
          <News
            handleClick={handleClick}
            isImportant={false}
          />
          <News
            handleClick={handleClick}
            isImportant={false}
          />
          <News
            handleClick={handleClick}
            isImportant={false}
          />
        </div>
      </div>

      <div className={styles.eventsContainer}>
        <h2>Мероприятия</h2>

        <div className={styles.events}>
          <Event imgSrc="/event1.jpg" />
          <Event imgSrc="/event2.jpg" />
          <Event imgSrc="/event4.jpg" />
        </div>

        <Link
          href="/events"
          className={styles.link}
        >
          смотреть все
        </Link>
      </div>

      {isOpen && (
        <ModalNews
          handleClick={handleClick}
          isOpen={isOpen}
          isNews={true}
        />
      )}
    </div>
  );
};

export default AllNews;
