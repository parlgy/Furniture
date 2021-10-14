import React from "react";
import Grid from "@material-ui/core/Grid";

import Product from "./Product/Product";
import useStyles from "./styles";
import Footer from "../Footer";

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();

  if (!products.length) return <p>Loading...</p>;

  return (
    <>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container justify="center" spacing={2}>
          {products.map((product) => (
            <Grid key={product.id} item xs={10} sm={6} md={4} lg={3}>
              <Product product={product} onAddToCart={onAddToCart} />
            </Grid>
          ))}
        </Grid>
      </main>
      <Footer />
    </>
  );
};

export default Products;
