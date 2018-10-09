describe('HATech Test', function () {
  beforeEach(function () {
    this.actionwords = Object.create(require('./actionwords.js').Actionwords);
  });

  describe('Login', function () {
    function login (login_url, login, login_button, admin_name, admin_pass, sign_out) {
      // When I Navigate to ""
      this.actionwords.iNavigateToP1(env.siteUrl);
      // And I Verify the Url ""
      this.actionwords.iVerifyTheUrlP1(env.siteUrl);
      // Then I click on "env.loginMenu" "<login_button>"
      this.actionwords.iClickOnP1P2(env.loginMenu, login_button);
      // And I Verify the Url "env.siteUrl" "<login_url>"
      this.actionwords.iVerifyTheUrlP1P2(env.siteUrl, login_url);
      // Then I enter my Username "env.username" "<admin_name>"
      this.actionwords.iEnterMyUsernameP1P2(env.username, admin_name);
      // And I enter my Password "env.password" "<admin_pass>"
      this.actionwords.iEnterMyPasswordP1P2(env.password, admin_pass);
      // Then I click on "env.loginButton" "<Login>"
      this.actionwords.iClickOnP1P2(env.loginButton, login);
      // And I Verify the Url ""
      this.actionwords.iVerifyTheUrlP1(env.siteUrl);
      // Then I click on an invisible button "env.signout" "<sign_out>"
      this.actionwords.iClickOnAnInvisibleButtonP1P2(env.signout, sign_out);
    }

    it(' (uid:9b8fac77-d564-498e-8785-7258daa37a8f)', function () {
      login.apply(this, ['login/', '.tml-button', '#menu-item-765 > a > span', 'mhathaway', 'ahp1hzc)IYJdaZJhzJijIOij', 'body > p:nth-child(2) > a']);
    });
  });


  describe('User Login', function () {
    function userLogin (login_url, login, login_button, user_name, user_pass) {
      // And I Verify the Url "env.siteUrl" "<login_url>"
      this.actionwords.iVerifyTheUrlP1P2(env.siteUrl, login_url);
      // Then I enter my Username "env.username" "<user_name>"
      this.actionwords.iEnterMyUsernameP1P2(env.username, user_name);
      // And I enter my Password "env.password" "<user_pass>"
      this.actionwords.iEnterMyPasswordP1P2(env.password, user_pass);
      // Then I click on "env.loginButton" "<Login>"
      this.actionwords.iClickOnP1P2(env.loginButton, login);
      // And I Verify the Url ""
      this.actionwords.iVerifyTheUrlP1(env.siteUrl);
      browser.sleep(7500);
    }

    it(' (uid:e0ac3aad-08c9-4605-b022-03644cc241ca)', function () {
      userLogin.apply(this, ['login/', '.tml-button', '#menu-item-765 > a > span', 'mikehathaway', 'VroewOoNjZu3uE7oZo5taXy6OepOYPU6S8ZpOESsW3MS0xaAoZUHrzXqhGBYQ1TKu45V3sIiKDkymtCUmTMeOhjQmYaKS75Ov']);
    });
  });
});
