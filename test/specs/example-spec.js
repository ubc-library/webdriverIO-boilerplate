let utility = require('./../utility');
let config = utility.config();
console.log(utility)

describe('CR2: Test as Staff', function () {
    before(function (done) {
        // runs before all tests in this block
    });

    // log in via CWL (if applicable)
    // utility.login('libguest', config.libguest_pass)

    describe('Staff Home Page', function () {
        this.retries(3);

        // TODO: These tests are examples from LOCR CR2. Replace them with your own.

        it('has the correct title', function () {
            browser.url(config.base_url);
            console.log('testing: ' + browser.getUrl());
            expect(browser.getText('h2')).to.equal('UBC Library Online Course Reserves (LOCR)')
        });
        it('can select search tab', function () {
            browser.click('#tab > li:nth-child(2) > a')
            expect(browser.isVisible('#course_tab_search')).to.equal(true)
        });
        it('can search for courses, find current test course', function () {
            browser.clearElement('#csearch')
            browser.addValue('#csearch', 'LOCR 1.6 Test')
            let searchTab = $('#course_tab_search');
            expect(searchTab.$("a=LOCR 1.6 Test").isExisting()).to.equal(true);
        });
        it('can navigate to the test course', function () {
            let searchTab = $('#course_tab_search');
            let expectUrl = searchTab.$("a=LOCR 1.6 Test").getAttribute('href');
            searchTab.$("a=LOCR 1.6 Test").click()
            expect(browser.getUrl()).to.equal(expectUrl);
            browser.back()
        });
        it('populates the previous searches list', function () {
            browser.click('#tab > li:nth-child(3) > a')
            expect($$('#prevsearches tr').length).to.be.above(0)
        })
        it('can navigate to a program', function () {
            let program = $('#programs').$$('li a')[0];
            let href = program.getAttribute('href')
            program.click()
            expect(browser.getUrl()).to.include(href);
            browser.back()
        })
    });

    after(function(){
        // utility.logout()
    })
})
