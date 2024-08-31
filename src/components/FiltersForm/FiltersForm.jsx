import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectFilter } from "../../redux/filterSlice.js";
import icon from "../../img/icons.svg";
import Button from "../Button/Button.jsx";
import css from "./FiltersForm.module.css";

const FiltersForm = () => {
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(changeFilter(event.target.filters.value));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={css.filterInputWrapper}>
          <p className={css.text}>Location</p>
          <div className={css.svgWrapper}>
            {filter != "" ? (
              <svg className={css.inputIcon}>
                <use href={`${icon}#icon-Map`}></use>
              </svg>
            ) : (
              <svg className={css.inputIconNotSearched}>
                <use href={`${icon}#icon-Map`}></use>
              </svg>
            )}

            <input className={css.input} type="text" name="filters" />
          </div>
          <p className={css.lableFilters}>Filters</p>
          <div className={css.equipmentWrapper}>
            <p className={css.lableChoice}>Vehicle equipment</p>
            <svg className={css.lineIcon}>
              <use href={`${icon}#icon-line`}></use>
            </svg>
            <div className={css.choiceWrapper}>
              <div className={css.checkbox}>
                <svg className={css.iconChoice}>
                  <use href={`${icon}#icon-wind`}></use>
                </svg>
                <p className={css.textChoice}>AC</p>
              </div>
              <div className={css.checkbox}>
                <svg className={css.iconChoice}>
                  <use href={`${icon}#icon-diagram`}></use>
                </svg>
                <p className={css.textChoice}>Automatic</p>
              </div>
              <div className={css.checkbox}>
                <svg className={css.iconChoice}>
                  <use href={`${icon}#icon-cup-hot`}></use>
                </svg>
                <p className={css.textChoice}>Kitchen</p>
              </div>
              <div className={css.checkbox}>
                <svg className={css.iconChoice}>
                  <use href={`${icon}#icon-tv`}></use>
                </svg>
                <p className={css.textChoice}>TV</p>
              </div>
              <div className={css.checkbox}>
                <svg className={css.iconChoice}>
                  <use href={`${icon}#icon-bi_droplet`}></use>
                </svg>
                <p className={css.textChoice}>Bathroom</p>
              </div>
            </div>
          </div>
          <div className={css.equipmentWrapper}>
            <p className={css.lableChoice}>Vehicle type</p>
            <svg className={css.lineIcon}>
              <use href={`${icon}#icon-line`}></use>
            </svg>
            <div className={css.choiceWrapper}>
              <div className={css.checkbox}>
                <svg className={css.iconChoice}>
                  <use href={`${icon}#icon-bi_grid-1x2`}></use>
                </svg>
                <p className={css.textChoice}>Van</p>
              </div>
              <div className={css.checkbox}>
                <svg className={css.iconChoice}>
                  <use href={`${icon}#icon-bi_grid`}></use>
                </svg>
                <p className={css.textChoice}>
                  Fully <br />
                  Integrated
                </p>
              </div>
              <div className={css.checkbox}>
                <svg className={css.iconChoice}>
                  <use href={`${icon}#icon-bi_grid-3x3-gap`}></use>
                </svg>
                <p className={css.textChoice}>Alcove</p>
              </div>
            </div>
            <Button className={css.sendButton} type="submit">
              Search
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FiltersForm;
