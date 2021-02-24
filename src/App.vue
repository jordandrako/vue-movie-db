<template>
  <div id="app">
    <Header :title="title" />
    <div class="page">
      <transition name="fade"><router-view /></transition>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  name: 'app',
  metaInfo: {
    titleTemplate: '%s | Vue Movie DB',
  },
  data() {
    return {
      title: 'Vue Movie DB',
    };
  },
  components: {
    Header,
  },
};
</script>

<style lang="scss">
#app {
  position: relative;
  overflow-y: auto;
  width: 100%;
  height: 100%;
}

.page {
  max-width: 1280px;
  height: 100%;
  position: relative;
  margin: 0 auto;
}
</style>
