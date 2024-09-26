#!/bin/bash

rm -rf ./.amplify-hosting
mkdir -p ./.amplify-hosting/compute/default

cp -r ./build ./.amplify-hosting/compute/default/build
cp -r server.js ./.amplify-hosting/compute/default
cp -r ./node_modules ./.amplify-hosting/compute/default/node_modules
cp -r package.json ./.amplify-hosting/compute/default/package.json
cp -r ./build/client ./.amplify-hosting/static
cp deploy-manifest.json ./.amplify-hosting/deploy-manifest.json

cd ./.amplify-hosting/compute/default
pwd
npm install --omit=dev
ls -la
cd -
pwd
