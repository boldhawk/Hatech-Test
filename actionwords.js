exports.Actionwords = {
  iNavigateToP1: function (p1) {
    browser.get('https://' + p1)
  },
  iVerifyTheUrlP1: function (p1) {
   const EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://' + p1), 2500);
  },
  iClickOnP1P2: function (p1, p2) {
    element(by.css(p1)).click()
  },
  iVerifyTheUrlP1P2: function (p1, p2) {
   const EC = protractor.ExpectedConditions;
   browser.wait(EC.urlContains('https://' + p1 + '/' + p2), 2500);
  },
  iEnterMyUsernameP1P2: function (p1, p2) {
   element(by.css(p1)).sendKeys('' + p2)
  },
  iEnterMyPasswordP1P2: function (p1, p2) {
   element(by.css(p1)).sendKeys('' + p2)
  },
  iClickOnAnInvisibleButtonP1P2: function (p1, p2) {
    browser.get('https://' + p1)
    browser.sleep(2500);
    element(by.css(p2)).click()
  }
};