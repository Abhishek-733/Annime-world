import AccessTimeIcon from "@mui/icons-material/AccessTime";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  CircularProgress,
  Container,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import * as api from "../api/animeService";
import { Header } from "./Header";

const AnimeDetails = () => {
  const { id } = useParams();
  const [anime, setAnime] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    api
      .getAnimeById(id)
      .then(data => {
        setAnime(data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setError("could not find anime with id=" + id);
        setLoading(false);
      });
  }, [setAnime, id]);

  if (error) return <div>{error}</div>;
  return (
    <div>
      <Header />
      <Container sx={{ marginTop: 10 }}>
        {loading ? (
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
          <Card>
            <CardMedia
              component="img"
              width={150}
              height={400}
              image={anime.movie_banner}
              alt={anime.title}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ width: "100%" }}
              >
                {anime.title}
              </Typography>
              <Rating
                name="size-medium"
                defaultValue={anime.rt_score / 20}
                precision={0.25}
                readOnly
              />
              <Stack direction="row" spacing={1} mb={2}>
                <Chip label={`Director: ` + anime.director} />
                <Chip
                  label={`Producer: ` + anime.producer}
                  variant="outlined"
                />
                <Chip
                  label={`Release: ` + anime.release_date}
                  variant="outlined"
                />
                <Chip
                  icon={<AccessTimeIcon />}
                  label={`Runtime: ` + anime.running_time}
                  variant="outlined"
                />
              </Stack>
              <Typography variant="body2" color="text.secondary">
                {anime.description}
              </Typography>
            </CardContent>
          </Card>
        )}
      </Container>
    </div>
  );
};

export default AnimeDetails;
