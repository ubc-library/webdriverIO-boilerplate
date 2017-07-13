// Tests to make sure a wrong password fails. Use for CWL login where appropriate.

// var utility = require('./../utility');
//
// describe('CR2 Login Page', function() {
//     browser.url('/');
//     it('should fail with incorrect pass', function () {
//         browser.click('#login-btn')
//         browser.waitUntil(function() {
//             return browser.getUrl().split('?')[0] === 'https://cas.id.ubc.ca/ubc-cas/login'
//         }, 10000, "timed out");
//         browser.setValue('#username', 'libguest');
//         browser.setValue('#password', 'not the password');
//         browser.click('#login > input.ui-button.ui-widget.ui-state-default.ui-corner-all.ui-button-text-only.btn');
//         expect(browser.getText("#fm1 div")[0]).to.equal("Login Failed. You have entered an invalid login name/password combination. Please try again.")
//     });
// });

