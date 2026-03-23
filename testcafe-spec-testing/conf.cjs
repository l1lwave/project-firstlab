exports.config = {
  framework: 'jasmine',
  // Для Safari зазвичай краще використовувати directConnect, 
  // або переконатися, що seleniumAddress працює
  seleniumAddress: 'http://localhost:4444/wd/hub',
  
  specs: ['spec.js'],
  
  capabilities: {
    browserName: 'safari'
  },

  onPrepare: function() {
    // Наш макет index.html не на Angular, тому вимикаємо очікування
    browser.waitForAngularEnabled(false);
  }
};