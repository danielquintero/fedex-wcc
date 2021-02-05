import { getPurgeCssConfig } from '../webpack.common';
/**
 * Export a function. Accept the base config as the only param.
 * @param {Object} options
 * @param {Required<import('webpack').Configuration>} options.config
 * @param {'DEVELOPMENT' | 'PRODUCTION'} options.mode - change the build configuration. 'PRODUCTION' is used when building the static version of storybook.
 */
module.exports = async ({ config, mode }) => {
  const { appPath, optimization = true } = config;

  // Add support for Tailwind
  config.module.rules.push({
    test: /\.(scss|css)$/i,
    use: [
      {
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            plugins: [
              require('tailwindcss'),
              require('autoprefixer'),
              ...(optimization ? [getPurgeCssConfig(appPath)] : []),
            ],
          },
        },
      },
      {
        loader: 'sass-loader',
        options: {
          sassOptions: {
            includePaths: ['libs/'],
          },
        },
      },
    ],
  });

  // Return the altered config
  return config;
};
