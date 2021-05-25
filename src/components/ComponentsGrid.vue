<template>
  <div class="components-book components-grid">
    <div v-for="(line, index) in (15 * 15)" :key="index" class="square"></div>
  </div>
</template>

<script>
export default {
  name: 'ComponentsGrid',

  data() {
    return {
      gridWidth: window.innerWidth / 15,
    };
  },
};
</script>

<style lang="scss" scoped>
.components-grid {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;

  display: flex;
  flex-wrap: wrap;

  opacity: 0.2;
  pointer-events: none;

  .square {
    outline: 0.25px solid #21D4FD;
    // width: var(--grid-val);
    // height: var(--grid-val);
    width: calc(100vw / 15);
    height: calc(100vw / 15);
  }
}
</style>
