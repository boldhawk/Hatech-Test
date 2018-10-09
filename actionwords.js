exports.Actionwords = {
  iNavigateToP1: function (p1) {
    browser.get('https://' + p1)
  },
  verifyTheUrlP1: function (p1) {
   const EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://' + p1), 2500);
  },
  iClickOnP1: function (p1) {
    element(by.css(p1)).click()
  },
  iVerifyThatAdminUrlP1P2: function (p1, p2) {
   const EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://' + p1 + '/' + p2), 2500);
  },
  iEnterMyAdminUsernameP1: function (admin_name) {
   element(by.css('#user_login')).sendKeys('' + admin_name)
  },
  iEnterMyAdminPasswordP1: function (admin_pass) {
   element(by.css('#user_pass')).sendKeys('' + admin_pass)
  },
  iClickP1: function (p1) {
   element(by.css('.tml-button')).click()
  },
  verifyTheUrlIsP1: function (p1) {
   const EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://hatech.io'), 2500);
  },
  iHoverOverP1: function (p1) {
  },
  iClickLogOutP1: function (p1) {
  },
};