"use client";

import Image from "next/image";
import styles from "./contacts.module.css";
import { useState } from "react";

const Contacts = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleClick = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <div className={styles.contacts}>
      <div className={styles.contactsContainer}>
        <div className={styles.contact}>
          <div
            className={styles.copied}
            style={{ opacity: isCopied ? 1 : 0 }}
          >
            скопировано
          </div>

          <div className={styles.emailContainer}>
            <div
              onClick={handleClick}
              className={styles.email}
            >
              <Image
                className={styles.copyBtn}
                src={"/copy.svg"}
                alt=""
                width={22}
                height={22}
              />
              <span className={styles.title}>
                <Image
                  src={"/mail.svg"}
                  alt=""
                  width={28}
                  height={28}
                />{" "}
                E-mail
              </span>
              <p>spoad@mail.ru</p>
            </div>

            <div
              onClick={handleClick}
              className={styles.email}
            >
              <Image
                className={styles.copyBtn}
                src={"/copy.svg"}
                alt=""
                width={22}
                height={22}
              />
              <span className={styles.title}>
                <Image
                  src={"/mail.svg"}
                  alt=""
                  width={28}
                  height={28}
                />{" "}
                E-mail
              </span>
              <p>pkspoad@gmail.com</p>
            </div>
          </div>

          <div className={styles.phone}>
            <Image
              src={"/phone.svg"}
              alt=""
              width={28}
              height={28}
            />
            <p>(3462)-768-006</p>
          </div>
        </div>

        <div className={styles.map}>
          <p className={styles.adress}>
            Россия, Тюменская область, ХМАО-Югра, г. Сургут, ул. Аэрофлотская,
            50
          </p>
          <iframe
            src="https://yandex.ru/map-widget/v1/?ll=73.409242%2C61.340178&mode=whatshere&whatshere%5Bpoint%5D=73.406625%2C61.340287&whatshere%5Bzoom%5D=17&z=18.27"
            frameBorder="0"
            allowFullScreen="1"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
