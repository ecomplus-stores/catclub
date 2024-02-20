//storefront.webpack.js

const path = require('path')

module.exports = () => ({
  resolve: {
    alias: {
      //'./html/ProductVariations.html': path.resolve(__dirname, 'template/js/custom-js/html/ProductVariations.html')
      './js/ShippingCalculator.js': path.resolve(__dirname, 'template/js/custom-js/js/ShippingCalculator.js'),
      './html/ShippingCalculator.html': path.resolve(__dirname, 'template/js/custom-js/html/ShippingCalculator.html'),
      
    }
  }
})
