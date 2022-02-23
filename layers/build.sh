#!/usr/bin/env bash

set -o errexit          # Exit on most errors

echo 'Starting build of the node package modules layer...'

echo 'Removing current layer contents...'
rm -rf ./nodejs/node_modules/aws-sdk/node_modules

cd nodejs/

npm ci

echo 'Done!'