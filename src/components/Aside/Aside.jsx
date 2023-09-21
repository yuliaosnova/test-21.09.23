import css from "./Aside.module.css";

export const Aside = () => {
  return (
    <aside className={css.Container}>
      <h2 className={css.Title}>DAYRY APP</h2>
      <div className={css.Text}>Comment whit no sense</div>
    </aside>
  );
};
