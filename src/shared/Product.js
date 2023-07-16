import React, { useContext } from "react";

// Functions
import { shorten, isInCart, quantityCount } from "../helpers/functions";

// react router dom
import { Link } from "react-router-dom";

//context
import { CartContext } from "../context/CartContextProvider";

//Icons
import trashIcon from "../../src/assets/icons/trash.svg";

//styles
import styles from "./Product.module.css";

const Product = ({ productData }) => {
  const { state, dispatch } = useContext(CartContext);

  return (
    <div className={styles.Container}>
      <div className={styles.mainContainer}>
        <img
          className={styles.ContainerImg}
          src={productData.image}
          alt="product"
        />
        <div className={styles.ContainerContent}>
          <h3>{shorten(productData.title)}</h3>
          <p>{productData.price} $</p>
          <div className={styles.tags}>
            <Link to={`/products/${productData.id}`}>Details</Link>
            <div className={styles.buttons}>
              {quantityCount(state, productData.id) > 1 && (
                <button
                  className={styles.smallButtons}
                  onClick={() =>
                    dispatch({ type: "DECREASE", payload: productData })
                  }
                >
                  -
                </button>
              )}
              {quantityCount(state, productData.id) === 1 && (
                <button
                  className={styles.smallButtons}
                  onClick={() =>
                    dispatch({ type: "REMOVE_ITEM", payload: productData })
                  }
                >
                  <img src={trashIcon} alt="trash icon" />
                </button>
              )}
              {quantityCount(state, productData.id) > 0 && (
                <span className={styles.quantityCount}>
                  {quantityCount(state, productData.id)}
                </span>
              )}
              {isInCart(state, productData.id) ? (
                <button
                  className={styles.smallButtons}
                  onClick={() =>
                    dispatch({ type: "INCREASE", payload: productData })
                  }
                >
                  +
                </button>
              ) : (
                <button
                  className={styles.addButton}
                  onClick={() =>
                    dispatch({ type: "ADD_ITEM", payload: productData })
                  }
                >
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
