/* eslint-disable */
/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

//  module.exports = {
//   transformer: {
//     getTransformOptions: async () => ({
//       transform: {
//         experimentalImportSupport: false,
//         inlineRequires: false,
//       },
//     }),
//   },
//   resolver: {
//     sourceExts: ['jsx', 'js', 'ts', 'tsx'], //add here
//   },
// };

// const { getDefaultConfig } = require('metro-config');

// module.exports = (async () => {
//   const {
//     resolver: {sourceExts, assetExts},
//   } = await getDefaultConfig();
//   return {
//     transformer: {
//       // getTransformOptions: async () => ({
//       //   transform: {
//       //     experimentalImportSupport: false,
//       //     inlineRequires: true,
//       //   },
//       // }),
//       babelTransformerPath: require.resolve('react-native-svg-transformer'),
//     },
//     resolver: {
//       assetExts: assetExts.filter(ext => ext !== 'svg'),
//       sourceExts: [...sourceExts, 'jsx', 'js', 'ts', 'tsx', 'cjs', 'svg'],
//     },
//   };
// })();

const { getDefaultConfig } = require('metro-config');

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig();
  return {
    transformer: {
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: true,
        },
      }),
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
    // resolver: {
    //   assetExts: assetExts.filter(ext => ext !== "svg"),
    //   babelTransformerPath: require.resolve("react-native-svg-transformer"),
    // },
    resolver: {
      assetExts: assetExts.filter((ext) => ext !== 'svg'),
      sourceExts: [...sourceExts, 'jsx', 'js', 'ts', 'tsx', 'cjs', 'svg'],
    },
  };
})();
