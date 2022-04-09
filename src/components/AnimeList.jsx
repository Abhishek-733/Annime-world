import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Grid,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const AnimeList = ({ list }) => {
  return (
    <Container>
      <Grid container spacing={3} mt={10}>
        {list.map(item => (
          <Grid item xs={4} spacing={5} key={item.id}>
            <Link to={`/${item.id}`} style={{ textDecoration: "none" }}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="300"
                    image={item.movie_banner}
                    alt={item.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.title}
                    </Typography>
                    <Rating
                      name="size-medium"
                      defaultValue={item.rt_score / 20}
                      precision={0.25}
                      readOnly
                    />
                    <Stack direction="row" spacing={1} mb={2}>
                      <Chip
                        label={`Release: ` + item.release_date}
                        variant="outlined"
                      />
                    </Stack>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AnimeList;
