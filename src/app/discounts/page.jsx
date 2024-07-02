"use client";

import Image from "next/image";
import styles from "./discounts.module.css";
import Discount from "@/components/discount/Discount";
import CarIcon from "@/components/icons/CarIcon";
import ModalNews from "@/components/modalNews/ModalNews";
import { useState } from "react";
import MenuIcon from "@/components/icons/MenuIcon";
import CloseMenuIcon from "@/components/icons/CloseMuneIcon";

const Discounts = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.discountsPage}>
      <div className={styles.leftSection}>
        <div className={styles.categories}>
          <div
            className={styles.title}
            onClick={() => setIsCategoriesOpen((prev) => !prev)}
          >
            <h2>Категории</h2>
            {isCategoriesOpen ? <CloseMenuIcon /> : <MenuIcon />}
          </div>

          <div
            className={`${styles.container} ${
              isCategoriesOpen ? styles.open : ""
            }`}
          >
            <div className={`${styles.categorie} ${styles.active}`}>
              <div className={styles.icon}>
                <CarIcon />
              </div>
              <div className={styles.name}>Авто</div>
              <div className={styles.selector}>
                <div className={styles.active}></div>
              </div>
            </div>

            <div className={`${styles.categorie}`}>
              <div className={styles.icon}>
                <CarIcon />
              </div>
              <div className={styles.name}>Авто</div>
              <div className={styles.selector}>
                <div className={styles.active}></div>
              </div>
            </div>

            <div className={`${styles.categorie}`}>
              <div className={styles.icon}>
                <CarIcon />
              </div>
              <div className={styles.name}>Авто</div>
              <div className={styles.selector}>
                <div className={styles.active}></div>
              </div>
            </div>

            <div className={`${styles.categorie}`}>
              <div className={styles.icon}>
                <CarIcon />
              </div>
              <div className={styles.name}>Авто</div>
              <div className={styles.selector}>
                <div className={styles.active}></div>
              </div>
            </div>

            <div className={`${styles.categorie}`}>
              <div className={styles.icon}>
                <CarIcon />
              </div>
              <div className={styles.name}>Авто</div>
              <div className={styles.selector}>
                <div className={styles.active}></div>
              </div>
            </div>

            <div className={`${styles.categorie}`}>
              <div className={styles.icon}>
                <CarIcon />
              </div>
              <div className={styles.name}>Авто</div>
              <div className={styles.selector}>
                <div className={styles.active}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.allDiscounts}>
        {isCategoriesOpen && <div className={styles.veil}></div>}
        <div className={styles.heading}>
          <div className={styles.logo}>
            <div className={styles.left}>
              <h2 className={styles.top}>Профсоюзный</h2>
              <h2 className={styles.bottom}>Дисконт</h2>
            </div>

            <div className={styles.decoration}>
              <div className={styles.white}></div>
              <div className={styles.blue}></div>
              <div className={styles.red}></div>
            </div>

            <div className={styles.right}>
              <h2 className={styles.top}>Дисконтная карта</h2>
              <h2 className={styles.bottom}>Члена профсоюза</h2>
            </div>
          </div>

          <div className={styles.cards}>
            <div className={`${styles.card} ${styles.front}`}>
              <Image
                src="/discCard.jpg"
                alt=""
                fill
              />
            </div>
            <div className={`${styles.card} ${styles.back}`}>
              <Image
                src="/discCard.jpg"
                alt=""
                fill
              />
            </div>
          </div>
        </div>

        <div className={styles.discounts}>
          <Discount
            logo={"/sokolov.png"}
            bgColor={"#F0CFCB"}
            name={"Sokolov"}
            handleClick={handleClick}
          />
          <Discount
            logo={"/invitro.png"}
            bgColor={"#179AA9"}
            name={"Invitro"}
            handleClick={handleClick}
          />
          <Discount
            logo={"/doctor.png"}
            bgColor={"#2CA4BB"}
            name={"Добрый Доктор"}
            handleClick={handleClick}
          />
          <Discount
            logo={"/posrednik.png"}
            bgColor={"#BA1E25"}
            name={"СтопПосредник"}
            handleClick={handleClick}
          />
          <Discount
            logo={"/detal.png"}
            bgColor={"#74716F"}
            name={"Деталь"}
            handleClick={handleClick}
          />

          <Discount
            logo={"/sokolov.png"}
            bgColor={"#F0CFCB"}
            name={"Sokolov"}
            handleClick={handleClick}
          />
          <Discount
            logo={"/invitro.png"}
            bgColor={"#179AA9"}
            name={"Invitro"}
            handleClick={handleClick}
          />
          <Discount
            logo={"/doctor.png"}
            bgColor={"#2CA4BB"}
            name={"Добрый Доктор"}
            handleClick={handleClick}
          />

          <Discount
            logo={"/posrednik.png"}
            bgColor={"#BA1E25"}
            name={"СтопПосредник"}
            handleClick={handleClick}
          />
          <Discount
            logo={"/detal.png"}
            bgColor={"#74716F"}
            name={"Деталь"}
            handleClick={handleClick}
          />
        </div>
      </div>

      {isOpen && (
        <ModalNews
          handleClick={handleClick}
          isOpen={isOpen}
          isDiscount={true}
        />
      )}
    </div>
  );
};

export default Discounts;
