import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addComment } from "../../redux/itemsSlice";

import css from "./Comments.module.css";

export const Comments = () => {
  const [text, setText] = useState();
  const [color, setColor] = useState("#000000");

  const currentIndex = useSelector((state) => state.index);
  const items = useSelector((state) => state.items);
  const comments = useSelector((state) => state.items[currentIndex]?.comments);
  const currentItem = items.find((item, index) => {
    if (index === currentIndex) return item;
  });

  const dispatch = useDispatch();

  const onAddBtn = (event) => {
    event.preventDefault();
    dispatch(
      addComment({ text, id: createCommentId(), color, index: currentIndex })
    );
    reset();
  };

  const reset = () => {
    setText("");
  };

  function createCommentId() {
    return currentItem.id + "-" + comments.length;
  }

  return (
    <div className={css.CommentsContainer}>
      {!currentItem && <h2 className={css.Title}>Comments #</h2>}
      {currentItem && (
        <>
          <h2 className={css.Title}>Comments #{currentItem.id}</h2>
          <ul className={css.CommentsList}>
            {currentItem.comments.map((comment) => (
              <li key={comment.id} className={css.Item}>
                <div
                  className={css.ColorSquare}
                  style={{
                    backgroundColor: `${comment.color}`,
                  }}
                ></div>
                <div className={css.TextContainer}>
                  <pre className={css.CommentPre}>{comment.text}</pre>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}

      <form onSubmit={onAddBtn} className={css.CommentForm}>
        <input
          type="color"
          className={css.ColorPicker}
          onChange={(e) => setColor(e.target.value)}
        ></input>
        <textarea
          type="text"
          name="comment"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type comment here..."
          className={css.Textarea}
          required
        ></textarea>
        <button
          type="submit"
          className={`${css.AddCommentButton} ${css.Button}`}
          disabled={!currentItem ? true : false}
        >
          Add New
        </button>
      </form>
    </div>
  );
};
