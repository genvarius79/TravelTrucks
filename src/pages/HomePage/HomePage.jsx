import Button from "../../components/Button.jsx";
import css from "./HomePage.module.css";
const HomePage = () => {
  const handleClick = () => {};
  return (
    <div className={css.container}>
      <div className={css.contentWrapper}>
        <div className={css.textWrapper}>
          <p className={css.title}>Campers of your dreams</p>
          <p className={css.text}>
            You can find everything you want in our catalog
          </p>
        </div>
        <Button className={css.button} type="button" onClick={handleClick}>
          View Now
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
