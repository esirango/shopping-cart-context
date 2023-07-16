import React, { useContext } from "react";

//fuctions
import { shorten } from "../helpers/functions";

//context
import { CartContext } from "../context/CartContextProvider";

//icons
import trashIcon from "../assets/icons/trash.svg";

//styles
import styles from "./Cart.module.css";

const Cart = (props) => {
  const { image, title, price, quantity } = props.data;

  const { dispatch } = useContext(CartContext);

  return (
    <div className={styles.container}>
      <div></div>
      <div>
        <img src={image} alt="product" />
      </div>
      <div className={styles.firstContents}>
        <h3>{shorten(title)}</h3>
        <p>{price} $</p>
      </div>
      <div>
        <span>{quantity}</span>
      </div>
      <div className={styles.buttons}>
        {quantity > 1 ? (
          <button
            className={styles.smallButtons}
            onClick={() => dispatch({ type: "DECREASE", payload: props.data })}
          >
            -
          </button>
        ) : (
          <button
            className={styles.smallButtons}
            onClick={() =>
              dispatch({ type: "REMOVE_ITEM", payload: props.data })
            }
          >
            <img src={trashIcon} alt="trash" />
          </button>
        )}
        <button
          className={styles.smallButtons}
          onClick={() => dispatch({ type: "INCREASE", payload: props.data })}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Cart;
