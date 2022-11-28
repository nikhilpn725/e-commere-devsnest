import { CardMedia } from "@mui/material";
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import { Rating } from "@mui/material";
import { Container } from "@mui/material";
import { CardActions } from "@mui/material";
import { Button } from "@mui/material";
import { ButtonGroup } from "@mui/material";
import { useTheme } from "@mui/material";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { ThemeConsumer } from "styled-components";

export default function Home() {
  const [products, setproducts] = useState([]);
  const theme = useTheme();
  async function getAllProducts() {
    const respones = await fetch("https://fakestoreapi.com/products");
    setproducts(await respones.json());
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    // <>
    //   <div>
    //     <h1>Home</h1>
    //     {products.map((product) => {
    //       return (
    //         <section className="product-item" key={product.id}>
    //           <img
    //             style={{ height: 200, width: 200, objectFit: "contain" }}
    //             src={product.image}
    //           />
    //           <section>
    //             <h2>{product.title}</h2>
    //             <h3>{product.description}</h3>
    //           </section>
    //         </section>
    //       );
    //     })}
    //   </div>
    // </>
    // <Container>

    // </Container>
    <Container sx={{ py: 8 }} maxWidth="lg">
      <Grid container spacing={4}>
        {products.map(({ title, id, price, description, rating, image }) => (
          <Grid item key={id} xs={12} sm={6} md={3}>
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <CardMedia
                component="img"
                sx={{
                  alignSelf: "center",
                  width: theme.spacing(30),
                  height: theme.spacing(30),
                  objectFit: "contain",
                  pt: theme.spacing(),
                }}
                image={image}
                alt={title}
              ></CardMedia>
              <CardContent>
                <Typography
                  variant="h5"
                  component="h2"
                  gutterBottom
                  sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: "1",
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {title}
                </Typography>
                <Typography
                  paragraph
                  color="text.secondary"
                  sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: "2",
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {description}
                </Typography>
                <Typography fontSize="large" paragraph>
                  {price}
                </Typography>
                <Rating readOnly precision={0.5} value={rating.rate}></Rating>
              </CardContent>
              <CardActions sx={{ alignSelf: "center" }}>
                <Button variant="contained">Add to Cart</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
