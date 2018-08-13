module.exports = {
  extends: [
    'plugin:shopify/react',
    'plugin:shopify/polaris',
    'plugin:shopify/jest',
  ],
  overrides: [
    {
      files: ['*.test.*'],
      rules: {
        'shopify/jsx-no-hardcoded-content': 'off',
      },
    },
  ],
};
