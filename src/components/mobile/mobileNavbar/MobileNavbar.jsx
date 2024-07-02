"use client";

import Link from "next/link";
import ContactsIcon from "../../icons/ContactsIcon";
import DiscountsIcon from "../../icons/DiscountsIcon";
import DocumentsIcon from "../../icons/DocumentsIcon";
import EventsIcon from "../../icons/EventsIcon";
import NewsIcon from "../../icons/NewsIcon";
import styles from "./mobileNavbar.module.css";
import { usePathname } from "next/navigation";

const MobileNavbar = () => {
  const pathname = usePathname();

  return (
    <div className={styles.mobileNavbar}>
      <div className={styles.container}>
        <Link
          href="/"
          className={`${styles.navItem} ${
            pathname === "/" ? styles.active : ""
          }`}
        >
          <div className={styles.icon}>
            <NewsIcon />
          </div>
          <p className={styles.name}>Новости</p>
        </Link>

        <Link
          href="/events"
          className={`${styles.navItem} ${
            pathname === "/events" ? styles.active : ""
          }`}
        >
          <div className={styles.icon}>
            <EventsIcon />
          </div>
          <p className={styles.name}>События</p>
        </Link>

        <Link
          href="/documents"
          className={`${styles.navItem} ${
            pathname === "/documents" ? styles.active : ""
          }`}
        >
          <div className={styles.icon}>
            <DocumentsIcon />
          </div>
          <p className={styles.name}>Документы</p>
        </Link>

        <Link
          href="/discounts"
          className={`${styles.navItem} ${
            pathname === "/discounts" ? styles.active : ""
          }`}
        >
          <div className={styles.icon}>
            <DiscountsIcon />
          </div>
          <p className={styles.name}>Дисконт</p>
        </Link>

        <Link
          href="/contacts"
          className={`${styles.navItem} ${
            pathname === "/contacts" ? styles.active : ""
          }`}
        >
          <div className={styles.icon}>
            <ContactsIcon />
          </div>
          <p className={styles.name}>Контакты</p>
        </Link>
      </div>
    </div>
  );
};

export default MobileNavbar;
