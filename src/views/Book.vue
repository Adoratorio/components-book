<template>
  <div class="components-book book">
    <ComponentsIndex />
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
