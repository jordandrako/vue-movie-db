<template>
  <header>
    <h1>
      <router-link to="/"><img src="@/assets/logo.svg" :alt="title" /></router-link>
    </h1>
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
      show: false,
    };
  },
};
</script>

<style scoped lang="scss">
header {
  background: #111;
  padding: 20px;
  color: white;
  text-align: center;
}

h1 {
  margin: 0;
}

a {
  color: white;
  text-decoration: none;
}
</style>
