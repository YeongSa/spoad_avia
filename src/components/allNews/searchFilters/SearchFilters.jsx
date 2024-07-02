import styles from "./searchFilters.module.css";
import SearchIcon from "@/components/icons/SearchIcon";

const SearchFilters = () => {
  return (
    <div className={styles.searchFilters}>
      <div className={styles.search}>
        <input
          type="text"
          placeholder="поиск"
        />
        <button>
          <SearchIcon />
        </button>
      </div>

      <ul className={styles.filters}>
        <li className={styles.active}>все</li>
        <li>важные</li>
        <li>этот месяц</li>
      </ul>
    </div>
  );
};

export default SearchFilters;
