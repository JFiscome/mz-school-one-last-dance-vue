module.exports = (res) => {
  const designWidth = res.file.indexOf('/node_modules/vant') === -1 ? 750 : 375
  return {
    plugins: {
    // ...
      'postcss-px-to-viewport': {
      // options
        unitToConvert: 'px',
        viewportWidth: designWidth,
        unitPrecision: 5,
        propList: ['*'],
        viewportUnit: 'vw',
        fontViewportUnit: 'vw',
        selectorBlackList: [],
        minPixelValue: 1,
        mediaQuery: false,
        replace: true,
        exclude: [],
        include: undefined,
        landscape: false,
        landscapeUnit: 'vw',
        landscapeWidth: 1334
      }
    }
  }
}
