<template>
  <ul>
    <li v-for="movie in movies" :key="movie.id">
      <Movie :movie="movie" />
    </li>
  </ul>
</template>

<script>
import Movie from './Movie.vue';

export default {
  name: 'MoviesList',
  data() {
    return {
      movies: [],
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const res = await fetch(
          'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=6b3657e0b0bf1c2cae33165a3e589610'
        );
        const movies = await res.json();
        this.movies = movies.results;
      } catch (error) {
        console.error(error);
      }
    },
  },
  components: {
    Movie,
  },
};
</script>

<style lang="scss" scoped>
ul {
  display: grid;
  list-style: none;
  padding: 1rem;
  margin: 0;
  grid-row-gap: 1rem;
  grid-template-columns: repeat(6, 1fr);
}
</style>
