<template>
  <div class="MovieDetails" :style="styles">
    <div class="movie-info">
      <h1>{{ movie.title }}</h1>
      <h3>Release Date: {{ movie.release_date }}</h3>
      <p>{{ movie.overview }}</p>
    </div>
  </div>
</template>

<script>
const BACKDROP_PATH = 'https://image.tmdb.org/t/p/w1280';

export default {
  name: 'MovieDetails',
  metaInfo() {
    return {
      title: this.movie.title,
    };
  },
  data() {
    return {
      movie: {},
    };
  },
  beforeCreate() {
    console.log('before create');
  },
  created() {
    console.log('created');
    this.fetchData();
  },
  beforeMount() {
    console.log('before mount');
  },
  mounted() {
    console.log('mounted');
  },
  beforeUpdate() {
    console.log('before update');
  },
  updated() {
    console.log('updated');
  },
  beforeDestroy() {
    console.log('before detroy');
  },
  destroyed() {
    console.log('destroyed');
  },
  methods: {
    async fetchData() {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${this.$route.params.id}?api_key=6b3657e0b0bf1c2cae33165a3e589610`
        );
        const movie = await res.json();
        this.movie = movie;
      } catch (error) {
        console.error(error);
      }
    },
  },
  computed: {
    styles() {
      return {
        background: `url(${BACKDROP_PATH}/${this.movie.backdrop_path}) no-repeat`,
      };
    },
  },
};
</script>

<style scoped lang="scss">
.MovieDetails {
  position: absolute;
  width: 100%;
  padding-top: 50vh;
  background-size: cover;
  background: url(https://via.placeholder.com/1280) no-repeat;
}

.movie-info {
  background: #fff;
  color: #222;
  padding: 2rem 10%;
}
</style>
