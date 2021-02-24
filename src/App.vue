<template>
  <div id="app">
    <Header :title="title" />
    <transition name="fade"><router-view /></transition>
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
  overflow: hidden;
  width: 100%;
  height: 100%;
}
</style>
