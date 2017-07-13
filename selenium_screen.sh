#!/usr/bin/env bash
if ! screen -list | grep -q "selenium"; then
    if   which xvfb-run; then
        # use xvfb-run on the server to simulate a monitor
        echo "## launching screen session and starting selenium-standalone with xcfb-run ##";
        screen -S selenium -d -m xvfb-run --server-args="-screen 0, 1366x768x24" ./node_modules/.bin/selenium-standalone start
    else
        echo "## launching screen session and starting selenium-standalone ##";
        screen -S selenium -d -m  ./node_modules/.bin/selenium-standalone start
    fi
fi