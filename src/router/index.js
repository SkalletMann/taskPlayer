import Vue from "vue";
import VueRouter from "vue-router";
import Player from "../components/Player.vue";
import Playlist from "../components/Playlist.vue";
// const Playlist = () => import(/* webpackChunkName: "playlist" */ "../components/Playlist.vue");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Player",
    component: Player
  },
  {
    path: "/playlist",
    name: "playlist",
    component: Playlist
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
