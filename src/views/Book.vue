<template>
  <div class="components-book book" :class="{ center }">
    <ComponentsGrid v-if="hasGrid" />
    <ComponentsIndex @togglegrid="toggleGrid" @togglecenter="toggleCenter" />

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
  name: 'book', // eslint-disable-line

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
      try {
        const { props } = definitions
          .get(this.$route.params.component)
          .presets[this.$route.params.preset];
        return typeof props === 'function' ? props() : props;
      } catch { return {}; }
    },
  },

  created() {
    if (
      typeof this.$route.params.component === 'undefined'
      || typeof this.$route.params.preset === 'undefined'
    ) {
      this.$router.push(`/book/${[...definitions][0][0]}/default`);
    }
  },

  mounted() {
    const hasGrid = JSON.parse(localStorage.getItem('book:hasgrid'));
    if (hasGrid !== null) this.hasGrid = hasGrid;
    const center = JSON.parse(localStorage.getItem('book:center'));
    if (center !== null) this.center = center;
  },

  methods: {
    toggleGrid() {
      this.hasGrid = !this.hasGrid;
      localStorage.setItem('book:hasgrid', this.hasGrid.toString());
    },
    toggleCenter() {
      this.center = !this.center;
      localStorage.setItem('book:center', this.center.toString());
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
