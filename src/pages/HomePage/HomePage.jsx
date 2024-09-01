import css from "./HomePage.module.css";
import { NavLink } from "react-router-dom";
const HomePage = () => {
  return (
    <div className={css.container}>
      <div className={css.contentWrapper}>
        <div className={css.textWrapper}>
          <p className={css.title}>Campers of your dreams</p>
          <p className={css.text}>
            You can find everything you want in our catalog
          </p>
        </div>

        <NavLink className={css.button} to="/catalog">
          View Now
        </NavLink>
      </div>
    </div>
  );
};

export default HomePage;
