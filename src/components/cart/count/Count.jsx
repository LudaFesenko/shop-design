import "./style.css";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
function Count({ count, increment, decrement, id, handleChangeInput }) {
  return (
    <div className="count">
      <div className="count__box">
        <input
          type="number"
          className="count__input"
          min="1"
          max="10"
          value={count}
          onChange={(evt) => {
            handleChangeInput(id, +evt.target.value);
          }}
        />
      </div>

      <div className="count__controls">
        <button
          type="button"
          className="count-up"
          onClick={() => increment(id)}
        >
          <MdOutlineKeyboardArrowUp className="img" />
        </button>

        <button
          type="button"
          className="count-down"
          onClick={() => decrement(id)}
        >
          <MdOutlineKeyboardArrowDown className="img" />
        </button>
      </div>
    </div>
  );
}

export default Count;
