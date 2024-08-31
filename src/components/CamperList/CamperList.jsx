import Camper from "../Camper/Camper.jsx";
import { useSelector } from "react-redux";
import css from "./CamperList.module.css";
import { selectFilteredCampers } from "../../redux/campersSlice.js";
import FiltersForm from "../FiltersForm/FiltersForm.jsx";

export default function CamperList() {
  const items = useSelector(selectFilteredCampers);
  return (
    <div className={css.pageContainer}>
      <FiltersForm></FiltersForm>

      <ul className={css.list}>
        {items.map((item) => {
          return (
            <li key={item.id}>
              <Camper item={item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
