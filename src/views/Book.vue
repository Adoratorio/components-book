<script setup>
import ComponentsIndex from '../components/ComponentsIndex.vue';
import ComponentsGrid from '../components/ComponentsGrid.vue';
import definitions from '../assets/definitions';

import TestComponent from '../components/TestComponent.vue';

const route = useRoute();
const router = useRouter();

const hasGrid = ref(false);
const center = ref(false);

const components = {
  TestComponent,
};

const presetProps = computed(() => {
  try {
    const { props } = definitions
      .get(route.params.component)
      .presets[route.params.preset];
    return typeof props === 'function' ? props() : props;
  } catch { return {}; }
});

onBeforeMount(() => {
  if (typeof route.params.component === 'undefined' || typeof route.params.preset === 'undefined') {
    router.push(`/book/${[...definitions][0][0]}/default`);
  }
});

onMounted(() => {
  const localHasGrid = JSON.parse(localStorage.getItem('book:hasgrid'));
  if (localHasGrid !== null) hasGrid.value = localHasGrid;
  const localCenter = JSON.parse(localStorage.getItem('book:center'));
  if (localCenter !== null) center.value = localCenter;
});

const toggleGrid = () => {
  hasGrid.value = !hasGrid.value;
  localStorage.setItem('book:hasgrid', hasGrid.value.toString());
};

const toggleCenter = () => {
  center.value = !center.value;
  localStorage.setItem('book:center', center.value.toString());
};
</script>

<template>
  <div class="components-book book" :class="{ center }">
    <ComponentsGrid v-if="hasGrid" />
    <ComponentsIndex @togglegrid="toggleGrid" @togglecenter="toggleCenter" />

    <component
      :is="components[route.params.component]"
      v-bind="presetProps"
    />
  </div>
</template>

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
