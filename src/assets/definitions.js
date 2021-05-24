const definitions = new Map();

definitions.set('ComponentName', {
  label: 'ComponentName',
  presets: {
    default: {
      label: 'Default',
      props: {},
    },
    variationOne: {
      label: 'One',
      props: {},
    },
    variationTwo: {
      label: 'Two',
      props: {},
    },
    variationThree: {
      label: 'Three',
      props: {},
    },
    variationFour: {
      label: 'Four',
      props: {},
    },
  },
});

definitions.set('AppButton', {
  label: 'AppButton',
  presets: {
    default: {
      label: 'Default',
      props: {},
    },
  },
});

definitions.set('AppHeader', {
  label: 'AppHeader',
  presets: {
    default: {
      label: 'Default',
      props: {},
    },
  },
});

export default definitions;
