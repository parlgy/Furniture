import React from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

import CartItem from "../Cart/CartItems/CartItems";
import useStyles from "./Styles";
import "./Cart_section.css";

const Cart = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {
  const classes = useStyles();

  const handleEmptyCart = () => onEmptyCart();

  const renderEmptyCart = () => (
    <Typography variant="subtitle1">
      You have no items in your shopping cart,
      <Link className={classes.link} to="/products">
        start adding some
      </Link>
    </Typography>
  );

  if (!cart.line_items) return "Loading...";

  const renderCart = () => (
    <>
      <Grid container spacing={2}>
        {cart.line_items.map((lineItem) => (
          <Grid item xs={12} sm={4} lg={3} key={lineItem.id}>
            <CartItem
              item={lineItem}
              onUpdateCartQty={onUpdateCartQty}
              onRemoveFromCart={onRemoveFromCart}
            />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h5">
          Subtotal: {cart.subtotal.formatted_with_symbol}
        </Typography>
        <div className="myBtn">
          <Button
            className={classes.emptyButton}
            size="large"
            type="button"
            variant="contained"
            color="secondary"
            onClick={handleEmptyCart}
            style={{ marginBottom: "20px", marginLeft: "20px" }}
          >
            Empty cart
          </Button>
          {/* <Link
              to={{ pathname: "https://wa.link/govxhx" }}
              target="_blank"
              aria-label="Whatsapp"
              style={{ textDecoration: "none" }}
            >
            <Button
              // type="submit"
              variant="contained"
              // enable={!stripe}
              color="primary"
            >
              {/* Order {checkoutToken.live.subtotal.formatted_with_symbol} */}
            {/* </Button> */}
          {/* </Link> */} */
          <Link
              to={{ pathname: "https://wa.link/govxhx" }}
              target="_blank"
              aria-label="Whatsapp"
          >
          <Button
            // className={classes.checkoutButton}
            // component={Link}
            // to={{ pathname: "https://wa.link/govxhx" }}
            size="large"
            type="button"
            variant="contained"
            color="primary"
            style={{ marginBottom: "20px", marginLeft: "20px" }}
          >
            Checkout
          </Button>
          </Link>
          
        </div>
      </div>
    </>
  );

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h5" gutterBottom>
        Your Shopping Cart
      </Typography>
      {!cart.line_items.length ? renderEmptyCart() : renderCart()}
    </Container>
  );
};

export default Cart;
