<template>
  <div class="components-book book">
    <ComponentsIndex />

    <component
      :is="$route.params.component"
      v-bind="presetProps"
    />
  </div>
</template>

<script>
import ComponentsIndex from '../components/ComponentsIndex.vue';
import definitions from '../assets/definitions';

export default {
  name: 'Book',

  components: {
    ComponentsIndex,
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
