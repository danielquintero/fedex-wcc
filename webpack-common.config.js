"use strict";

/*
  Reusable Webpack config elements
  Initial goal: avoid config duplication between the main webpack config and the storybook webpack config

 */
const helpers = require("./helpers");

/*
  Tailwind config
*/
const tailwindWebpackRule = {
  test: /\.css$/,
  loader: "postcss-loader",
  options: {
    postcssOptions: {
      ident: 'postcss',
      syntax: 'postcss',
      plugins: [
        require('postcss-import'),
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    }
  },
};

exports.tailwindWebpackRule = tailwindWebpackRule;
