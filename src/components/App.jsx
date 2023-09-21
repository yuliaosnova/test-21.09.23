import { Aside } from "./Aside/Aside";
import { Comments } from "./Comments/Comments";
import { Items } from "./Items/Items";

import css from "./App.module.css";

function App() {
  return (
    <div className={css.Container}>
      <Aside />
      <div className={css.Main}>
        <Items />
        <Comments />
      </div>
    </div>
  );
}

export default App;
