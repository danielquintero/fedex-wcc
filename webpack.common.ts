import * as webpack from 'webpack';

const purgecss = require('@fullhuman/postcss-purgecss');
const pJson = require('./package.json');

type CommonConfig = {
  appPath: string;
  appName: string;
  apiHost?: string;
  isProd?: boolean;
  optimization?: boolean;
};

export function getCommonConfig(
  config: CommonConfig
): { plugins: Array<webpack.Plugin>; moduleRules: Array<webpack.RuleSetRule> } {
  return {
    moduleRules: getModuleRules(config),
    plugins: getCommonPlugins(config),
  };
}

function getModuleRules(
  commonConfig: CommonConfig
): Array<webpack.RuleSetRule> {
  const { appPath, optimization = false } = commonConfig;

  return [
    {
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
    },
  ];
}

function getCommonPlugins(commonConfig: CommonConfig): Array<webpack.Plugin> {
  const { appName, apiHost = '/api/', isProd } = commonConfig;

  return [
    new webpack.DefinePlugin({
      ENV_IS_PROD: JSON.stringify(isProd),
      ENV_APP_NAME: JSON.stringify(appName),
      ENV_APP_VERSION: JSON.stringify(pJson.version),
    }),
  ];
}

export function getPurgeCssConfig(appPath: string) {
  return purgecss({
    // Specify the paths to all of the template files in your project
    content: [`${appPath}/**/*.html`, 'libs/**/*.html'],

    // these classes are added by Material, should be kept in the stylesheet!
    safelist: [/^mat-form/, /^mat-input/, /^cdk-text/],

    // This is the function used to extract class names from your templates
    defaultExtractor: (content: string) => {
      // Capture as liberally as possible, including things like `h-(screen-1.5)`
      const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [];

      // Capture classes within other delimiters like .block(class="w-1/2") in Pug
      const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || [];

      return broadMatches.concat(innerMatches);
    },
  });
}
