import css from "./Camper.module.css";
import Button from "../Button/Button.jsx";
import icon from "../../img/icons.svg";
import EquipmentElement from "../EquipmentElement/EquipmentElement.jsx";

export default function Camper({
  item: {
    name,
    price,
    location,
    description,
    rating,
    gallery,
    reviews,
    transmission,
    engine,
    kitchen,
    AC,
  },
}) {
  return (
    <div className={css.cardContainer}>
      <div className={css.cardWrapper}>
        <img className={css.image} src={gallery[0].thumb} alt="" />
        <div className={css.textWrapper}>
          <div className={css.nameWrapper}>
            <p className={css.textBould}>{name}</p>
            <div className={css.priceWrapper}>
              <p className={css.textBould}>{price + ",00"}</p>
              <Button className={css.btnHeart} type="button">
                <svg className={css.iconHeart}>
                  <use href={`${icon}#icon-heart`}></use>
                </svg>
              </Button>
            </div>
          </div>
          <div className={css.ratingWrapper}>
            <div className={css.ratingSubWrapper}>
              <svg className={css.iconRating}>
                <use href={`${icon}#icon-Rating`}></use>
              </svg>
              <p className={css.text}>{rating}</p>
              <p className={css.text}>({`${reviews.length}`} Reviews )</p>
            </div>
            <div className={css.locationWrapper}>
              <svg className={css.iconLocation}>
                <use href={`${icon}#icon-Map`}></use>
              </svg>
              <p className={css.text}>{location}</p>
            </div>
          </div>

          <p className={css.description}>{description}</p>
          <div className={css.equipmentContainer}>
            {transmission === "automatic" ? (
              <EquipmentElement>
                <svg className={css.iconEquipment}>
                  <use href={`${icon}#icon-diagram`}></use>
                </svg>
                Automatic
              </EquipmentElement>
            ) : (
              <EquipmentElement>Manual</EquipmentElement>
            )}

            {engine === "diesel" ? (
              <EquipmentElement>
                <svg className={css.iconEquipment}>
                  <use href={`${icon}#icon-fuel-pump`}></use>
                </svg>
                Diesel
              </EquipmentElement>
            ) : (
              <EquipmentElement>
                <svg className={css.iconEquipment}>
                  <use href={`${icon}#icon-fuel-pump`}></use>
                </svg>
                Petrol
              </EquipmentElement>
            )}

            {kitchen ? (
              <EquipmentElement>
                <svg className={css.iconEquipment}>
                  <use href={`${icon}#icon-cup-hot`}></use>
                </svg>
                Kitchen
              </EquipmentElement>
            ) : null}

            {AC ? (
              <EquipmentElement>
                <svg className={css.iconEquipment}>
                  <use href={`${icon}#icon-wind`}></use>
                </svg>
                AC
              </EquipmentElement>
            ) : null}
          </div>
          <Button className={css.button} type="button">
            Show more
          </Button>
        </div>
      </div>
    </div>
  );
}
