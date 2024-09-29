#!/bin/bash

rm -rf ./.amplify-hosting
mkdir -p ./.amplify-hosting/compute/default

cp -r ./build ./.amplify-hosting/compute/default/build
cp -r ./node_modules ./.amplify-hosting/compute/default/node_modules
cp -r package.json ./.amplify-hosting/compute/default/package.json
cp -r ./server/index.js ./.amplify-hosting/compute/default/index.js
cp -r ./server/env ./.amplify-hosting/compute/default/env
cp -r ./build/client ./.amplify-hosting/static
cp deploy-manifest.json ./.amplify-hosting/deploy-manifest.json

cd ./.amplify-hosting/compute/default
pwd
npm install --omit=dev

