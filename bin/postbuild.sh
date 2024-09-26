#!/bin/bash

rm -rf ./.amplify-hosting
rm -rf node_modules
npm install --omit=dev
mkdir -p ./.amplify-hosting/compute/default

cp -r ./build ./.amplify-hosting/compute/default/build
cp -r ./node_modules ./.amplify-hosting/compute/default/node_modules
cp -r package.json ./.amplify-hosting/compute/default/package.json
cp -r public ./.amplify-hosting/static

cp deploy-manifest.json ./.amplify-hosting/deploy-manifest.json