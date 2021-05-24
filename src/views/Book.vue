<template>
  <div class="components-book book">
    <ComponentsIndex />

    <component :is="$route.params.component" :props="$route.params.preset" />
  </div>
</template>

<script>
import ComponentsIndex from '../components/ComponentsIndex.vue';

export default {
  name: 'Book',

  components: {
    ComponentsIndex,
  },
};
</script>
