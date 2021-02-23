<template>
  <img :src="posterImage" :alt="movie.title" />
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
  },
};
</script>

<style scoped lang="scss">
img {
  box-shadow: 0 0 35px black;
}
</style>
