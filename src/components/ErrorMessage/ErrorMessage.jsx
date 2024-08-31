import css from "./ErrorMessage.module.css";

export default function ErrorMessage() {
  return (
    <div className={css.container}>
      <p className={css.text}>Oops! There was an error! Please reload!</p>
    </div>
  );
}
