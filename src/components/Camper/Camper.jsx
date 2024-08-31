import css from "./Camper.module.css";

export default function Camper({
  item: { id, name, price, location, description, rating, gallery, reviews },
}) {
  return (
    <div>
      <p>{id}</p>
      <p>{name}</p>
      <p>{price}</p>
      <p>{location}</p>
      <p>{description}</p>
      <p>{rating}</p>
      <p>{reviews.length}</p>
      <img src={gallery[0].thumb} alt="" />
    </div>
  );
}
