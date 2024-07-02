"use client";

import styles from "./events.module.css";
import Event from "@/components/events/event/Event";
import Image from "next/image";
import ModalNews from "@/components/modalNews/ModalNews";
import { useState } from "react";

const Events = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.events}>
      <div
        className={styles.mainEvent}
        onClick={handleClick}
      >
        <Image
          src="/mainEvent.jpg"
          alt="Main Event"
          fill
        />
        <div className={styles.container}>
          <div className={styles.title}>
            Выставка к 100-летию гражданской авиации России
          </div>
          <div className={styles.caption}>
            В петербургском «Пулково-2» состоялось официальное открытие выставки
            к 100-летию гражданской авиации России
          </div>
        </div>
      </div>

      <div className={styles.eventsByYear}>
        <div className={styles.yearAndAmount}>
          <p className={styles.year}>2024</p>
          <p className={styles.amount}>3 события</p>
        </div>
        <div className={styles.eventsContainer}>
          <Event
            imgSrc="/event2.jpg"
            handleClick={handleClick}
          />
          <Event
            imgSrc="/event1.jpg"
            handleClick={handleClick}
          />
          <Event
            imgSrc="/event4.jpg"
            handleClick={handleClick}
          />
        </div>
      </div>

      <div className={styles.eventsByYear}>
        <div className={styles.yearAndAmount}>
          <p className={styles.year}>2023</p>
          <p className={styles.amount}>4 события</p>
        </div>
        <div className={styles.eventsContainer}>
          <Event
            imgSrc="/event1.jpg"
            handleClick={handleClick}
          />
          <Event
            imgSrc="/event2.jpg"
            handleClick={handleClick}
          />
          <Event
            imgSrc="/img5.jpg"
            handleClick={handleClick}
          />
          <Event
            imgSrc="/event4.jpg"
            handleClick={handleClick}
          />
        </div>
      </div>

      <div className={styles.eventsByYear}>
        <div className={styles.yearAndAmount}>
          <p className={styles.year}>2022</p>
          <p className={styles.amount}>2 события</p>
        </div>
        <div className={styles.eventsContainer}>
          <Event
            imgSrc="/event1.jpg"
            handleClick={handleClick}
          />
          <Event
            imgSrc="/event2.jpg"
            handleClick={handleClick}
          />
        </div>
      </div>

      {isOpen && (
        <ModalNews
          handleClick={handleClick}
          isOpen={isOpen}
          isEvent={true}
        />
      )}
    </div>
  );
};

export default Events;
