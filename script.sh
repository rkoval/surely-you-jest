#!/usr/bin/env bash

cd barebones

# explain barebones repo

# execute basic command
jest

# show off API
jest --notify
jest --help

cd ../matchers
# just demo of matchers
# matchers/assertions are vital to testing because without them,
# you have no enforcement of the behavior of your tests.
# you become reliant on everyone manually running them, which is problematic because
# we are human.

jest --watch

cd ../react-app

# explain react-app; main changes:
# - ejected
# - jest.config.js
# - changed App.js
#
# otherwise, everything was pretty much already set up from create-react-app

jest App
jest --coverage App

cd ../puppeteer

# talk about puppeteer
# - mention selenium
# - run without headless mode and demonstrate button clicks
jest
