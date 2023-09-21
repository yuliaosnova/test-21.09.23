import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { add, remove } from "../../redux/itemsSlice";
import { indexChange } from "../../redux/currentIndexSlice";
import { generateId } from "../../utils/generateId";

import css from "./Items.module.css";

export const Items = () => {
  const [name, setName] = useState("");

  const items = useSelector((state) => state.items);
  const currentIndex = useSelector((state) => state.index);

  const dispatch = useDispatch();

  const onAddBtn = (event) => {
    event.preventDefault();
    dispatch(add({ name, id: generateId(10000000, 99999999), comments: [] }));
    reset();
  };

  const reset = () => {
    setName("");
  };

  return (
    <div className={css.ItemsContainer}>
      <h2 className={css.ItemsTitle}>Items</h2>
      <form onSubmit={onAddBtn} className={css.ItemsForm}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Type name here..."
          className={css.ItemsInput}
          required
        ></input>
        <button type="submit" className={`${css.AddItemButton} ${css.Button}`}>
          Add New
        </button>
      </form>
      <ul className={css.ItemsList}>
        {items.map((item, index) => (
          <li
            key={item.id}
            onClick={() => dispatch(indexChange(index))}
            className={
              index === currentIndex ? `${css.ItemActive}` : `${css.Item}`
            }
          >
            <p>{item.name}</p>
            <div className={css.Container}>
              <span className={css.CommentsQuantity}>
                {item.comments.length ?? 0}
              </span>
              <button
                type="submit"
                className={`${css.DeleteItemBtn} ${css.Button}`}
                onClick={() => dispatch(remove(item.id))}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
