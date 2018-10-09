describe('HATech Test', function () {
  beforeEach(function () {
    this.actionwords = Object.create(require('./actionwords.js').Actionwords);
  });

  describe('Login', function () {
    function login (admin_login_url, login, login_button, hatech_admin_url, admin_name, admin_pass, profile, sign_out) {
      // When I Navigate to ""
      this.actionwords.iNavigateToP1(env.siteUrl);
      // And verify the url ""
      this.actionwords.verifyTheUrlP1(env.siteUrl);
      // Then I click on "<login_button>"
      this.actionwords.iClickOnP1(login_button);
      // And I Verify that Admin Url "env.siteUrl" "<admin_login_url>"
      this.actionwords.iVerifyThatAdminUrlP1P2(env.siteUrl, admin_login_url);
      // Then I enter my Admin Username "<admin_name>"
      this.actionwords.iEnterMyAdminUsernameP1(admin_name);
      // And I enter my Admin Password "<admin_pass>"
      this.actionwords.iEnterMyAdminPasswordP1(admin_pass);
      // Then I click "<Login>"
      this.actionwords.iClickP1(login);
      // And verify the url is "<hatech_admin_url>"
      this.actionwords.verifyTheUrlIsP1(hatech_admin_url);
      // Then I hover over "<Profile>"
      this.actionwords.iHoverOverP1(profile);
      // And I Click Log Out "<Sign_Out>"
      this.actionwords.iClickLogOutP1(sign_out);
    }

    it(' (uid:a32fd08a-b670-4929-9840-e18bd8cc44eb)', function () {
      login.apply(this, ['login', '.tml-button', '#menu-item-765 > a > span', 'wp-admin', 'mhathaway', 'ahp1hzc)IYJdaZJhzJijIOij', '#wp-admin-bar-my-account > .ab-item', '#wp-admin-bar-logout > .ab-item\'']);
    });
  });


  describe('User Login', function () {
    function userLogin (user_login_url, login, login_button, base_user_url, user_name, user_pass) {
      // When I Navigate to "<Base_User_url>"
      this.actionwords.iNavigateToP1(base_user_url);
      // And verify the url "<Base_User_url>"
      this.actionwords.verifyTheUrlP1(base_user_url);
      // Then I click on "<login_button>"
      this.actionwords.iClickOnP1(login_button);
      // And I Verify that User Url "<User_login_url>"
      this.actionwords.iVerifyThatUserUrlP1(user_login_url);
      // Then I enter my User Username "<User_name>"
      this.actionwords.iEnterMyUserUsernameP1(user_name);
      // And I enter my User Password "<User_pass>"
      this.actionwords.iEnterMyUserPasswordP1(user_pass);
      // Then I click "<Login>"
      this.actionwords.iClickP1(login);
      // And verify the url "<Base_User_url>"
      this.actionwords.verifyTheUrlP1(base_user_url);
    }

    it(' (uid:d3408f00-ae02-4b8b-ae66-52998d92a4ed)', function () {
      userLogin.apply(this, ['login', '.tml-button', '#menu-item-765 > a > span', 'hatech.io', 'mikehathaway', 'VroewOoNjZu3uE7oZo5taXy6OepOYPU6S8ZpOESsW3MS0xaAoZUHrzXqhGBYQ1TKu45V3sIiKDkymtCUmTMeOhjQmYaKS75Ov']);
    });
  });
});
