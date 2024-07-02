import styles from "./home.module.css";
import FreshNews from "@/components/freshNews/FreshNews";
import FreshNewsMobile from "@/components/mobile/freshNews/FreshNewsMobile";
import AllNews from "@/components/allNews/AllNews";

const HomePage = () => {
  return (
    <div className={styles.homepage}>
      <FreshNews />
      <FreshNewsMobile />
      <AllNews />
    </div>
  );
};

export default HomePage;
