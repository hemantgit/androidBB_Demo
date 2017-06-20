#!/bin/bash

BASE_PATH="app/src/main/assets"

if [ "$1" == "ios" ]; then
	BASE_PATH="WebAssets/assets"
fi

echo "Path to assets is: $BASE_PATH"

cp -r conf ../$BASE_PATH/backbase/
echo "Configuration copied"
cp -r static ../$BASE_PATH/backbase/
echo "Static files copied"
cd src
bb-package project . --output my-project.zip
bb-package cxp-statics my-project.zip mobile-package.zip
unzip -qq -o cxp-statics.zip -d ../../$BASE_PATH/backbase/static
echo "Widgets compiled and copied into base path"
rm *.zip
echo "Clean up"
