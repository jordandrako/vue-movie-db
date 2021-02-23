<template>
  <div class="home">
    <!-- <Header v-bind:title="title" /> -->
    <Header :title="title" />
    <MoviesList />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';
import MoviesList from '@/components/MoviesList.vue';

export default {
  name: 'Movies',
  components: {
    Header,
    MoviesList,
  },
  data() {
    return {
      title: 'Vue Movie DB',
    };
  },
};
</script>
