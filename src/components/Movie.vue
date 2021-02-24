<template>
  <router-link :to="moviePath">
    <img :src="posterImage" :alt="movie.title" />
  </router-link>
</template>

<script>
const POSTER_PATH = 'https://image.tmdb.org/t/p/w154';
export default {
  name: 'Movie',
  props: ['movie'],
  computed: {
    posterImage() {
      return `${POSTER_PATH}/${this.movie.poster_path}`;
    },
    moviePath() {
      return `/movie/${this.movie.id}`;
    },
  },
};
</script>

<style scoped lang="scss">
img {
  box-shadow: 0 0 35px black;
  transition: transform 0.3s cubic-bezier(0.68, -0.6, 0.32, 1.6);

  &:hover {
    transform: scale(1.05);
  }
}
</style>
