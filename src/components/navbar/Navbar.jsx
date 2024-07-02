"use client";

import Link from "next/link";
import styles from "./navbar.module.css";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.navbar}>
      <div className={`${styles.logo} ${styles.left}`}>
        <Image
          src="/logoTower.svg"
          alt="Logo"
          fill
        ></Image>
      </div>

      <ul>
        <li>
          <Link
            className={pathname === "/" ? styles.active : ""}
            href="/"
          >
            Новости
          </Link>
        </li>

        <li>
          <Link
            className={pathname === "/events" ? styles.active : ""}
            href="/events"
          >
            События
          </Link>
        </li>
        <li>
          <Link
            className={pathname === "/documents" ? styles.active : ""}
            href="/documents"
          >
            Документы
          </Link>
        </li>
        <li>
          <Link
            className={pathname === "/discounts" ? styles.active : ""}
            href="/discounts"
          >
            Профдисконт
          </Link>
        </li>
        <li>
          <Link
            className={pathname === "/contacts" ? styles.active : ""}
            href="/contacts"
          >
            Контакты
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
