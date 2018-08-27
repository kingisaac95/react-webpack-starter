#!/usr/bin/env bash

./node_modules/.bin/webpack-dev-server --mode development --host 0.0.0.0 # replacing this instead of npm start because of some flags

# if you intend to use docker for production, you can add a ternary here to toggle scripts
