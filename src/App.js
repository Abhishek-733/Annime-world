import { Box, CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import AnimeList from "./components/AnimeList";
import { Header } from "./components/Header";
import * as api from "./api/animeService";

function App() {
  const [animeList, setAnimeList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    api.getAnimeList().then(list => {
      setAnimeList(list);
      setLoading(false);
    });
  }, []);

  return (
    <div className="App">
      <Header />

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
        <AnimeList list={animeList} />
      )}
    </div>
  );
}

export default App;
