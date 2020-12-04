const path = require('path');
const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin');

module.exports = {
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('ts-loader'),
        },
        {
          loader: require.resolve('react-docgen-typescript-loader'),
          options: {
            tsconfigPath: path.resolve(__dirname, '..', 'tsconfig.json'),
          },
        },
        {
          loader: require.resolve('@storybook/source-loader'),
          options: {
            exclude: [/node_modules/],
            enforce: 'pre',
          },
        },
      ],
    });

    config.module.rules.push({
      test: /\.mdx$/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            plugins: ['@babel/plugin-transform-react-jsx'],
          },
        },
        {
          loader: require.resolve('@mdx-js/loader'),
          options: {
            compilers: [createCompiler({})],
          },
        },
      ],
    });

    config.resolve.extensions.push('.ts', '.tsx', '.mdx');

    return config;
  },
};
