<template>
  <div
    class="components-book components-index"
    :class="{ hidden, fullyHidden, right: position === 'right', dark }"
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
      <div v-if="!$parent.center" @click="$emit('togglecenter')" class="center">
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.25 19.25V16.75C9.25 15.6454 8.35457 14.75 7.25 14.75H4.75"></path>
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.75 19.25V16.75C14.75 15.6454 15.6454 14.75 16.75 14.75H19.25"></path>
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.75 4.75V7.25C14.75 8.35457 15.6454 9.25 16.75 9.25H19.25"></path>
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.25 4.75V7.25C9.25 8.35457 8.35457 9.25 7.25 9.25H4.75"></path>
        </svg>
      </div>
      <div v-else @click="$emit('togglecenter')" class="expand">
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.75 14.75V17.25C4.75 18.3546 5.64543 19.25 6.75 19.25H9.25"></path>
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.25 14.75V17.25C19.25 18.3546 18.3546 19.25 17.25 19.25H14.75"></path>
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.25 9.25V6.75C19.25 5.64543 18.3546 4.75 17.25 4.75H14.75"></path>
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.75 9.25V6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H9.25"></path>
        </svg>
      </div>

      <div @click="$emit('togglegrid')" class="grid" :style="{ color: this.$parent.hasGrid ? '#21D4FD' : '' }">
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.75 5.75C4.75 5.19772 5.19772 4.75 5.75 4.75H9.25C9.80228 4.75 10.25 5.19772 10.25 5.75V9.25C10.25 9.80228 9.80228 10.25 9.25 10.25H5.75C5.19772 10.25 4.75 9.80228 4.75 9.25V5.75Z"/>
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.75 14.75C4.75 14.1977 5.19772 13.75 5.75 13.75H9.25C9.80228 13.75 10.25 14.1977 10.25 14.75V18.25C10.25 18.8023 9.80228 19.25 9.25 19.25H5.75C5.19772 19.25 4.75 18.8023 4.75 18.25V14.75Z"/>
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.75 5.75C13.75 5.19772 14.1977 4.75 14.75 4.75H18.25C18.8023 4.75 19.25 5.19772 19.25 5.75V9.25C19.25 9.80228 18.8023 10.25 18.25 10.25H14.75C14.1977 10.25 13.75 9.80228 13.75 9.25V5.75Z"/>
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.75 14.75C13.75 14.1977 14.1977 13.75 14.75 13.75H18.25C18.8023 13.75 19.25 14.1977 19.25 14.75V18.25C19.25 18.8023 18.8023 19.25 18.25 19.25H14.75C14.1977 19.25 13.75 18.8023 13.75 18.25V14.75Z"/>
        </svg>
      </div>

      <div v-if="dark" class="light" @click="dark = !dark">
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="3.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></circle>
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 2.75V4.25"></path>
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.25 6.75L16.0659 7.93416"></path>
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21.25 12.0001L19.75 12.0001"></path>
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.25 17.2501L16.0659 16.066"></path>
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 19.75V21.25"></path>
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.9341 16.0659L6.74996 17.25"></path>
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.25 12.0001L2.75 12.0001"></path>
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.93405 7.93423L6.74991 6.75003"></path>
        </svg>
      </div>
      <div v-else class="dark" @click="dark = !dark">
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.25 15.7499C17.2352 16.2904 16.23 16.25 15 16.25C10.9959 16.25 7.75 13.0041 7.75 9.00001C7.75 7.77001 7.70951 6.76474 8.25 5.74994C5.96125 6.96891 4.75 9.2259 4.75 12C4.75 16.004 7.99594 19.25 12 19.25C14.7741 19.25 17.031 18.0387 18.25 15.7499Z"></path>
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 4.75C16 6.95914 14.9591 9 12.75 9C14.9591 9 16 11.0409 16 13.25C16 11.0409 17.0409 9 19.25 9C17.0409 9 16 6.95914 16 4.75Z"></path>
        </svg>
      </div>

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

      <div
        v-if="position === 'right'"
        class="left"
        title="Move Sidebar Left"
        @click="position = 'left'"
      >
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
      <div
        v-else
        class="right"
        title="Move Sidebar Right"
        @click="position = 'right'"
      >
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
      fullyHidden: false,
      position: 'left',
      dark: false,
    };
  },

  computed: {
    definitions() {
      return Array.from(definitions);
    },
  },

  mounted() {
    window.addEventListener('keydown', this.keyDown);
  },

  methods: {
    keyDown(event) {
      if (event.keyCode === 72 && event.ctrlKey) {
        event.preventDefault();
        this.fullyHidden = !this.fullyHidden;
      }
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
  background-color: #f8f8f8;
  height: calc(100vh - 80px);
  box-sizing: border-box;
  min-width: 240px;
  width: 240px;
  overflow-y: scroll;

  font-family: 'San Francisco', Helvetica, Arial, sans-serif;
  font-weight: bold;
  letter-spacing: 0.02em;
  font-size: 12px;

  box-shadow: 0px 5px 30px rgba($color: black, $alpha: 0.17);

  z-index: 1000;

  @media screen and (max-width: 768px) {
    display: none;
  }

  &.fullyHidden {
    display: none;
  }

  &.hidden {
    opacity: 0.1;
    pointer-events: none;
  }

  &.right {
    left: auto;
    right: 40px;
  }

  &.dark {
    background-color: #171717;
    color: #FAFAFA;

    & .component__main {
      background-color: #292929;
    }

    & .components-index__toolbar > div:hover {
      background-color: #292929;
    }
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

    @at-root .right & {
      right: auto;
      left: 20px;
      flex-direction: row-reverse;
    }

    > div {
      cursor: pointer;
      width: 35px;
      height: 35px;
      border-radius: 10px;

      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        background-color: #f0f0f0;
      }
    }
  }
}
</style>
