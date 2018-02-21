#!/usr/bin/env bash

cd barebones

# explain barebones repo

# execute basic command
jest

# show off notifications
jest --notify

cd ../matchers
# just demo of matchers
# matchers/assertions are vital to testing because without them,
# you have no enforcement of the behavior of your tests.
# you become reliant on everyone manually running them, which is problematic because
# we are human.

jest

cd ../react-app

# explain react-app; main changes:
# - ejected
# - jest.config.js
# - changed App.js
#
# otherwise, everything was pretty much already set up from create-react-app

