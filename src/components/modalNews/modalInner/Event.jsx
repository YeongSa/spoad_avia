import Image from "next/image";
import styles from "./event.module.css";

const Event = () => {
  return (
    <>
      <h2 className={styles.title}>Aviation Extravaganza 2024</h2>

      <div className={styles.info}>
        <div className={styles.date}>
          <p className={styles.firstP}>Дата: </p>
          <p>
            <span className={styles.full}>1 мая 2024</span>
            <span className={styles.short}>2 дня назад</span>
          </p>
        </div>
        <div className={styles.place}>
          <p className={styles.firstP}>Место: </p>
          <p>&ldquo;Стерх&ldquo; - галерея современного искусства</p>
        </div>
      </div>

      <div className={styles.caption}>
        <p>
          Experience the future of flight at the Aviation Extravaganza 2024.
          This premier event brings together aviation enthusiasts, industry
          professionals, and the general public to witness the latest
          innovations in aerospace technology.
        </p>
      </div>

      <div className={styles.mainImgContainer}>
        <Image
          src="/mainEventImg.jpg"
          alt=""
          fill
        />
      </div>

      <div className={styles.noteworthyMoments}>
        <h3>Яркие моменты события</h3>

        <ul>
          <li>
            <p className={styles.description}>
              <span className={styles.hook}>Air Shows:</span>
              Thrilling aerial displays by top pilots.
            </p>
          </li>

          <li>
            <p className={styles.description}>
              <span className={styles.hook}>Exhibitions:</span>
              Showcasing the newest aircraft and aerospace technologies.
            </p>
          </li>

          <li>
            <p className={styles.description}>
              <span className={styles.hook}>Workshops & Seminars:</span>
              Learning opportunities with industry experts.
            </p>
          </li>

          <li>
            <p className={styles.description}>
              <span className={styles.hook}>Interactive Simulators:</span>
              Hands-on experience with cutting-edge flight simulators.
            </p>
          </li>

          <li>
            <p className={styles.description}>
              <span className={styles.hook}>Vintage Aircraft Display:</span>A
              nostalgic look at classic airplanes.
            </p>
          </li>

          <li>
            <p className={styles.description}>
              <span className={styles.hook}>Networking Opportunities:</span>
              Meet and greet sessions with pilots and industry leaders.
            </p>
          </li>

          <li>
            <p className={styles.description}>
              <span className={styles.hook}>Family Activities:</span>
              Aviation-themed activities for all ages.
            </p>
          </li>
        </ul>
      </div>

      <div className={styles.body}>
        <p>
          Experience the future of flight at the Aviation Extravaganza 2024.
          This premier event brings together aviation enthusiasts, industry
          professionals, and the general public to witness the latest
          innovations in aerospace technology.{" "}
        </p>
        <p>
          Experience the future of flight at the Aviation Extravaganza 2024.
          This premier event brings together aviation enthusiasts, industry
          professionals, and the general public to witness the latest
          innovations in aerospace technology. Experience the future of flight
          at the Aviation Extravaganza 2024. This premier event brings together
          aviation enthusiasts, industry professionals, and the general public
          to witness the latest innovations in aerospace technology.
        </p>
        <br />
        <p>
          Experience the future of flight at the Aviation Extravaganza 2024.
          This premier event brings together aviation enthusiasts, industry
          professionals, and the general public to witness the latest
          innovations in aerospace technology. Experience the future of flight
          at the Aviation Extravaganza 2024. This premier event brings together
          aviation enthusiasts, industry professionals, and the general public
          to witness the latest innovations in aerospace technology.
        </p>
      </div>

      <div className={styles.gallery}>
        <div className={`${styles.imgContainer} ${styles.small}`}>
          <Image
            src="/eventInner1.jpg"
            alt=""
            fill
          />
        </div>
        <div className={`${styles.imgContainer} ${styles.small}`}>
          <Image
            src="/eventInner2.jpg"
            alt=""
            fill
          />
        </div>
        <div className={`${styles.imgContainer} ${styles.tall}`}>
          <Image
            src="/eventInner3.jpg"
            alt=""
            fill
          />
        </div>
        <div className={`${styles.imgContainer} ${styles.wide}`}>
          <Image
            src="/eventInner4.jpg"
            alt=""
            fill
          />
        </div>
        <div className={`${styles.imgContainer} ${styles.small}`}>
          <Image
            src="/eventInner5.jpg"
            alt=""
            fill
          />
        </div>
        <div className={`${styles.imgContainer} ${styles.small}`}>
          <Image
            src="/eventInner6.jpg"
            alt=""
            fill
          />
        </div>
      </div>
    </>
  );
};

export default Event;
