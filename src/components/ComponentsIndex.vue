<template>
  <div
    class="components-book components-index"
    :class="{ hidden, right: position === 'right' }"
  >
    <div class="componets-index__inner">
      <div
        v-for="(component, key, index) in definitions"
        :key="index"
        class="component"
        :class="{ active: component[0] === $route.params.component }"
      >
        <div class="component__main">
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5" d="M4.75 8L12 4.75L19.25 8L12 11.25L4.75 8Z"
            ></path>
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M4.75 16L12 19.25L19.25 16"
            ></path>
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M19.25 8V16"
            ></path>
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M4.75 8V16"
            ></path>
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M12 11.5V19"
            ></path>
          </svg>
          <router-link
            v-html="component[1].label"
            :to="`/book/${component[0]}/default`"
          ></router-link>
        </div>

        <div class="component__presets">
          <div
            v-for="(preset, key, index) in component[1].presets"
            :key="index"
            class="component__preset"
            :class="{
              active: component[0] === $route.params.component && key === $route.params.preset
            }"
          >
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M10.25 4.75L7.75 19.25"
            ></path>
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M16.25 4.75L13.75 19.25"
            ></path>
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M19.25 8.75H5.75"
            ></path>
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M18.25 15.25H4.75"
            ></path>
          </svg>
            <router-link
              v-html="preset.label"
              :to="`/book/${component[0]}/${key}`"
            ></router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="components-index__toolbar">
      <div v-if="!hidden" class="hide" title="Hide Sidebar" @click="hidden = !hidden">
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M19.25 12C19.25 13 17.5 18.25 12 18.25C6.5 18.25 4.75 13 4.75 12C4.75 11 6.5 5.75 12 5.75C17.5 5.75 19.25 11 19.25 12Z"
          ></path>
          <circle
            cx="12"
            cy="12"
            r="2.25"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
          ></circle>
        </svg>
      </div>
      <div v-else class="show" title="Show Sidebar" @click="hidden = !hidden">
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M18.6247 10C19.0646 10.8986 19.25 11.6745 19.25 12C19.25 13 17.5 18.25 12 18.25C11.2686 18.25 10.6035 18.1572 10 17.9938M7 16.2686C5.36209 14.6693 4.75 12.5914 4.75 12C4.75 11 6.5 5.75 12 5.75C13.7947 5.75 15.1901 6.30902 16.2558 7.09698"
          ></path>
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M19.25 4.75L4.75 19.25"
          ></path>
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M10.409 13.591C9.53033 12.7123 9.53033 11.2877 10.409 10.409C11.2877 9.5303 12.7123 9.5303 13.591 10.409"
          ></path>
        </svg>
      </div>

      <div v-if="position === 'right'" class="left" title="Move Sidebar Left" @click="position = 'left'">
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M10.25 6.75L4.75 12L10.25 17.25"
          ></path>
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M19.25 12H5"
          ></path>
        </svg>
      </div>
      <div v-else class="right" title="Move Sidebar Right" @click="position = 'right'">
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M13.75 6.75L19.25 12L13.75 17.25"
          ></path>
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M19 12H4.75"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import definitions from '../assets/definitions';

export default {
  name: 'ComponentsIndex',

  data() {
    return {
      hidden: false,
      position: 'left',
    };
  },

  computed: {
    definitions() {
      return Array.from(definitions);
    },
  },
};
</script>

<style lang="scss" scoped>
.components-index {
  position: fixed;
  top: 40px;
  left: 40px;
  padding: 20px 10px;
  border-radius: 10px;
  background-color: #FAFAFA;
  height: calc(100vh - 80px);
  box-sizing: border-box;
  min-width: 240px;
  width: 240px;
  overflow-y: scroll;

  font-family: 'San Francisco', Helvetica, Arial, sans-serif;
  letter-spacing: 0.05em;
  font-size: 12px;

  box-shadow: 0px 5px 30px rgba($color: black, $alpha: 0.17);

  &.hidden {
    opacity: 0.1;
    pointer-events: none;
  }

  &.right {
    left: auto;
    right: 40px;
  }

  .component {
    margin: 10px 0px;

    &__main {
      padding: 10px 20px;
      border-radius: 10px;
      box-sizing: border-box;
      background-color: #f0f0f0;
    }

    &:first-child {
      margin-top: 0px;
    }

    &:last-child {
      margin-bottom: 0px;
    }

    &__main {
      display: flex;
      align-items: center;
    }

    svg {
      margin-right: 10px;
    }

    a {
      color: inherit;
      text-decoration: none;

      &:visited,
      &:active {
        color: inherit;
      }
    }

    &.active .component__main {
      background-color: #21D4FD;
      background-image: linear-gradient(225deg, #21D4FD 0%, #B721FF 100%);
      box-shadow: 0px 0px 10px rgba($color: #000000, $alpha: 0.17);

      a {
        color: white;
      }

      svg {
        color: white;
      }
    }

    &.active .component__presets {
      height: auto;
    }

    &__presets {
      height: 0px;
      overflow: hidden;
    }

    &__preset {
      padding: 5px 20px;
      margin: 10px 0px;
      border-radius: 10px;

      display: flex;
      align-items: center;

      svg {
        width: 14px;
      }

      &.active {
        color: #B721FF;
      }
    }
  }

  &__toolbar {
    position: absolute;
    bottom: 10px;
    right: 20px;

    display: flex;
    align-items: center;

    @at-root .hidden & {
      pointer-events: all;
    }

    > div {
      cursor: pointer;
    }
  }
}
</style>
