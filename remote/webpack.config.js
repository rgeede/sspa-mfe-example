const { merge } = require('webpack-merge')
const singleSpaDefaults = require('webpack-config-single-spa-react-ts')
const path = require('path')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: 'sys',
    projectName: 'remote',
    webpackConfigEnv,
    argv,
  })

  const customConfig = {
    entry: {
      // main entry point
      'sys-remote': defaultConfig.entry,
      // entry point for the Card component
      card: path.resolve(__dirname, 'src/components/card/Card.spa.tsx'),
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist'),
      libraryTarget: 'system',
    },
    plugins: [
      new ModuleFederationPlugin({
        name: 'remote',
        library: { type: 'var', name: 'remote' },
        // library: { type: 'system' },
        filename: 'remoteEntry.js',
        exposes: {
          './Card': './src/components/card/Card.spa.tsx',
        },
        shared: {
          react: { singleton: true, eager: true },
          "react-dom": { singleton: true, eager: true },
          "single-spa-react": { singleton: true, eager: true },
          // possibly include "react/jsx-runtime" and other libraries if explicitly needed
        },
        // shared: ['react', 'react-dom', 'single-spa-react'],
      }),
    ],
  }

  return merge(defaultConfig, customConfig)
}
