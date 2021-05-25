<template>
  <div class="components-book book" :class="{ center }">
    <ComponentsGrid v-if="hasGrid" />
    <ComponentsIndex @togglegrid="hasGrid = !hasGrid" @togglecenter="center = !center" />

    <component
      :is="$route.params.component"
      v-bind="presetProps"
    />
  </div>
</template>

<script>
import ComponentsIndex from '../components/ComponentsIndex.vue';
import ComponentsGrid from '../components/ComponentsGrid.vue';
import definitions from '../assets/definitions';

export default {
  name: 'Book',

  components: {
    ComponentsIndex,
    ComponentsGrid,
  },

  data() {
    return {
      hasGrid: false,
      center: false,
    };
  },

  computed: {
    definitions() {
      return definitions;
    },
    presetProps() {
      const { props } = definitions
        .get(this.$route.params.component)
        .presets[this.$route.params.preset];
      return typeof props === 'function' ? props() : props;
    },
  },
};
</script>

<style lang="scss" scoped>
.book {
  position: absolute;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  &.center {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
