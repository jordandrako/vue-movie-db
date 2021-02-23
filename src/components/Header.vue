<template>
  <header>
    <h1>{{ newTitle }}</h1>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: String,
  },
  data() {
    return {
      name: 'Jordan',
    };
  },
  computed: {
    newTitle() {
      return this.title.toUpperCase();
    },
  },
};
</script>

<style scoped lang="scss">
header {
  background: #111;
  padding: 20px;
  color: white;
}
h1 {
  margin: 0;
}
</style>
