/* tslint:disable:no-var-requires */
/* tslint:disable:no-require-imports */
import {
  CustomWebpackBrowserSchema,
  TargetOptions,
} from '@angular-builders/custom-webpack';
import * as webpack from 'webpack';
import { getCommonConfig } from '../../webpack.common';

const path = require('path');

// tslint:disable-next-line:no-default-export
export default (
  config: webpack.Configuration,
  options: CustomWebpackBrowserSchema,
  targetOptions: TargetOptions
) => {
  const { moduleRules, plugins } = getCommonConfig({
    appPath: path.relative('.', __dirname),
    appName: 'WCC',
    isProd: targetOptions.configuration === 'production',
    optimization: !!options.optimization,
  });

  plugins.forEach((p) => config?.plugins?.push(p) ?? p);
  moduleRules.forEach((r) => config?.module?.rules.push(r) ?? r);

  return config;
};
