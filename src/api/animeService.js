import axios from "axios";

export async function getAnimeList() {
  return axios
    .get("https://ghibliapi.herokuapp.com/films")
    .then(res => res.data);
}

export async function getAnimeById(id) {
  return axios
    .get("https://ghibliapi.herokuapp.com/films/" + id)
    .then(res => res.data);
}
