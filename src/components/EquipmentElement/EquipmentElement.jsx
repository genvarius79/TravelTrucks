import css from "./EquipmentElement.module.css";
const EquipmentElement = ({ children }) => {
  return <div className={css.element}>{children}</div>;
};

export default EquipmentElement;
