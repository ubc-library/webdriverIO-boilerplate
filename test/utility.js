var utility = function() {};
var request = require('request');
var rp = require('request-promise');
var config = require('./config.json');

utility.prototype.config = function(){
    return config;
}


// login via CWL
utility.prototype.login = function (user, pass) {
    return describe('Log in', function () {
        this.retries(3)
        it('accepts login form with correct pass', function () {
            var expectUrl = config.base_url;
            browser.url(config.base_url);
            browser.click('#login-btn')
            browser.setValue('#username', user);
            browser.setValue('#password', pass );
            browser.click('#login > input.ui-button.ui-widget.ui-state-default.ui-corner-all.ui-button-text-only.btn');
            expect(browser.getUrl()).to.equal(expectUrl);
            expect(browser.isExisting('#login-btn')).to.equal(false)
        });
    }, 3);
}

// TODO: this logout is specific to LOCR
utility.prototype.logout = function () {
    return describe('Log Out', function(){
        this.retries(3);
        it('logs out successfully', function(){
            browser.click('#log-out')
            // browser.waitUntil(function () {
            //     return browser.getUrl().split('?')[0] === config.base_url;
            // }, 5000, "timed out");
            browser.pause(300)
            expect(browser.isExisting('#login-btn')).to.equal(true)
        })
    });
}

utility.prototype.debug = function (test) {
    test.timeout(10000000)
    browser.debug();
}


module.exports = new utility();